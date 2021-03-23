const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github){
        this.github = github;
    }

    printStats(){
        console.log(`Employee Github: ${this.github}`);
    }
}

//email mail:to target _blank
//github : (https://github.com/${data.github}/)  target _blank.