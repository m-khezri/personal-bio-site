let projects = [
    {
        title: "Cool Project", 
        screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
      },

      {
        title: "Cool Project", 
        screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
      },

      {
        title: "Cool Project", 
        screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
      }
];



// funtion for Print to DOM
const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
};

// -------- Assign link IDs to variables
const bioLink = document.getElementById('navToBio');
const techLink = document.getElementById('navToTechnologies');
const projectLink = document.getElementById('navToProjects');

// -------- Assign Div IDs to variables
const bioDIV = document.getElementById('bioPage');
const techDIV = document.getElementById('technologiesPage');
const projectDIV = document.getElementById('projectsPage');


// --------- Event listener 
bioLink.addEventListener("click", (e) => {
    techDIV.remove();
    projectDIV.remove();
    createBio();
    e.preventDefault();
});

techLink.addEventListener("click", (e) => {
        bioDIV.remove();
        projectDIV.remove();
        Technology();
        e.preventDefault();

  });

projectLink.addEventListener("click", (e) => {
  bioDIV.remove();
  techDIV.remove();
  createProjectCards();
  e.preventDefault();

});



// function to print Bio on webpage
const createBio = () => {

  let myBio = '';
  myBio += `<div>`;
  myBio += `<p>I am a graphic designer, art director, and photographer for over the past 15 years. I have gained great experiences in the fields of printing and layout design. After finishing high school, I soon began my first career in a printing shop as a junior graphic designer in 1999. I was in charge of creating different type of artworks for different clients.</p>`;
  myBio += `<p> In 2004 I was employed by a large scale company in the region as a graphic designer. I acted as a graphic designer and photographer for a few years then soon I promoted to a senior graphic designer and art director. I was responsible for supervise other graphic designers to make sure every project meets the principles and deadlines. The graphic design division as part of marketing department was responsible to support sales and marketing needs. Our major projects were creating variety of brochures, catalogs, calendars, price list booklets, advertising for magazines, sign boards for agents, support websites, commercial and product photography.</p>`
  myBio += `<p>Since I studied computer in high school and I had some experince in some languages such as GW-Basic, C and Pascal, I decided to learn web programming technologies so I enrolled at Nashville software school to become a full stack web developer because I belive it will open a lot of doors for me. Moreover, I love creating pretty things as a graphic designer and I think there are a lot of oppurtunities in web and application design. </P>`
  myBio += `</div>`;
  printToDom(myBio, 'bioPage');
};


// function to print Technologies on webpage
const Technology = () => {


  let tech = '';
  tech += `<div class="card w-50 m-5">`;
  tech += `<ul class="list-group card-body">`;
      tech += `<li class="list-group-item active">Technologies</li>`;
      tech += `<li class="list-group-item">HTML5</li>`;
      tech += `<li class="list-group-item">CSS3</li>`;
      tech += `<li class="list-group-item">JavaScript</li>`;
      tech += `<li class="list-group-item">Git</li>`;
      tech += `<li class="list-group-item">GitHub</li>`;
  tech += `</ul>`;
  tech += `</div>`;
  printToDom(tech, 'technologiesPage');
};


// function to print projects on webpage
const createProjectCards = () => {
  
  let newProject = '';
  for (let i = 0; i < projects.length; i++) {
    newProject += `<div class="mr-2">`;
    newProject +=`<h5 class="project_header">Projects</h5>`;
    newProject += `<p>${projects[i].title}</p>`;
    newProject += `<img src="${projects[i].screenshot}"></img>`;
    newProject += `<p>${projects[i].description}</p>`;
    newProject += `<p>${projects[i].technologiesUsed}</p>`;
    newProject += `<p>${projects[i].available}</p>`;
    newProject += `<a href="https://${projects[i].url}" target="_blank">View Project</a>`;
    newProject += `<p><a href="https://${projects[i].githubUrl}" target="_blank">Git Hub</a><p>`;
    newProject += `</div>`;
      if (projects[i].available === true){
      printToDom(newProject, 'projectsPage');
  };
  };
};

createBio();
