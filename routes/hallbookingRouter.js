import express from "express";
import { insertRoom ,RoomBooking,insertRoomBooking,getRoomBooking} from "../service/hallbookingservice.js";
const router=express.Router();


router.post('/create-room',async function(request,response){
    const data =request.body;
    // console.log(data);
    const result=
    await insertRoom(data);
    response.send(result);
});

router.post('/room-booking',async function(request,response){
    const data =request.body;
    const {date}=request.body;
    const existingUser=await RoomBooking(date)
    if(existingUser){
        response.send("the room is already booked");
    }
    else{
        const result=
    await insertRoomBooking(data);
    response.send(result);
    console.log(result);
    }
    
    router.get('/getRoomBooking',async function(request,response){
 
        let result=await getRoomBooking();
        response.send(result);
    });
    





});








export default router;