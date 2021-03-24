const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, type, school){
        super(name, id, email, type);
        this.school = school;
    }

    getType (){
        return "Intern"
    }

    getSchool (){
        return this.school
    }
}

module.exports = Intern;