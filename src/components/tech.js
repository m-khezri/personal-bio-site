import $ from 'jquery';
import loadTech from '../data/techGetter';

const writeTech = (techArr) => {
  let domString = '';
  domString += '    <h3 class="text-center flex-fill titles text-center">Technologies</h3>';
  techArr.forEach((tech) => {
    domString += `
    <div data-aos="fade-left" class="col-md-2 m-0 text-center">
        <img data-aos="fade-left" class="mb-0 mb-md-0 w-50 h-50" src="${tech.techUrl}" alt="${tech.title}">
    </div>`;
  });
  $('#technologies').html(domString);
};

const initTechView = () => {
  loadTech().then((data) => {
    console.log(data);
    writeTech(data);
  }).catch((error) => {
    console.error(error);
  });
};

export default initTechView;
