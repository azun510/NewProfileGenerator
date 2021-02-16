const inquirer = require("inquirer");
const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer")
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")
const fs = require("fs");

let teamArr = [];

function startPrompt() {
    inquirer.prompt([
        {
            message: "Please enter your team name:",
            name: "teamname"
        }
    ])
        .then(function(data){
            const teamName = data.teamname
            teamArr.push(teamName)
            addManager();
        })
};

function addManager() {
    inquirer.prompt([
        {
            message: "What is your team Manager's name?",
            name: 'name'
        },
        {
            message: "Enter Manager's ID:",
            name: "id"
        },
        {
            message: "What is your team manager's email?",
            name: 'email'
        },
        {
            type: 'number',
            message: "What is your team manager's office number?",
            name: 'officeNumber'
        },
        
    ])

    .then(function(data) {
        const name = data.name
        const id = data.id
        const email = data.email
        const officeNumber = data.officeNumber
        const teamMember = new Manager(name, id, email, officeNumber)
        teamArr.push(teamMember)
        createMembers();
    });
}

function createMembers() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Are there any more team members to add?',
            choices: ["Add an Engineer", "Add an intern", "That is everyone"],
            name: 'addMemberData'
        }
    ])
    .then(function(data) {
        switch(data.addMemberData) {
            case "Add an Engineer":
                addEngineer();
                break;

            case "Add an intern":
                addIntern();
                break;

            case "That is everyone":
                generateTeam();
                break;
        }
    });
}

function addEngineer() {
    inquirer.prompt ([
        {
            message: "Engineer's name?",
            name: 'name'
        },
        {
            message: "Engineer's ID:",
            name: "id"
        },
        {
            message: "Engineers's email?",
            name: 'email'
        },
        {
            message: "Engineer's github username?",
            name: 'github'
        }
    ])
    .then(function(data){
        const name = data.name
        const id = teamArr.length
        const email = data.email
        const github = data.github
        const teamMember = new Engineer(name, id, email, github)
        teamArr.push(teamMember)
        createMembers();
    })
}

function addIntern() {
    inquirer.prompt([
        {
            message: "What is this intern's name?",
            name: "name"
        },
        {
            message: "What is this intern's email address?",
            name: "email"
        },
        {
            message: "What is this intern's school?",
            name: "school"
        }
    ])

        .then(function (data) {
            const name = data.name
            const id = teamArr.length
            const email = data.email
            const school = data.school
            const teamMember = new Intern(name, id, email, school)
            teamArr.push(teamMember)
            createMembers()
        });

};

function generateTeam() {
    console.log("You're team has been generated!")

    const htmlArr = []
    const htmlSite = 
    `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            <title>Developer Team</title>
        </head>

        <body>
            <nav class="red">
                <div class="nav-wrapper">
                    <a href="#" class="brand-logo center">Developer Team</a>
                </div>
            </nav>
            <div class="container">
    `
    htmlArr.push(htmlSite);
    for (let i = 0; i < teamArr.length; i++) {
        let object =
        `
        <div class="row">
                    <div class="col s6 m6 l6 m6">
                        <div class="card blue darken-1 z-depth-3">
                            <div class="card-content white-text">
                                <span>${teamArr[i].name}</span>
                                <p>${teamArr[i].title}</p>
                            </div>
                            <div class="card-action">
                                <p class="white-text">${teamArr[i].id}</p>
                                <p class="white-text">Email: <a href="mailto:${teamArr[i].email}">${teamArr[i].email}</a></p>
        `
        if (teamArr[i].officeNumber) {
            object += 
            `
            <p class="white-text">${teamArr[i].officeNumber}</p>
            `
        if (teamArr[i].github) {
                object += 
            `
            <p class="white-text">GitHub: <a href="https://github.com/${teamArr[i].github}">${teamArr[i].github}</a></p>
            `
            }
        if (teamArr[i].school) {
                object += 
            `
            <p class="white-text">School: ${teamArr[i].school}</p>
            `
        }
        object += 
            `
            </div>
            </div>
            </div>
                
            
            `
        htmlArr.push(object)
    }

        const endHTML = 
            `               
            </div>
            </div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
            </body>
            </html>
            `
        htmlArr.push(endHTML);

    fs.writeFile(`./dist/index.html`, htmlArr.join(""), function (err) {
        
    })
}
}
startPrompt();
