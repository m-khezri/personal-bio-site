import $ from 'jquery';
import firebase from 'firebase';
import apiKeys from '../db/apiKeys.json';
import 'bootstrap';
import './index.scss';
import getProjects from './components/projects';
import initTechView from './components/tech';
import AboutMe from './components/aboutMe';
import contact from './components/contact';
import myPic from './images/mypic.jpg';


const initApp = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  AboutMe();
  getProjects();
  initTechView();
  contact();
  $('body').scrollspy({ target: '#navbar-links' });
  $('#myPic').attr('src', myPic);
};

initApp();
