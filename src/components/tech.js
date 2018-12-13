import $ from 'jquery';
import loadTech from '../data/techGetter';

const writeTech = (techArr) => {
  let domString = '';
  techArr.forEach((tech) => {
    domString += `
    <div data-aos="fade-left" class="col-md-2 m-2 text-center">
        <img class="mb-3 mb-md-0" src="${tech.techUrl}" alt="${tech.title}" style="width: 64px; height: 64px">
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
