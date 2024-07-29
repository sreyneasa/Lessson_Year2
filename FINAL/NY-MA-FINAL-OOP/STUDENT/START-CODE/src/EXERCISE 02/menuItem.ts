import { Customer } from './customer';
import { Order } from './order';

export class MenuItem {
    public name: string;
    public description: string;
    public price: number;
    private customers : Customer[]= [];
    public order?: Order;
    public items : MenuItem [] = [];

    constructor(name: string, description: string, price: number) {
        this.name = name;
        this.description = description;
        this.price = price;
    }

    public additem(item: MenuItem): void{
        this.items.push(item);
      
    }

    public getCustomer(customer : Customer):void{
        this.customers.push(customer);
    }

    public setOrder (order : Order):void{
        this.order = order;
    }

}