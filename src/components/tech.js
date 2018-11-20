import 'bootstrap';
import $ from 'jquery';
import loadTech from '../data/techGetter';

const writeTechs = (techs) => {
  let newString = '';
  techs.forEach((tech) => {
    newString += `
    <div class="d-flex flex-wrap justify-content-between">
        <p>${tech.title}</p>
        <img class="img-responsive" style="width: 17rem" src="${tech.techURL}"></img>
    </div>`;
  });
  $('#technologies').html(newString);
};

const initTechsView = () => {
  loadTech().then((data) => {
    writeTechs(data);
  }).catch((error) => {
    console.error(error);
  });
};

export default initTechsView;
