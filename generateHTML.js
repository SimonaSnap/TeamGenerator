const Manager = require("./classes/manager");

function generateCard(team)
{
    //console.log(team);
    team.forEach((object) =>
    {
        if (object.getRole() == "Manager")
        {
            manName = object.name;
            id = object.id;
            email = object.id;
            role = object.getRole();
            officeNum = object.officeNum;

            return `<div class="col-sm-4">
                <div class="card p-3">
                    <div class="card-body">
                        <h5 class="card-title">${manName}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
                        <a href="#" class="card-link">${id}</a>
                        <a href="#" class="card-link">${email}</a>
                        <a href="#" class="card-link">${officeNum}</a>
                    </div>
                </div>
            </div>`
        }
        else if (object.getRole() == "Engineer")
        {
            //     return `<div class="col-sm-4">
            //     <div class="card p-3">
            //         <div class="card-body">
            //             <h5 class="card-title">${object.name}</h5>
            //             <h6 class="card-subtitle mb-2 text-muted">${object.getRole()}</h6>
            //             <a href="#" class="card-link">${object.id}</a>
            //             <a href="#" class="card-link">${object.email}</a>
            //             <a href="#" class="card-link">${object.gitHub}</a>
            //         </div>
            //     </div>
            // </div>`
        }

        else if (object.getRole() == "Intern")
        {
            //     return `<div class="col-sm-4">
            //     <div class="card p-3">
            //         <div class="card-body">
            //             <h5 class="card-title">${object.name}</h5>
            //             <h6 class="card-subtitle mb-2 text-muted">${object.getRole()}</h6>
            //             <a href="#" class="card-link">${object.id}</a>
            //             <a href="#" class="card-link">${object.email}</a>
            //             <a href="#" class="card-link">${object.school}</a>
            //         </div>
            //     </div>
            // </div>`
        }
    })
}

function generateHTML(team)
{

    //console.log(team);
    generateCard(team);
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    </head>
    
    <body>
        <header class="container-fluid text-center p-5" style="width: 100viewport; background-color:rgb(220, 53, 69);">
            <h1 class="display-2" style="color: whitesmoke;">My Team</h1>
        </header>
        <section class="container-fluid p-4" style="width: 100viewport">
            <div class="row gy-5 p-5" style="width: 100%;">
            ${generateCard(team)}
            </div>
        </section>
    
    </body>
    
    </html>`
}

module.exports = generateHTML;