import {Employee} from './Employee';
import {IManagerRoles} from './IManagerRoles';

export class Manager extends Employee {

    /**
     * An object used to defined the
     * Acceptable <code>Employee</code> roles
     * per departments.
     * 
     * @see <a href="_business.employee_.html">Employee</a>
     */
    public static roles: IManagerRoles = {

        "IT": ["Dev", "Engineer", "Designer"]
        
    }

    /**
     * List of managed employees
     */
    private staff: Employee[]
    
    /**
     * <p>Creates a <code>Manager</code> instance.</p>
     * <p>A manager is an <code>Employee</code> that can
     * store/manage other employees and that
     * contains methods applicable to all the employee of
     * it's group (e.g. <a href="#findbyid">findById</a>).</p>
     * 
     * @class Manager
     * @param department 
     * @param firstname 
     * @param lastname 
     * @param employeeId 
     * @param title 
     * 
     * @example
     * <br><pre>
     * let a = new Employee("Ed", "Ster", 45, "Dev"); 
     * let b = new Employee("Kee", "Williams", 21, "Engineer");  
     * 
     * // create a manager
     * let boss = new Manager("IT", "Pierre", "Paule", 856, "IT Manager");
     * 
     * // hire people
     * boss.hire(a);
     * boss.hire(b);
     * 
     * // count staff
     * boss.countEmployees();
     * 
     * // query
     * boss.findById(45);
     * 
     * // fire this one
     * boss.fire(boss.findById(21));
     * 
     * // and the other
     * boss.fire(a);
     * </pre>
     */
    constructor (
        public department: string,
        public firstname: string, 
        public lastname: string, 
        public employeeId: number, 
        public title: string
    ) {
        
        super(firstname, lastname, employeeId, title);
        this.staff = [];
        
    }

    /**
     * Tells the number of employees
     * managed by this manager.
     * 
     * @returns {number}
     */
    countEmployees (): number {

        return this.staff.length;

    }

    /**
     * Manages the provided <code>Employee</code> by making it a part
     * of this manager's Employee collection.
     * 
     * @param employee The <code>Employee</code> to be managed.
     * @returns A <code>Boolean</code> to indicate success.
     */
    hire (employee): boolean {
    
        if (this.hasValidCredentials(employee)) {

            this.staff.push(employee);

            return true;

        }

        return false;

    }

    /**
     * Removes the provided <code>Employee</code> from this manager's
     * collection.
     * 
     * @param employee The <code>Employee</code> to be let go.
     * @returns A <code>Boolean</code> to indicate success.
     */
    fire (employee: Employee): boolean {

        let index: number = this.staff.indexOf(employee);

        if (index !== -1) {

            this.staff.splice(index, 1);

            return true;
            
        }

        return false;
        
    }

    /**
     * Check for an <code>Employee</code> in this manager by using its
     * ID. If foumd, the <code>Employee</code> is returned. Otherwise
     * <code>null</code> is returned.
     * 
     * @param id The ID of the employee to be found
     */
    findById (id: number): Employee|null {

        if (id) {

            let staffsize: number  = this.staff.length;

            for (let i: number = 0; i < staffsize; i += 1) {
                
                let employee: Employee = this.staff[i];

                if (id === employee.employeeId) {

                    return employee;

                }

            }

        }

        return null; 

    }
    
    /**
     * <p>Tells whether the provided object is an
     * Employee who can be managed by this 
     * Manager.</p>
     * 
     * <p>The decisison is made by ensure that
     * the object is an Employee, and if so, by
     * making sure that its title is allowed
     * in this manager's department.</p>
     * 
     * @param employee 
     */
    hasValidCredentials (employee: any): boolean {
    
        if (employee instanceof Employee) {
            
            let positions: string[] = Manager.roles[this.department];
            
            if (positions) {

                if (positions.indexOf(employee.title) !== -1) {

                    return true;

                }

            }

        }

        return false;

    }

    /**
     * The string representation of this Manager.
     */
    toString (): string {

        return "Boss of " + this.department;  

    }

};