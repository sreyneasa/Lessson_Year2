import { Customer } from "./Customer";

export class Room{
    private roomId: string;
    private numberOfbet:number;
    private customers:Customer[];

    constructor(roomId:string, numberOfbet:number, customers:Customer[]) {
        this.roomId = roomId;
        this.numberOfbet = numberOfbet;
        this.customers = customers;
    }
    //check customers
    CheckCustomer(customer:Customer):boolean {
        if(this.customers.includes(customer)){
            return true;
        }
        return false;
    }
    //add customers
    addCustomer(customer:Customer):boolean  {
        if (this.customers.length <this.numberOfbet) {
            this.customers.push(customer);
            return true;
        }
        return false;
    }
}