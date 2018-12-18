import $ from 'jquery';
import 'bootstrap';

const contact = () => {
  let domString = '';
  domString += `
<h3 class="titles text-center">How to Contact me?</h3>

      <div data-aos="fade-right" class=" d-flex flex-column-reverse">
        <!-- Start of contact wrapper-->

        <div class="socialMedia mx-auto">
          <a href="http://www.linkedin.com/in/mohammad-khezri" target="_blank"><img src="https://seeklogo.com/images/L/linkedin-icon-logo-05B2880899-seeklogo.com.png"
              class="img-fluid" alt="linkedin"></a>
          <a href="https://www.instagram.com/photography_khezri/?hl=en" target="_blank"><img src="https://seeklogo.com/images/I/instagram-new-2016-logo-D9D42A0AD4-seeklogo.com.png"
              class="img-fluid" alt="instagarm"></a>
          <a href="https://github.com/m-khezri" target="_blank"><img src="https://seeklogo.com/images/G/github-octocat-logo-424E09E6F6-seeklogo.com.png"
              class="img-fluid" alt="github"></a>
          <a href="https://twitter.com/MohammadKhezri" target="_blank"><img src="https://seeklogo.com/images/T/twitter-icon-circle-blue-logo-94339974C6-seeklogo.com.png"
              class="img-fluid" alt="twitter"></a>
        </div>
        <hr>

      </div> <!-- End of contact wrapper  -->
`;
  $('#contact').html(domString);
};

export default contact;
