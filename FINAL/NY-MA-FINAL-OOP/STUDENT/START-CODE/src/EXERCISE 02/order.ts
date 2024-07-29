import { Customer } from "./customer";
import { MenuItem } from "./menuItem";


export class Order {
    public order_item: string;
    public total_price: number;
    public customer: Customer [] = [];
    // public items: MenuItem[] = [];

    constructor(order_item: string, total_price: number, customer: string) {
        this.order_item = order_item;
        this.total_price = total_price;
    }

    public placeOrder(customer: Customer,items: MenuItem[]): void {
        this.customer.push(customer);
        // this.customer.push(items);
    }
    

    
}