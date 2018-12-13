import $ from 'jquery';
import loadTech from '../data/techGetter';

const writeTech = (techArr) => {
  let domString = '';
  domString += '    <h3 class="text-center flex-fill titles text-center">Technologies</h3>';
  domString += '    <hr>';
  techArr.forEach((tech) => {
    domString += `
    <div data-aos="fade-left" class="d-flex justify-content-between col-md-2 m-0 text-center">
    <img data-aos="fade-left" class="flex-item" src="${tech.techUrl}" alt="${tech.title}">
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
