import { client } from "../index.js";

export async function insertRoom(data) {
    return client.db("hallbooking").collection("rooms").insertMany(data);
}
export async function RoomBooking(date) {
    return client.db("hallbooking").collection("booking").findOne({date:date});

}
export async function insertRoomBooking(data) {
    return client.db("hallbooking").collection("booking").insertOne(data);
}

export async function getRoomBooking() {
    return client.db("hallbooking").collection("booking").find().toArray();
}