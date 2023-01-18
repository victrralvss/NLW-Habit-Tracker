import  { PrismaClient } from '@prisma/client'
export const prisma = new PrismaClient({
    log: ['query']
}) // Connects with the database