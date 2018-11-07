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
        <div class="mr-2">
        <p>${project.title}</p>
        <img src="${project.screenshot}"></img>
        <p>${project.description}</p>
        <p>${project.technologiesUsed}</p>
        <p>${project.available}</p>
        <a href="https://${project.url}" target="_blank">View Project</a>
        <p><a href="https://${project.githubUrl}" target="_blank">Git Hub</a><p>
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
