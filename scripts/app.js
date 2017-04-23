System.register(["./business/Employee", "./business/Manager", "./business/Address", "./business/Office"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Employee_1, Manager_1, Address_1, Office_1;
    return {
        setters: [
            function (Employee_1_1) {
                Employee_1 = Employee_1_1;
            },
            function (Manager_1_1) {
                Manager_1 = Manager_1_1;
            },
            function (Address_1_1) {
                Address_1 = Address_1_1;
            },
            function (Office_1_1) {
                Office_1 = Office_1_1;
            }
        ],
        execute: function () {
            (function () {
                // writes whatever is given on the body and the console.
                function log(something) {
                    var p = document.createElement('p'), pre = document.createElement('pre'), text = document.createTextNode(JSON.stringify(something, null, 4));
                    pre.appendChild(text);
                    p.appendChild(pre);
                    document.body.appendChild(p);
                    console.log(something);
                    p = pre = text = null;
                }
                // use cases
                // create some employees
                var emp_25 = new Employee_1.Employee("Chris", "Jolly", 78, "Clerk");
                var a = new Employee_1.Employee("Ed", "Ster", 45, "Dev");
                var b = new Employee_1.Employee("Kee", "Williams", 21, "Engineer");
                var c = new Employee_1.Employee("Pat", "Eva", 146, "Designer");
                log(b.getFullName());
                log(c.employeeId);
                // create a manager
                var boss = new Manager_1.Manager("IT", "Pierre", "Paule", 856, "IT Manager");
                // hire someone
                boss.hire(a);
                log(boss.countEmployees());
                // hire other folks
                boss.hire(c);
                boss.hire(b);
                boss.hire(emp_25);
                log(boss.countEmployees());
                // fire this guy
                boss.fire(c);
                log(boss.countEmployees());
                log(boss.findById(21));
                // cannot hire a non-employee
                boss.hire(null);
                log(boss.countEmployees());
                // create a QA employee
                var emp_26 = new Employee_1.Employee("Coraline", "Petrovish", 178, "QA");
                // try to hire a QA, but there's no QA department
                boss.hire(emp_26);
                log(boss.countEmployees());
                // add a QA department and try to hire a QA again
                Manager_1.Manager.roles['IT'].push("QA");
                // try hiring the QA resource again
                boss.hire(emp_26);
                log(boss.countEmployees());
                // create an address
                var myAddress = new Address_1.Address(142, "Halsey Street", "Mainly", "NJ", "07845");
                // create an office passing it the address
                var myOffice = new Office_1.Office(myAddress);
                // add a manager and its staff to the office
                myOffice.addManager(boss);
                log(myOffice.getAddress().toString());
                myOffice.getManagersByDepartment('IT');
                log(myOffice.getManagersByDepartment('IT')[0].countEmployees());
                log(myOffice.countEmployees());
                myOffice.getEmployeeById(21);
                myOffice.getManagersByDepartment('IT')[0].findById(22);
            })();
        }
    };
});
//# sourceMappingURL=app.js.map