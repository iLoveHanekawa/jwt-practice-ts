import express, { Request, Response } from "express"
import { connectDB } from "./db/connectDB"
import 'dotenv/config'
import 'express-async-errors'

const app = express()

app.get('/', (req: Request, res: Response) => {
    res.send('hi mom')
})

const getPort = () => {
    return Number(process.env.PORT) || 5000
}

const port = getPort()

const start = async (port: number, uri: string) => {
    try {
        await connectDB(uri)
        console.log('connected to db')
        app.listen(port, () => {
            console.log(`server listening at port: ${port}`)
        })

    } catch (error) {
        console.log(error);
    }  
}

start(port, process.env.MONGO_URI as string)