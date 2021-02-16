const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.title = "Manager"
    }

    getRole(){
        return this.title;
    }

    getOffice(){
        return this.officeNumber;
    }
}; 

module.exports = Manager;