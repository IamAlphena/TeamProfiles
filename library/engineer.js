const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name,id,email);
        this.github = github;
    }

    printStats(){
        console.log(`Employee Github: ${this.github}`);
        console.log(`Employee is an Engineer`)
    }
}

//email mail:to target _blank
//github : (https://github.com/${data.github}/)  target _blank.


module.exports = Engineer ;