import dotenv from "dotenv"
dotenv.config()
import express from 'express'
import mongoose from "mongoose"
import connectDB from './DB/connection.js'
import cors from'cors'
import compression from "compression";
const index = express()
const port = process.env.port
import * as indexRouter from './modules/index.route.js'
const baseUrl = process.env.baseUrl
index.use(express.json())
index.use(compression())
index.use(cors())
index.use(`${baseUrl}/student`,indexRouter.studentRouter)
index.use(`${baseUrl}/lesson`,indexRouter.lessonRouter)
index.use(`${baseUrl}/qbank`,indexRouter.qbankRouter)
index.use(`${baseUrl}/bloomLevel`,indexRouter.bloomLevelRouter)
index.use(`${baseUrl}/domain`,indexRouter.domainRouter)
index.use(`${baseUrl}/KolbStyle`,indexRouter.KolbStyleRouter)

index.use('/',(req,res)=>{
    res.send('<h1>Welcome to Graduation project</h1>')
})

index.use("*",(req,res)=>{
    res.json({message:"in-valid Routing"})
})


connectDB()
index.listen(port, () => {
    console.log(`server running on port ...${port}`);
})
index.use(`${baseUrl}/student`,indexRouter.studentRouter)
index.use(`${baseUrl}/auth`,indexRouter.authRouter)