import $ from 'jquery';
import firebase from 'firebase';
import apiKeys from '../db/apiKeys.json';
import 'bootstrap';
import './index.scss';
import initProjectsView from './components/projects';
import myPic from './images/mypic.jpg';

$('body').scrollspy({ target: '#navbar-links' });
$('#myPic').attr('src', myPic);


const initApp = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  initProjectsView();
};

initApp();
