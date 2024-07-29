class House {
    house: string;
    doors: Door[] = [];
    rooms: Room[] = [];
    constructor(house: string) {
        this.house = house;
    }

    addRoom(room: Room) {
        this.rooms.push(room);
    }
    addDoor(door: Door) {
        this.doors.push(door);
    }
}
class Room {
    color: string;
    doors: Door[] = []; // Initialize doors array in Room class

    constructor(color: string) {
        this.color = color;
    }
    addDoor(door: Door) {
        this.doors.push(door);
    }
}
class Door {
    size: number;

    constructor(size: number) {
        this.size = size;
    }
}

const room1 = new Room('black');
const room2 = new Room('white');
const room3 = new Room('red');

const door1 = new Door(2);
const door2 = new Door(3);

room1.addDoor(door1);
room2.addDoor(door2);

let myHouse = new House('nyny House');

myHouse.addRoom(room1);
myHouse.addRoom(room2);
myHouse.addRoom(room3);

console.log(myHouse);
