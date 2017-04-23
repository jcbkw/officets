import {Employee} from './business/Employee';
import {Manager} from './business/Manager';
import {Address} from './business/Address';
import {Office} from './business/Office';

(() => {

    // writes whatever is given on the body and the console.
    function log (something: any) {
        let p = document.createElement('p'),
            pre = document.createElement('pre'),
            text = document.createTextNode(JSON.stringify(something, null, 4));
        pre.appendChild(text);
        p.appendChild(pre);
        document.body.appendChild(p);
        console.log(something);
        p = pre = text = null;
    }

    // use cases
    // create some employees
    let emp_25 = new Employee("Chris", "Jolly", 78, "Clerk"); 
    let a = new Employee("Ed", "Ster", 45, "Dev"); 
    let b = new Employee("Kee", "Williams", 21, "Engineer"); 
    let c = new Employee("Pat", "Eva", 146, "Designer"); 

    log(b.getFullName());
    log(c.employeeId);

    // create a manager
    let boss = new Manager("IT", "Pierre", "Paule", 856, "IT Manager");

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
    let emp_26 = new Employee("Coraline", "Petrovish", 178, "QA"); 

    // try to hire a QA, but there's no QA department
    boss.hire(emp_26);

    log(boss.countEmployees());

    // add a QA department and try to hire a QA again
    Manager.roles['IT'].push("QA");

    // try hiring the QA resource again
    boss.hire(emp_26);

    log(boss.countEmployees());

    // create an address
    let myAddress = new Address(142, "Halsey Street", "Mainly", "NJ", "07845");

    // create an office passing it the address
    let myOffice = new Office(myAddress);

    // add a manager and its staff to the office
    myOffice.addManager(boss);

    log(myOffice.getAddress().toString());

    myOffice.getManagersByDepartment('IT');

    log(myOffice.getManagersByDepartment('IT')[0].countEmployees());

    log(myOffice.countEmployees());

    myOffice.getEmployeeById(21);

    myOffice.getManagersByDepartment('IT')[0].findById(22);
    
})();