import $ from 'jquery';
import mypic from '../images/mypic.jpg';

const AboutMe = () => {
  let domString = '';
  domString += `
    <div data-aos="fade-right" class="flex-item p-2">
    <h3 class="titles text-center">About Me</h3>
    <img data-aos="zoom-in" id="myPic" class="myphoto rounded-circle m-5" style="max-width:20rem" alt="my picture">
    <a id="resume-dl" href="../src/files/Resume.pdf" target="_blank" class="my-5 btn btn-light btn-block"><i class="fa fa-download" aria-hidden="true"></i>
      | Download Resume</a>
  </div>
  <div data-aos="fade-up" class="paragraph-holder flex-item text-secondary m-5">
  <h4 class="text-info">Mohammad Khezri</h4>
  <h6 class="text-danger">Junior web developer, Graphic designer and Photographer</h6>
    <p>I consider myself to be a combination of artistic and technological. I enjoy creating, designing and developing web apps and UI. After several years working in graphic design, I decided to expand my experience in field of web application. I believe there is plenty of room to further develop my skills and learn new materials as a web developer so after I moved to the US, I enrolled in Nashville Software School to learn web programming. Before that, I was a Art director, graphic designer and photographer in a manufacturing company. I was responsible for creativity, planning and implementing new designs for print and web platform. I was working closely with ICT and sales and marketing departments to support and provide all graphical materials. </p>
  </div>
    `;
  $('#about-me').html(domString);
  $('#myPic').attr('src', mypic);
};

export default AboutMe;
