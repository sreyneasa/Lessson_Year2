
import { Order } from './order';

export class Customer {
    private id: number;
    private name: string;
    public customer : Customer [] = []; 
    public orders : Order [] = [];

    constructor(id: number, name: string,) {
        this.id = id;
        this.name = name;
    }

    public getOrdersByCustomer(customer: Customer): Order[] {
        return customer.orders;
    }

}