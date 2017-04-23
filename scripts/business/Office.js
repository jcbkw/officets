System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Office;
    return {
        setters: [],
        execute: function () {
            Office = (function () {
                /**
                 * <p>Creates an <code>Office</code> instance</p>
                 * <p>A office is an entity with an <code>Address</code>
                 * and a list of managers.</p>
                 *
                 * @param address The Physical location of
                 *                this office.
                 */
                function Office(address) {
                    this.address = address;
                    this.managers = [];
                }
                /**
                 * Returns the number of managers in this office.
                 */
                Office.prototype.countManagers = function () {
                    return this.managers.length;
                };
                /**
                 * Adds a <code>Manager</code> to this office.
                 * @param manager The <code>Manager</code> to be added.
                 */
                Office.prototype.addManager = function (manager) {
                    if (manager) {
                        this.managers.push(manager);
                        return true;
                    }
                    return false;
                };
                /**
                 * Removes a <code>Manager</code> from this office.
                 * @returns The <code>Manager</code> to be let go.
                 */
                Office.prototype.removeManager = function (manager) {
                    var index = this.managers.indexOf(manager);
                    if (index !== -1) {
                        this.managers.splice(index, 1);
                        return true;
                    }
                    return false;
                };
                /**
                 * Query a list of managers that match the provided
                 * department.
                 *
                 * @param department The managers that works in the
                 *                   provided department.
                 */
                Office.prototype.getManagersByDepartment = function (department) {
                    var managers = [];
                    if (department) {
                        var staffsize = this.managers.length;
                        for (var i = 0; i < staffsize; i += 1) {
                            var manager = this.managers[i];
                            if (department === manager.department) {
                                managers.push(manager);
                            }
                        }
                    }
                    return managers;
                };
                /**
                 * Return this office's physical <code>Address</code>.
                 */
                Office.prototype.getAddress = function () {
                    return this.address;
                };
                /**
                 * Returns the total number of employees, that
                 * is managers and regular employees, in this
                 * <code>Office</code>.
                 */
                Office.prototype.countEmployees = function () {
                    var staffSize = this.managers.length, employees = staffSize; // managers are employees too
                    for (var i = 0; i < staffSize; i += 1) {
                        employees += this.managers[i].countEmployees();
                    }
                    return employees;
                };
                /**
                 * Check for an <code>Employee</code> in this manager by using its
                 * ID. If foumd, the <code>Employee</code> is returned. Otherwise
                 * <code>null</code> is returned.
                 *
                 * @param id The ID of the employee to be found
                 */
                Office.prototype.getEmployeeById = function (id) {
                    var managersCount = this.managers.length;
                    for (var i = 0; i < managersCount; i += 1) {
                        var employee = this.managers[i].findById(id);
                        if (employee) {
                            return employee;
                        }
                    }
                    return null;
                };
                return Office;
            }());
            exports_1("Office", Office);
            ;
        }
    };
});
//# sourceMappingURL=Office.js.map