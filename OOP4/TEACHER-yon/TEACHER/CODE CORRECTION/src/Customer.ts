import { Address } from "./Address";

export class Customer{
    constructor(private firstName:string,private lastName:string,private address:Address){
        this.firstName= firstName;
        this.lastName= lastName;
        this.address= address;
    }

    setAddress(address:Address){
        this.address= address;
    }

    isEqual(other:Customer):boolean{
        if (this.firstName==other.firstName && this.lastName==other.lastName && this.address==other.address) {
            return true;
        }
        return false;
    }

    getFirstName():string{
        return this.firstName;
    }

    getLastName():string{
        return this.lastName;
    }

  getAddress():Address{
    return this.address;
  }
  
}