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

// function to print projects on webpage
const createProjectCards = () => {
    let newProject = '';
    for (let i = 0; i < projects.length; i++) {
      newProject += `<div class="cardContainer">`;
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
createProjectCards();