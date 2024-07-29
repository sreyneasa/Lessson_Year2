import { MenuItem } from './menuItem';



export class Restaurant {
    protected name: string;
    protected address: string;
    public items : MenuItem [] = [];
    

    constructor(name: string, address: string) {
        this.name = name;
        this.address = address;
    }
    public addMenu(item: MenuItem): void {
        this.items.push(item);  
    }
}