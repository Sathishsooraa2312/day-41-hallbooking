import express from "express";
const app = express();
import { MongoClient } from "mongodb";
import * as dotenv from 'dotenv';
dotenv.config()
import cors from "cors";
app.use(cors())
app.use(express.json());
import hallbookingRouter from './routes/hallbookingRouter.js'
const PORT =process.env.PORT;
// const MONGO_URL = "mongodb://127.0.0.1";
    const MONGO_URL=process.env.MONGO_URL;  
const client=new MongoClient(MONGO_URL) //phone dial
// top-level await
 await client.connect(); // call button
 console.log("Mongodb is connected");
app.get("/", function (request, response) {
  response.send("Welcome to Room Booking App");
});
app.use('/api',hallbookingRouter)
app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
export {client};