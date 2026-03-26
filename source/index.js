import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]); // Uses Google's DNS to resolve Atlas addresses
import dotenv from 'dotenv'

import mongoose from "mongoose";
import {DatabaseName} from "./constant.js";
import Exp from "express";

const app = Exp()
console.log(process.env.PORT)
console.log(`${process.env.mongoconnectionstring}/${DatabaseName}`)


dotenv.config()

const databaseconnections = async () => {
    try {
        const DB_connection_res = await mongoose.connect(`${process.env.mongoconnectionstring}/${DatabaseName}`)
        console.log(`${process.env.mongoconnectionstring}/${DatabaseName}`)
        app.listen(process.env.PORT,()=>{
            console.log(`connection successfull to ${process.env.PORT} port`)
        })
    } catch (error) {
        console.error(`there is an error ${error}`)
    }
}
databaseconnections() 