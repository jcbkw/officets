System.register(["./Employee"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __moduleName = context_1 && context_1.id;
    var Employee_1, Manager;
    return {
        setters: [
            function (Employee_1_1) {
                Employee_1 = Employee_1_1;
            }
        ],
        execute: function () {
            Manager = (function (_super) {
                __extends(Manager, _super);
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
                function Manager(department, firstname, lastname, employeeId, title) {
                    var _this = _super.call(this, firstname, lastname, employeeId, title) || this;
                    _this.department = department;
                    _this.firstname = firstname;
                    _this.lastname = lastname;
                    _this.employeeId = employeeId;
                    _this.title = title;
                    _this.staff = [];
                    return _this;
                }
                /**
                 * Tells the number of employees
                 * managed by this manager.
                 *
                 * @returns {number}
                 */
                Manager.prototype.countEmployees = function () {
                    return this.staff.length;
                };
                /**
                 * Manages the provided <code>Employee</code> by making it a part
                 * of this manager's Employee collection.
                 *
                 * @param employee The <code>Employee</code> to be managed.
                 * @returns A <code>Boolean</code> to indicate success.
                 */
                Manager.prototype.hire = function (employee) {
                    if (this.hasValidCredentials(employee)) {
                        this.staff.push(employee);
                        return true;
                    }
                    return false;
                };
                /**
                 * Removes the provided <code>Employee</code> from this manager's
                 * collection.
                 *
                 * @param employee The <code>Employee</code> to be let go.
                 * @returns A <code>Boolean</code> to indicate success.
                 */
                Manager.prototype.fire = function (employee) {
                    var index = this.staff.indexOf(employee);
                    if (index !== -1) {
                        this.staff.splice(index, 1);
                        return true;
                    }
                    return false;
                };
                /**
                 * Check for an <code>Employee</code> in this manager by using its
                 * ID. If foumd, the <code>Employee</code> is returned. Otherwise
                 * <code>null</code> is returned.
                 *
                 * @param id The ID of the employee to be found
                 */
                Manager.prototype.findById = function (id) {
                    if (id) {
                        var staffsize = this.staff.length;
                        for (var i = 0; i < staffsize; i += 1) {
                            var employee = this.staff[i];
                            if (id === employee.employeeId) {
                                return employee;
                            }
                        }
                    }
                    return null;
                };
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
                Manager.prototype.hasValidCredentials = function (employee) {
                    if (employee instanceof Employee_1.Employee) {
                        var positions = Manager.roles[this.department];
                        if (positions) {
                            if (positions.indexOf(employee.title) !== -1) {
                                return true;
                            }
                        }
                    }
                    return false;
                };
                /**
                 * The string representation of this Manager.
                 */
                Manager.prototype.toString = function () {
                    return "Boss of " + this.department;
                };
                return Manager;
            }(Employee_1.Employee));
            /**
             * An object used to defined the
             * Acceptable <code>Employee</code> roles
             * per departments.
             *
             * @see <a href="_business.employee_.html">Employee</a>
             */
            Manager.roles = {
                "IT": ["Dev", "Engineer", "Designer"]
            };
            exports_1("Manager", Manager);
            ;
        }
    };
});
//# sourceMappingURL=Manager.js.map