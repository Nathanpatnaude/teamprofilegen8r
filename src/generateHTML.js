const generateManager = (manager) => {
    return `
    <div class="card employee-card m-3 shadow">
        <div class="card-header bg-primary text-white">
            <h2 class="card-title">${manager.name}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h2>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</li>
                <li class="list-group-item">Office#: ${manager.officeNumber}</li>
            </ul>
        </div>
    </div>`;
};

const generateEngineer = (engineer) => {
    return `
    <div class="card employee-card m-3 shadow">
        <div class="card-header bg-primary text-white">
            <h2 class="card-title">${engineer.name}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h2>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</li>
                <li class="list-group-item">Github: <a href="https://github.com/${engineer.githubUserName}" target="_blank" rel="noopener noreferrer">${engineer.githubUserName}</a></li>
            </ul>
        </div>
    </div>`;
};

const generateIntern = (intern) => {
    return `
    <div class="card employee-card m-3 shadow">
        <div class="card-header bg-primary text-white">
            <h2 class="card-title">${intern.name}</h2>
            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Intern</h2>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</li>
                <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>
    </div>`;
};

const generateHTML = (teamProfile) => {
    const teamCardsArr = [];

    for (let i = 0; i < teamProfile.length; i++) {
        const employee = teamProfile[i];
        const role = teamProfile[i].getRole();

        if (role === "Manager") {
            const managerCard = generateManager(employee);
            teamCardsArr.push(managerCard);
        } else if (role === "Engineer") {
            const engineerCard = generateEngineer(employee);
            teamCardsArr.push(engineerCard);
        } else if (role === "Intern") {
            const InternCard = generateIntern(employee);
            teamCardsArr.push(InternCard);
        } else {
            console.log("That employee has no role.")
        }
    };

    const teamCardsHTML = teamCardsArr.join('');
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading bg-danger">
                <h1 class="text-center text-white">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="row team-area col-12 d-flex justify-content-center">
                ${teamCardsHTML}
            </div>
        </div>
    </div>
</body>
</html>`;

};

module.exports = generateHTML;
