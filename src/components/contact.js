import $ from 'jquery';
import 'bootstrap';

const contact = () => {
  let domString = '';
  domString += `
<h3 class="titles text-center">Drop me a line</h3>

      <div class=" d-flex flex-column-reverse">
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
        <div class="contactForm mx-auto">
          <!--Section: Contact v.2-->
          <section class="col-md-12">
            <div class="row">

              <!--Grid column-->
              <div class="col-md-12 mb-md-0 mb-5">
                <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                  <!--Grid row-->
                  <div class="row">

                    <!--Grid column-->
                    <div class="col-md-12">
                      <div class="md-form mb-0">
                        <input type="text" id="name" name="name" class="form-control">
                        <label for="name" class="">Your name</label>
                      </div>
                    </div>
                    <!--Grid column-->

                    <!--Grid column-->
                    <div class="col-md-12">
                      <div class="md-form mb-0">
                        <input type="text" id="email" name="email" class="form-control">
                        <label for="email" class="">Your email</label>
                      </div>
                    </div>
                    <!--Grid column-->

                  </div>
                  <!--Grid row-->

                  <!--Grid row-->
                  <div class="row">
                    <div class="col-md-12">
                      <div class="md-form mb-0">
                        <input type="text" id="subject" name="subject" class="form-control">
                        <label for="subject" class="">Subject</label>
                      </div>
                    </div>
                  </div>
                  <!--Grid row-->

                  <!--Grid row-->
                  <div class="row">

                    <!--Grid column-->
                    <div class="col-md-12">

                      <div class="md-form">
                        <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                        <label for="message">Your message</label>
                      </div>

                    </div>
                  </div>
                  <!--Grid row-->

                </form>

                <div class="text-center text-md-left">
                  <button class="btn btn-light btn-block" onclick="document.getElementById('contact-form').submit();">Send</button>
                </div>
                <div class="status"></div>
              </div>
              <!--Grid column-->


            </div>

          </section>
          <!--Section: Contact v.2-->
        </div>

      </div> <!-- End of contact wrapper  -->
`;
  $('#contact').html(domString);
};

export default contact;
