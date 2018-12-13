import $ from 'jquery';
import mypic from '../images/mypic.jpg';

const AboutMe = () => {
  let domString = '';
  domString += `
    <div data-aos="fade-right" class="flex-item p-2">
    <h3 class="titles text-center">About Me</h3>
    <img id="myPic" class="myphoto rounded-circle" style="max-width:20rem" alt="my picture">
    <button id="resume-dl" class="my-5 btn btn-light btn-block"><i class="fa fa-download" aria-hidden="true"></i>
      | Download Resume</button>
  </div>
  <div data-aos="fade-up" class="paragraph-holder flex-item text-secondary">
    <p>I am a graphic designer, art director, and photographer for over the past 15 years. I have gained great
      experiences in the fields of printing and layout design. After finishing high school, I soon began my first
      career in a printing shop as a junior graphic designer in 1999. I was in charge of creating different type of
      artworks for different clients.</p>
    <p> In 2004 I was employed by a large scale company in the region as a graphic designer. I acted as a graphic
      designer and photographer for a few years then soon I promoted to a senior graphic designer and art director.
      I
      was responsible for supervise other graphic designers to make sure every project meets the principles and
      deadlines. The graphic design division as part of marketing department was responsible to support sales and
      marketing needs. Our major projects were creating variety of brochures, catalogs, calendars, price list
      booklets,
      advertising for magazines, sign boards for agents, support websites, commercial and product photography.</p>
    <p>Since I studied computer in high school and I had some experince in some languages such as GW-Basic, C and
      Pascal, I decided to learn web programming technologies so I enrolled at Nashville software school to become
      a
      full stack web developer because I belive it will open a lot of doors for me. Moreover, I love creating
      pretty
      things as a graphic designer and I think there are a lot of oppurtunities in web and application design. </P>
  </div>
    `;
  $('#about-me').html(domString);
  $('#myPic').attr('src', mypic);
};

export default AboutMe;
