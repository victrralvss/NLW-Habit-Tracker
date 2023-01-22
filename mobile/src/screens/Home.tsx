import {Text, ScrollView, View} from "react-native";
import {generateDaysPassed} from "../utils/generate-days-passed";
import {Header} from "../components/Header";
import {HabitDay, DAY_SIZE} from "../components/HabitDay";
import { useNavigation } from '@react-navigation/native'

const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
const daysPassed = generateDaysPassed()
const minimumDaysToDisplay = 18 * 5 // 18 weeks
const daysToFill = minimumDaysToDisplay - daysPassed.length

export function Home() {

    const { navigate } = useNavigation()

    return (
        <View className="flex-1 bg-background px-8 pt-16 fle">

            <Header/>

            <View className="flex-row mt-8 mb-2 w-full justify-between">
                {
                    weekDays.map((weekDay, i) => (
                    <Text
                        key={`${weekDay}-${i}`}
                        className="text-zinc-400 text-xl font-bol text-center mx-1"
                        style={{width: DAY_SIZE}}
                    >
                        {weekDay}
                    </Text>
                    ))
                }
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 10}}
            >
                <View className="flex-row flex-wrap">
                    {
                        daysPassed.map(date => (
                            <HabitDay
                                key={date.toISOString()}
                                onPress={() => navigate('habit', {date: date.toISOString()})}
                            />
                        ))
                    }
                    {
                        daysToFill > 0 && Array
                            .from({length: daysToFill})
                            .map((_, i) => (
                                <View
                                    className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40 "
                                    style={{width: DAY_SIZE, height: DAY_SIZE}}
                                />
                            ))
                    }
                </View>

            </ScrollView>

        </View>

    )
}