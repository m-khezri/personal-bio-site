import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import myPic from './images/mypic.jpg';
// import aboutBgImage from './images/aboutme-bg.jpg';

import getProjects from './javascripts/projectsGetter';

$('body').scrollspy({ target: '#navbar-links' });


$('#myPic').attr('src', myPic);
// $('#aboutBgImage').attr('src', aboutBgImage);


// Printing projects to DOM

const loadProjects = (projects) => {
  let newString = '';
  projects.forEach((project) => {
    newString += `
        <div class="mr-2 p-2 border shadow-sm rounded">
        <h6 class="text-secondary">${project.title}</h6>
        <img class="img-responsive" style="width: 17rem" src="${project.screenshot}"></img>
        <p class="text-center">${project.description}</p>
        <p class="text-info text-center">${project.technologiesUsed}</p>
        <!-- <p>${project.available}</p> -->
        <p class="text-center"><a href="https://${project.url}" target="_blank">View Project</a></p>
        <p class="text-center"><a href="https://${project.githubUrl}" target="_blank">Git Hub</a><p>
        </div>`;
    if (project.available === true) {
      $('#my-projects').html(newString);
    }
  });
};

getProjects()
  .then((data) => {
    console.log(data.data);
    loadProjects(data.data);
  })
  .catch((error) => {
    console.error(error);
  });

$('#my-projects').show();
