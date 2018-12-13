import 'bootstrap';
import $ from 'jquery';
import loadProjects from '../data/projectGetter';

const writeProject = (projects) => {
  let newString = '';
  newString += '    <h3 class="text-center flex-fill titles text-center">Projects</h3>';
  projects.forEach((project) => {
    newString += `
        <div data-aos="fade-right" class="mr-2 p-2 border shadow-sm rounded flex-item">
        <img class="img-responsive" style="width: 17rem" src="${project.screenshot}"></img>
        <p class="text-center text-dark">${project.description}</p>
        <p class="text-info text-center">${project.technologiesUsed}</p>
        <!-- <p>${project.available}</p> -->
        <p class="text-center"><a href="https://${project.url}" target="_blank">View Project</a></p>
        <p class="text-center"><a href="https://${project.githubUrl}" target="_blank">Git Hub</a><p>
        <h6 class="text-secondary">${project.title}</h6>
        </div>`;
    if (project.available === true) {
      $('#my-projects').html(newString);
    }
  });
};

const getProjects = () => {
  loadProjects().then((data) => {
    writeProject(data);
  }).catch((error) => {
    console.error(error);
  });
};

export default getProjects;
