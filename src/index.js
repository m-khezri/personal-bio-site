import $ from 'jquery';
import firebase from 'firebase/app';
import apiKeys from '../db/apiKeys.json';
import 'bootstrap';
import './index.scss';
import myPic from './images/mypic.jpg';
import loadProjects from './components/projects';

$('body').scrollspy({ target: '#navbar-links' });
$('#myPic').attr('src', myPic);


const initApp = () => {
  firebase.initializeApp(apiKeys, firebaseKeys);
  loadProjects();
};

initApp();
