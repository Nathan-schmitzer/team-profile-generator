// TODO: Write code to define and export the Employee class

 

class Employee {
    constructor (name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }
    getName(name) {
        if (!name) {
            throw new Error("You need a name input here!")
        } else {
            return name;
        }
    };
    
    getId(id) {
        return id;
    };
    
    getEmail(email) {
        return email;
    };
    
    getRole(role) {
        return role;
    };
};

module.exports = Employee;