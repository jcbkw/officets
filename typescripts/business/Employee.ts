export class Employee {
    
    /**
     * <p>Creates an Employee instance.</p>
     * <p>A Employee is an value object
     * with the first, last name, 
     * ID and title properties of
     * the corresponding Employee.</p>
     * 
     * @param firstname    The employee's given name.
     * @param lastname     The employee's surname.
     * @param employeeId   The employee Identification number.
     * @param title        The employee's role in the organistion.
     */
    constructor (
        public firstname: string, 
        public lastname: string, 
        public employeeId: number, 
        public title: string
    ) {}

    /**
     * Returns the first and last name of this
     * employee glued by a space.
     * 
     * @example <code>employee.getFullname();</code>
     */
    getFullName (): string {
        
        return `${this.firstname} ${this.lastname}`; 

    }
    
};