function generateHTML(data)
{
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
                <div class="col-sm-4">
                    <div class="card p-3">
                        <div class="card-body">
                            <h5 class="card-title">Name</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Position</h6>
                            <a href="#" class="card-link">ID #</a>
                            <a href="#" class="card-link">Email</a>
                            <a href="#" class="card-link">OfficeNum/GitHub/School</a>
                        </div>
                    </div>
                </div>
    
                <div class="col-sm-4">
                    <div class="card p-3">
                        <div class="card-body">
                            <h5 class="card-title">Name</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Position</h6>
                            <a href="#" class="card-link">ID #</a>
                            <a href="#" class="card-link">Email</a>
                            <a href="#" class="card-link">OfficeNum/GitHub/School</a>
                        </div>
                    </div>
                </div>
    
                <div class="col-sm-4">
                    <div class="card p-3">
                        <div class="card-body">
                            <h5 class="card-title">Name</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Position</h6>
                            <a href="#" class="card-link">ID #</a>
                            <a href="#" class="card-link">Email</a>
                            <a href="#" class="card-link">OfficeNum/GitHub/School</a>
                        </div>
                    </div>
                </div>
    
                <div class="col-sm-4">
                    <div class="card p-3">
                        <div class="card-body">
                            <h5 class="card-title">Name</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Position</h6>
                            <a href="#" class="card-link">ID #</a>
                            <a href="#" class="card-link">Email</a>
                            <a href="#" class="card-link">OfficeNum/GitHub/School</a>
                        </div>
                    </div>
                </div>
    
                <div class="col-sm-4">
                    <div class="card p-3">
                        <div class="card-body">
                            <h5 class="card-title">Name</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Position</h6>
                            <a href="#" class="card-link">ID #</a>
                            <a href="#" class="card-link">Email</a>
                            <a href="#" class="card-link">OfficeNum/GitHub/School</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
    </body>
    
    </html>`
}

module.exports = HTML;