//variable to compile HTML
const fullHtml = [];

//variable with our starter HTML
const topHtml = 
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <style>
        body {
            background-color: #4b5253;
        }
    </style>
    <title>My Team</title>
</head>
<body>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4" style="text-align: center;">My Team</h1>
        </div>
    </div>
    <div class="container" id="cardSpace" style= "display: flex; flex-wrap: wrap;">
   `

// const managerCard = `<div class="card" style="width: 18rem; margin: 15px;">
// <div class="card-body" style="background-color: teal; color: whitesmoke;">
//     <h5 class="card-title">${teamMembers[i].name}</h5>
//     <p class="card-text"> Manager</p>
// </div>
// <div style="padding: 10px; padding-top: 20px; padding-bottom: 20px; background-color: #a6a6a6;">
//     <ul class="list-group list-group-flush">
//         <li class="list-group-item">ID: ${teamMembers.id} </li>
//         <li class="list-group-item">Email: ${teamMembers.email} </li>
//         <li class="list-group-item">Office Number ${teamMembers.officeNumber}</li>
//     </ul>
// </div>
// </div>`

// const engineerCard = 
//  `<div class="card" style="width: 18rem; margin: 15px;">
// <div class="card-body" style="background-color: teal; color: whitesmoke;">
//     <h5 class="card-title">${teamMembers[i].name}</h5>
//     <p class="card-text"> Engineer</p>
// </div>
// <div style="padding: 10px; padding-top: 20px; padding-bottom: 20px; background-color: #a6a6a6;">
//     <ul class="list-group list-group-flush">
//         <li class="list-group-item">ID: ${teamMembers.id} </li>
//         <li class="list-group-item">Email: ${teamMembers.email} </li>
//         <li class="list-group-item">Github ${teamMembers.github}</li>
//     </ul>
// </div>
// </div>`

// const internCard = `<div class="card" style="width: 18rem; margin: 15px;">
// <div class="card-body" style="background-color: teal; color: whitesmoke;">
//     <h5 class="card-title">${teamMembers[i].name}</h5>
//     <p class="card-text"> Intern</p>
// </div>
// <div style="padding: 10px; padding-top: 20px; padding-bottom: 20px; background-color: #a6a6a6;">
//     <ul class="list-group list-group-flush">
//         <li class="list-group-item">ID: ${teamMembers.id} </li>
//         <li class="list-group-item">School ${teamMembers.school}</li>
//     </ul>
// </div>
// </div>`

const endHtml = 
`</div>
</body>
</html>`




//function to compile our HTML
function generateHTML(data){
    console.log(data);
    fullHtml.push(topHtml);
//    for (let i = 0; i > teamMembers.length; i++) {
//        if (teamMembers[i] )
//    }

}


module.exports = generateHTML;