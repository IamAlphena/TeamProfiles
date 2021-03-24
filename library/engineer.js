const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, type, github){
        super(name, id, email, type);
        this.github = github;
    }

    getType (){
        return "Engineer"
    }

    getGithub (){
        return this.github
    }
}

module.exports = Engineer;