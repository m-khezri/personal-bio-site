// import $ from 'jquery';
import 'bootstrap';
import './index.scss';



// // funtion for Print to DOM
// const printToDom = (stringToPrint, divId) => {
//   const selectedDiv = document.getElementById(divId);
//   selectedDiv.innerHTML = stringToPrint;
// };


// // function to print projects on webpage
// const createProjectCards = () => {

//   let newProject = '';
//   for (let i = 0; i < projects.length; i++) {
//     newProject += `<div class="mr-2">`;
//     newProject += `<h5 class="project_header">Projects</h5>`;
//     newProject += `<p>${projects[i].title}</p>`;
//     newProject += `<img src="${projects[i].screenshot}"></img>`;
//     newProject += `<p>${projects[i].description}</p>`;
//     newProject += `<p>${projects[i].technologiesUsed}</p>`;
//     newProject += `<p>${projects[i].available}</p>`;
//     newProject += `<a href="https://${projects[i].url}" target="_blank">View Project</a>`;
//     newProject += `<p><a href="https://${projects[i].githubUrl}" target="_blank">Git Hub</a><p>`;
//     newProject += `</div>`;
//     if (projects[i].available === true) {
//       printToDom(newProject, 'projectsPage');
//     };
//   };
// };


// // -------- Assign link IDs to variables
// const bioLink = document.getElementById('navToBio');
// const techLink = document.getElementById('navToTechnologies');
// const projectLink = document.getElementById('navToProjects');

// // -------- Assign Div IDs to variables
// const bioDIV = document.getElementById('bioPage');
// const techDIV = document.getElementById('technologiesPage');
// const projectDIV = document.getElementById('projectsPage');
// const pageDIV = document.getElementsByClassName('fullPage');


// // --------- Event listener
// pageDIV.remove();

// bioDIV.addEventListener('click', (e) => {
//   alert('bio');
//   e.defaultPrevented;
// }
// }
