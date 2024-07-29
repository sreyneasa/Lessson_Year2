export class Address {
    private city: string
    private street: string
    private country: string

    constructor(city: string, street: string, country: string) {
        this.city = city
        this.street = street
        this.country = country
    }
    
    isEqual(other: Address): boolean {
        if (this.city == other.city && this.street == other.street && this.country == other.country) {
            return true
        }
        return false
    }

}