import {FastifyInstance} from "fastify";
import {z} from 'zod'
import {prisma} from "./prisma";
import dayjs from "dayjs";

export async function appRoutes(app: FastifyInstance) {

    //Looking for the habit: Title and Week days
    app.post('/habits', async (request) => {
        const createHabitBody = z.object({
            title: z.string(),
            weekDays: z.array(
                z.number().min(0).max(6)
            )
        })
        const {title, weekDays} = createHabitBody.parse(request.body)

        const today = dayjs().startOf('day').toDate()

        await prisma.habit.create({
            data: {
                title,
                created_at: today,
                weekDays: {
                    create: weekDays.map(weekDay => {
                        return {
                            week_day: weekDay,
                        }
                    })
                }
            }
        })
    })

    //Displays the habits set to the day selected and their progress
    app.get('/day', async (request) => {

        const getDayStatus = z.object({
            date: z.coerce.date()
        })

        const {date} = getDayStatus.parse(request.query) //localhost:3333/day?date=2023-01-01t00.00.000z
        const parsedDate = dayjs(date).startOf('day')
        const weekDay = parsedDate.get('day')

        // load all habits set and completed for that day
        const habitsAvailable = await prisma.habit.findMany({
            where: {
                created_at: {
                    lte: date,
                },
                weekDays: {
                    some: {
                        week_day: weekDay,
                    }
                }
            }
        })

        const day = await prisma.day.findUnique({
            where: {
                date: parsedDate.toDate(),
            },

            include: {
                dayHabits: true,
            }
        })

        const completedHabits = day?.dayHabits.map(dayHabit => {
            return dayHabit.habit_id
        })

        return {
            habitsAvailable,
            completedHabits,
        }

    })

    //Check / uncheck a completed habit
    app.patch('/habits/:id/toggle', async (request) => {
        // route param => parameter identifier

        const toggleHabit = z.object({
            id: z.string().uuid(),
        })

        const {id} = toggleHabit.parse(request.params)
        const today = dayjs().startOf('day').toDate()
        let day = await prisma.day.findUnique({
            where: {
                date: today
            }
        })

        if (!day) {
            day = await prisma.day.create({
                data: {
                    date: today,
                }
            })
        }

        const dayHabit = await prisma.dayHabit.findUnique({
            where: {
                day_id_habit_id: {
                    day_id: day.id,
                    habit_id: id
                }
            }
        })

        if (dayHabit) {
            await prisma.dayHabit.delete({
                where: {
                    id: dayHabit.id,
                }
            })
        } else {
            await prisma.dayHabit.create({
                data: {
                    day_id: day.id,
                    habit_id: id
                }
            })
        }
    })

    //
    app.get('/summary', async () => {

        const summary = await prisma.$queryRaw`
        SELECT 
            D.id, 
            D.date,
            (
            SELECT
                cast(count(*) as float)
            FROM day_habit DH
            WHERE DH.day_id = D.id
            ) as completed, 
            (
            SELECT
                cast(count(*) as float)
                FROM habit_week_days HWD
                JOIN habits H
                    ON H.id = HWD.habit_id
                WHERE
                    HWD.week_day = cast(strftime('%w', D.date/1000, 'unixepoch') as int)
                    AND H.created_at <= D.date
            ) as available
        FROM days D
        `
        return summary
    })
}
