const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamProfile = [];

const addManager = () => {
    console.log(`
+-------------------+
|Enter  Manager Info|
+-------------------+`);

    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Name:',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('  <-- Enter a Valid String.');
                    return false;
                }
            }

        },

        {
            type: 'input',
            name: 'id',
            message: 'ID:',
            validate: nameInput => {
                if (isNaN(nameInput) || nameInput === "") {
                    console.log('  <-- Enter a Valid Number.');
                    return false;
                } else {
                    return true;
                }
            }

        },

        {
            type: 'input',
            name: 'Email:',
            message: 'Email:',
            validate: email => {
                let valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log('  <-- Enter a Valid Email.');
                    return false;
                }
            }

        },

        {
            type: 'input',
            name: 'officeNumber',
            message: 'Office Number:',
            validate: officeNumber => {
                if (isNaN(officeNumber) || officeNumber === "") {
                    console.log('  <-- Enter a Valid Number.');
                    return false;
                } else {
                    return true;
                }
            }

        }
    ])
        .then(answers => {
            const { name, id, email, officeNumber } = answers;
            const manager = new Manager(name, id, email, officeNumber);
            teamProfile.push(manager);
            console.log(`
+-------------------+
| Manager  Entered! |
+-------------------+`);
        addEmployee();
        })
}

const addEmployee = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'uiInput',
            message: 'Team Profile Options:',
            choices: ['ADD Engineer', 'ADD Intern', 'PRINT Team to HTML']
        },
        {
            type: 'input',
            name: 'name',
            message: `------------------+
|Enter Engineer Info|
+-------------------+
Name:`,
            when: (input) => input.uiInput === 'ADD Engineer',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('  <-- Enter a Valid String.');
                    return false;
                    
                }
            }

        },
        {
            type: 'input',
            name: 'name',
            message: `------------------+
|Enter  Intern  Info|
+-------------------+
Name:`,
            when: (input) => input.uiInput === 'ADD Intern',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('  <-- Enter a Valid String.');
                    return false;
                }
            }

        },

        {
            type: 'input',
            name: 'id',
            message: 'ID:',
            when: (input) => input.uiInput != 'PRINT Team to HTML',
            validate: nameInput => {
                if (isNaN(nameInput) || nameInput === "") {
                    console.log('  <-- Enter a Valid Number.');
                    return false;
                } else {
                    return true;
                }
            }

        },

        {
            type: 'input',
            name: 'email',
            message: 'Email:',
            when: (input) => input.uiInput != 'PRINT Team to HTML',
            validate: email => {
                let input = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (input) {
                    return true;
                } else {
                    console.log('  <-- Enter a Valid Email.')
                    return false;
                }
            }

        },

        {
            type: 'input',
            name: 'githubUserName',
            message: 'Github Username:',
            when: (input) => input.uiInput === 'ADD Engineer',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('  <-- Enter a Valid String.');
                    return false;
                }
            }

        },

        {
            type: 'input',
            name: 'school',
            message: 'School:',
            when: (input) => input.uiInput === 'ADD Intern',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('  <-- Enter a Valid String.');
                    return false;
                }
            }

        }

    ])
        .then(answers => {
            let { name, id, email, githubUserName, school } = answers;
            if (answers.uiInput === 'ADD Engineer') {
                let engineer = new Engineer(name, id, email, githubUserName);
                teamProfile.push(engineer);
                console.log(`
+-------------------+
| Engineer   Added! |
+-------------------+`);
                addEmployee();
            } else if (answers.uiInput === 'ADD Intern') {
                let intern = new Intern(name, id, email, school);
                teamProfile.push(intern);
                console.log(`
+-------------------+
|  Intern   Added!  |
+-------------------+`);
                addEmployee();
            } else {
console.log(teamProfile)
            }
        })
};

addManager();