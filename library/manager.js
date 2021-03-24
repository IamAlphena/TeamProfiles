const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, type, officeNumber){
        super(name, id, email, type);
        this.officeNumber = officeNumber;
    }

    getType (){
        return "Manager"
    }

    getOfficeNumber (){
        return this.officeNumber
    }
}

module.exports = Manager;