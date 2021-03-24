class Employee {
    constructor(name, id, email, type) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.type = type;
    }

    getName(){
        return this.name
    }

    getId(){
        return this.id
    }

    getEmail(){
        return this.email
    }
    getType(){
        return this.type
    }
}

module.exports = Employee;