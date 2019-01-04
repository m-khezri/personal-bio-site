import $ from 'jquery';
import mypic from '../images/mypic.jpg';

const AboutMe = () => {
  let domString = '';
  domString += `
    <div data-aos="fade-right" class="flex-item p-2">
    <h3 class="titles text-center">About Me</h3>
    <img data-aos="zoom-in" id="myPic" class="myphoto rounded-circle m-5" style="max-width:20rem" alt="my picture">
    <button id="resume-dl" class="my-5 btn btn-light btn-block"><i class="fa fa-download" aria-hidden="true"></i>
      | Download Resume</button>
  </div>
  <div data-aos="fade-up" class="paragraph-holder flex-item text-secondary m-5">
  <h4 class="text-info">Mohammad Khezri</h4>
    <p>I am a graphic designer, art director, and photographer for over the past 15 years. I have gained great
      experiences in the fields of printing and layout design. After immigrating to the US in 2017 I decided to make a change to my career to web development because I believe web development is a combiniation of design and technology...</p>
  </div>
    `;
  $('#about-me').html(domString);
  $('#myPic').attr('src', mypic);
};

export default AboutMe;
