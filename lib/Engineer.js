const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, githubUserName) {
        super(name, id, email);
        this.githubUserName = githubUserName;
    }

    getgithubUserName() {
        return this.githubUserName;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;
// In addition to Employee's properties and methods, Engineer will also have:

//   github // GitHub username

//   getGithub()

//   getRole() // Overridden to return 'Engineer'