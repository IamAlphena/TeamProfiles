class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    printStats(){
        console.log(`Employee name: ${this.name}`);
        console.log(`Employee ID : ${this.id}`);
        console.log(`Employee email: ${this.email}`)
    }
}