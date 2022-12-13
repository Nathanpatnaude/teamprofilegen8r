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
}

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
}

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
}