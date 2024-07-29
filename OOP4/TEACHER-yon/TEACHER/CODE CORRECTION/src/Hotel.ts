import { Address } from "./Address";
import { Customer } from "./Customer";
import { Room } from "./Room";

export class Hotel {
    private name: string;
    private address: Address;
    private rooms: Room[];

    constructor(name: string, address: Address,rooms: Room[]) {
        this.name = name;
        this.address = address;
        this.rooms =rooms;
    }

    // Getters
    getName(): string {
        return this.name;
    }

    getAddress(): Address {
        return this.address;
    }

    customerIsInHotel(customer : Customer) : boolean{
        for(let room of this.rooms){
            if (room.CheckCustomer(customer)) {
                return true;
            }
        }
        return false;
    }

    registerCustomer(customer: Customer, room: Room): boolean {
        // Check if customer is not in the hotel and the room is not full
        if (!this.customerIsInHotel(customer) && room.addCustomer(customer)) {
            return true
        }
        return false;
    }

}