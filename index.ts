import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express';

const express = require('express')
const prisma = new PrismaClient()
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

async function main() {
    console.log('main function')
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })

app.get('/todos', async (req: Request, res: Response) => {
    let todos = await prisma.todo.findMany()
    res.send(todos).status(200)
})

app.post('/todos', async (req: Request, res: Response) => {
    let { title } = req.body

    await prisma.todo.create({
        data: {
            title: title
        }
    })
    res.send('todo item added successfully').status(200)
})


app.listen(8080, () => {
    console.log('server running at port 8080')
})
