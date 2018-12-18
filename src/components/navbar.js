import $ from 'jquery';

const navbar = () => {
  let domString = '';
  domString += `
<nav id="navbar-links" class="navbarBox navbar navbar-expand-md navbar-light fixed-top">
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
  aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo01">
  <form class="form-inline">
    <ul class="navbar-nav nav-pills mr-auto mt-2 mt-lg-0 text-light">
      <li class="nav-item">
        <a class="nav-link" href="#about-me">About Me
          <span class="sr-only">(current)</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#my-projects">Projects
          <span class="sr-only">(current)</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#technologies">Technologies
          <span class="sr-only">(current)</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#contact">Contact
          <span class="sr-only">(current)</span>
        </a>
      </li>
    </ul>
  </form>
</div>
</nav>
`;
  $('#navBar').html(domString);
};

export default navbar;
