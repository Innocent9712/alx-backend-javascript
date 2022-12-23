import classRoom from "./0-classroom";
export default function initializeRooms() {
    const room1 = new classRoom(19);
    const room2 = new classRoom(20);
    const room3 = new classRoom(34);
    const rooms = [room1, room2, room3];
    return rooms;
}