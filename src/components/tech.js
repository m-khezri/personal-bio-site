import $ from 'jquery';
import loadTech from '../data/techGetter';

const writeTech = (techArr) => {
  let domString = '';
  domString += '<div>';
  domString += '<h3 class="text-center flex-fill titles text-center">Technologies</h3>';
  domString += '</div';
  domString += '<div col-md-2 m-0 text-center">';
  techArr.forEach((tech) => {
    domString += `
      <img data-aos="fade-left" class="flex-item m-1 img-fluid" src="${tech.techUrl}" alt="${tech.title}">`;
  });
  domString += '</div';
  $('#technologies').html(domString);
};

const initTechView = () => {
  loadTech().then((data) => {
    writeTech(data);
  }).catch((error) => {
    console.error(error);
  });
};

export default initTechView;
