export class Address {

    /**
     * <p>Creates an Address instance.</p>
     * <p>An Address is a value object that represent's
     * an enity's physical address.</p>
     * 
     * @param streetNumber 
     * @param streetName 
     * @param city 
     * @param state 
     * @param zip 
     */
    constructor (
        public streetNumber: number, 
        public streetName: string, 
        public city: string, 
        public state: string, 
        public zip: string
    ) {};

    /**
     * Returns the string representation of this address.
     */
    getAddress (): string {
    
        return   this.streetNumber 
        + " "  + this.streetName 
        + ", " + this.city 
        + " "  + this.state 
        + " "  + this.zip;
        
    }
    
    /**
     * Returns the string representation of this address.
     */
    toString (): string {

        return this.getAddress();

    }

}