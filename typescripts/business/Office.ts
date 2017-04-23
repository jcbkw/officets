import {Employee} from './Employee';
import {Manager} from './Manager';
import {Address} from './Address';

export class Office {
    
    /**
     * The list of managers of this
     * office.
     */
    private managers: Manager[];
    
    /**
     * <p>Creates an <code>Office</code> instance</p>
     * <p>A office is an entity with an <code>Address</code>
     * and a list of managers.</p>
     * 
     * @param address The Physical location of
     *                this office.
     */
    constructor (public address: Address) {
        
        this.managers = [];
        
    }
    
    /**
     * Returns the number of managers in this office.
     */
    countManagers (): number {

        return this.managers.length;

    }

    /**
     * Adds a <code>Manager</code> to this office.
     * @param manager The <code>Manager</code> to be added.
     */
    addManager (manager: Manager): boolean {

        if (manager) {

            this.managers.push(manager);
            
            return true;

        }

        return false;

    }

    /**
     * Removes a <code>Manager</code> from this office.
     * @returns The <code>Manager</code> to be let go.
     */
    removeManager (manager: Manager): boolean {

        let index = this.managers.indexOf(manager);

        if (index !== -1) {

            this.managers.splice(index, 1);
            
            return true;

        }
        
        return false;

    }

    /**
     * Query a list of managers that match the provided
     * department.
     * 
     * @param department The managers that works in the
     *                   provided department.
     */
    getManagersByDepartment (department: string): Manager[] {

        let managers: Manager[] = [];

        if (department) {
            
            let staffsize: number = this.managers.length;
                
            for (let i: number = 0; i < staffsize; i += 1) {

                let manager = this.managers[i];
                
                if (department === manager.department) {

                    managers.push(manager);

                }

            }

        }

        return managers; 

    }

    /**
     * Return this office's physical <code>Address</code>.
     */
    getAddress (): Address {

        return this.address;

    }

    /**
     * Returns the total number of employees, that
     * is managers and regular employees, in this
     * <code>Office</code>.
     */
    countEmployees (): number {

        let staffSize: number = this.managers.length,
            employees: number = staffSize; // managers are employees too
            
        for (let i: number = 0; i < staffSize; i += 1) {

            employees += this.managers[i].countEmployees();

        }
        
        return employees;

    }

    /**
     * Check for an <code>Employee</code> in this manager by using its
     * ID. If foumd, the <code>Employee</code> is returned. Otherwise
     * <code>null</code> is returned.
     * 
     * @param id The ID of the employee to be found
     */
    getEmployeeById (id: number): Employee|null {
        
        let managersCount = this.managers.length;
        
        for (let i: number = 0; i < managersCount; i += 1) {

            let employee: Employee = this.managers[i].findById(id);

            if (employee) {

                return employee;

            }

        } 

        return null;

    }

};