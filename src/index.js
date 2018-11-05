// import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import myPic from './images/mypic.jpg';

$('body').scrollspy({ target: '#navbar-links' });

$('#myPic').attr('src', myPic);
// $('[data-spy="scroll"]').each(function () {
//   const $spy = $(this).scrollspy('refresh');
// });
