import 'bootstrap';
import $ from 'jquery';
import loadProjects from '../data/projectGetter';

const writeProject = (projects) => {
  let newString = '';
  newString += '    <h3 class="text-center titles">Projects</h3>';
  projects.forEach((project) => {
    newString += `
        <div data-aos="project-div fade-right" class="m-2 p-2 border shadow-sm rounded d-flex">
          <div class="flex-item w-50 mx-auto text-center mt-5">
            <img class="img-responsive" style="width: 17rem" src="${project.screenshot}"></img>
          </div>
          <div class= "flex-item ml-3 pl-5 w-50 border-left">
          <h5 class="text-info">${project.title}</h5>
            <p class="text-secondary">${project.description}</p>
            <p class="text-info text-center">${project.technologiesUsed}</p>
            <!-- <p>${project.available}</p> -->
            <p class="text-center"><a href="https://${project.url}" target="_blank">View Project</a></p>
            <p class="text-center"><a href="https://${project.githubUrl}" target="_blank">Git Hub</a><p>
            </div>
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
