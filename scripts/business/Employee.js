System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Employee;
    return {
        setters: [],
        execute: function () {
            Employee = (function () {
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
                function Employee(firstname, lastname, employeeId, title) {
                    this.firstname = firstname;
                    this.lastname = lastname;
                    this.employeeId = employeeId;
                    this.title = title;
                }
                /**
                 * Returns the first and last name of this
                 * employee glued by a space.
                 *
                 * @example <code>employee.getFullname();</code>
                 */
                Employee.prototype.getFullName = function () {
                    return this.firstname + " " + this.lastname;
                };
                return Employee;
            }());
            exports_1("Employee", Employee);
            ;
        }
    };
});
//# sourceMappingURL=Employee.js.map