export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  // const scriptAttr = {
  //   loop: true,
  //   speed: 600,
  //   autoplay: {
  //     delay: 5000,
  //   },
  //   slidesPerView: "auto",
  //   pagination: {
  //     el: ".swiper-pagination",
  //     type: "bullets",
  //     clickable: true,
  //   },
  // };
  const scriptAttr= "Test";
  return (
    <div>
      <main className="main">

{/* <!-- Hero Section --> */}
<section id="hero" className="hero section light-background">

  <div className="container position-relative" data-aos="fade-up" data-aos-delay="100">
    <div className="row gy-5">
      <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
        <h2>eStartup</h2>
        <p>Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.</p>
        <div className="d-flex">
          <a href="#about" className="btn-get-started">Get Started</a>
          <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle"></i><span>Watch Video</span></a>
        </div>
      </div>
      <div className="col-lg-6 order-1 order-lg-2">
        <img src="assets/img/hero-img.png" className="img-fluid" alt=""/>
      </div>
    </div>
  </div>

  <div className="icon-boxes position-relative" data-aos="fade-up" data-aos-delay="200">
    <div className="container position-relative">
      <div className="row gy-4 mt-5">

        <div className="col-xl-3 col-md-6">
          <div className="icon-box">
            <div className="icon"><i className="bi bi-easel"></i></div>
            <h4 className="title"><a href="" className="stretched-link">Lorem Ipsum</a></h4>
          </div>
        </div>
        {/* <!--End Icon Box --> */}

        <div className="col-xl-3 col-md-6">
          <div className="icon-box">
            <div className="icon"><i className="bi bi-gem"></i></div>
            <h4 className="title"><a href="" className="stretched-link">Sed ut perspiciatis</a></h4>
          </div>
        </div>
        {/* <!--End Icon Box --> */}

        <div className="col-xl-3 col-md-6">
          <div className="icon-box">
            <div className="icon"><i className="bi bi-geo-alt"></i></div>
            <h4 className="title"><a href="" className="stretched-link">Magni Dolores</a></h4>
          </div>
        </div>
        {/* <!--End Icon Box --> */}

        <div className="col-xl-3 col-md-6">
          <div className="icon-box">
            <div className="icon"><i className="bi bi-command"></i></div>
            <h4 className="title"><a href="" className="stretched-link">Nemo Enim</a></h4>
          </div>
        </div>
        {/* <!--End Icon Box --> */}

      </div>
    </div>
  </div>

</section>
{/* <!-- /Hero Section --> */}

{/* <!-- About Section --> */}
<section id="about" className="about section">

  <div className="container">

    <div className="row gy-4">

      <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">
        <p className="who-we-are">Who We Are</p>
        <h3>Unleashing Potential with Creative Strategy</h3>
        <p className="fst-italic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
        <ul>
          <li><i className="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
          <li><i className="bi bi-check-circle"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
          <li><i className="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span></li>
        </ul>
        <a href="#" className="read-more"><span>Read More</span><i className="bi bi-arrow-right"></i></a>
      </div>

      <div className="col-lg-6 about-images" data-aos="fade-up" data-aos-delay="200">
        <div className="row gy-4">
          <div className="col-lg-6">
            <img src="assets/img/about-company-1.jpg" className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-6">
            <div className="row gy-4">
              <div className="col-lg-12">
                <img src="assets/img/about-company-2.jpg" className="img-fluid" alt=""/>
              </div>
              <div className="col-lg-12">
                <img src="assets/img/about-company-3.jpg" className="img-fluid" alt=""/>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>

  </div>
</section>
{/* <!-- /About Section --> */}

{/* <!-- Services Section --> */}
<section id="services" className="services section">

  {/* <!-- Section Title --> */}
  <div className="container section-title" data-aos="fade-up">
    <h2>Services</h2>
    <div><span>Check Our</span> <span className="description-title">Services</span></div>
  </div>
  {/* <!-- End Section Title --> */}

  <div className="container">

    <div className="row gy-4">

      <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
        <div className="service-item  position-relative">
          <div className="icon">
            <i className="bi bi-activity"></i>
          </div>
          <a href="service-details.html" className="stretched-link">
            <h3>Nesciunt Mete</h3>
          </a>
          <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
        </div>
      </div>
      {/* <!-- End Service Item --> */}

      <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
        <div className="service-item position-relative">
          <div className="icon">
            <i className="bi bi-broadcast"></i>
          </div>
          <a href="service-details.html" className="stretched-link">
            <h3>Eosle Commodi</h3>
          </a>
          <p>Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.</p>
        </div>
      </div>
      {/* <!-- End Service Item --> */}

      <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
        <div className="service-item position-relative">
          <div className="icon">
            <i className="bi bi-easel"></i>
          </div>
          <a href="service-details.html" className="stretched-link">
            <h3>Ledo Markt</h3>
          </a>
          <p>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.</p>
        </div>
      </div>
      {/* <!-- End Service Item --> */}

      <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
        <div className="service-item position-relative">
          <div className="icon">
            <i className="bi bi-bounding-box-circles"></i>
          </div>
          <a href="service-details.html" className="stretched-link">
            <h3>Asperiores Commodit</h3>
          </a>
          <p>Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.</p>
          <a href="service-details.html" className="stretched-link"></a>
        </div>
      </div>
      {/* <!-- End Service Item --> */}

      <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
        <div className="service-item position-relative">
          <div className="icon">
            <i className="bi bi-calendar4-week"></i>
          </div>
          <a href="service-details.html" className="stretched-link">
            <h3>Velit Doloremque</h3>
          </a>
          <p>Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.</p>
          <a href="service-details.html" className="stretched-link"></a>
        </div>
      </div>
      {/* <!-- End Service Item --> */}

      <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
        <div className="service-item position-relative">
          <div className="icon">
            <i className="bi bi-chat-square-text"></i>
          </div>
          <a href="service-details.html" className="stretched-link">
            <h3>Dolori Architecto</h3>
          </a>
          <p>Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.</p>
          <a href="service-details.html" className="stretched-link"></a>
        </div>
      </div>
      {/* <!-- End Service Item --> */}

    </div>

  </div>

</section>
{/* <!-- /Services Section --> */}

{/* <!-- Features Section --> */}
<section id="features" className="features section light-background">

  {/* <!-- Section Title --> */}
  <div className="container section-title" data-aos="fade-up">
    <h2>Features</h2>
    <div><span>Check Our</span> <span className="description-title">Features</span></div>
  </div>
  {/* <!-- End Section Title --> */}

  <div className="container">

    <div className="row gy-5 justify-content-between">

      <div className="col-xl-5" data-aos="zoom-out" data-aos-delay="100">
        <img src="assets/assets/img//template/eStartup/features.svg" className="img-fluid" alt=""/>
      </div>

      <div className="col-xl-6 d-flex">
        <div className="row align-self-center gy-4">

          <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="feature-box d-flex align-items-center">
              <i className="bi bi-check"></i>
              <h3>Eos aspernatur rem</h3>
            </div>
          </div>
          {/* <!-- End Feature Item --> */}

          <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div className="feature-box d-flex align-items-center">
              <i className="bi bi-check"></i>
              <h3>Facilis neque ipsa</h3>
            </div>
          </div>
          {/* <!-- End Feature Item --> */}

          <div className="col-md-6" data-aos="fade-up" data-aos-delay="400">
            <div className="feature-box d-flex align-items-center">
              <i className="bi bi-check"></i>
              <h3>Volup amet volupt</h3>
            </div>
          </div>
          {/* <!-- End Feature Item --> */}

          <div className="col-md-6" data-aos="fade-up" data-aos-delay="500">
            <div className="feature-box d-flex align-items-center">
              <i className="bi bi-check"></i>
              <h3>Rerum omnis sint</h3>
            </div>
          </div>
          {/* <!-- End Feature Item --> */}

          <div className="col-md-6" data-aos="fade-up" data-aos-delay="600">
            <div className="feature-box d-flex align-items-center">
              <i className="bi bi-check"></i>
              <h3>Alias possimus</h3>
            </div>
          </div>
          {/* <!-- End Feature Item --> */}

          <div className="col-md-6" data-aos="fade-up" data-aos-delay="700">
            <div className="feature-box d-flex align-items-center">
              <i className="bi bi-check"></i>
              <h3>Repellendus molli</h3>
            </div>
          </div>
          {/* <!-- End Feature Item --> */}

        </div>
      </div>

    </div>

  </div>

</section>
{/* <!-- /Features Section --> */}

{/* <!-- Pricing Section --> */}
<section id="pricing" className="pricing section">

  {/* <!-- Section Title --> */}
  <div className="container section-title" data-aos="fade-up">
    <h2>Pricing</h2>
    <div><span>Check Our</span> <span className="description-title">Pricing</span></div>
  </div>
  {/* <!-- End Section Title --> */}

  <div className="container">

    <div className="row gy-4">

      <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="100">
        <div className="pricing-tem">
          <h3 styles={{color: "#20c997"}}>Free Plan</h3>
          <div className="price"><sup>$</sup>0<span> / mo</span></div>
          <div className="icon">
            <i className="bi bi-box" styles={{color: "#20c997"}}></i>
          </div>
          <ul>
            <li>Aida dere</li>
            <li>Nec feugiat nisl</li>
            <li>Nulla at volutpat dola</li>
            <li className="na">Pharetra massa</li>
            <li className="na">Massa ultricies mi</li>
          </ul>
          <a href="#" className="btn-buy">Buy Now</a>
        </div>
      </div>
      {/* <!-- End Pricing Item --> */}

      <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="200">
        <div className="pricing-tem">
          <span className="featured">Featured</span>
          <h3 styles="color: #0dcaf0;">Starter Plan</h3>
          <div className="price"><sup>$</sup>19<span> / mo</span></div>
          <div className="icon">
            <i className="bi bi-send" styles={{color: "#0dcaf0"}}></i>
          </div>
          <ul>
            <li>Aida dere</li>
            <li>Nec feugiat nisl</li>
            <li>Nulla at volutpat dola</li>
            <li>Pharetra massa</li>
            <li className="na">Massa ultricies mi</li>
          </ul>
          <a href="#" className="btn-buy">Buy Now</a>
        </div>
      </div>
      {/* <!-- End Pricing Item --> */}

      <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="300">
        <div className="pricing-tem">
          <h3 styles={{color: "#fd7e14"}}>Business Plan</h3>
          <div className="price"><sup>$</sup>29<span> / mo</span></div>
          <div className="icon">
            <i className="bi bi-airplane" styles={{color: "#fd7e14"}}></i>
          </div>
          <ul>
            <li>Aida dere</li>
            <li>Nec feugiat nisl</li>
            <li>Nulla at volutpat dola</li>
            <li>Pharetra massa</li>
            <li>Massa ultricies mi</li>
          </ul>
          <a href="#" className="btn-buy">Buy Now</a>
        </div>
      </div>
      {/* <!-- End Pricing Item --> */}

      <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="400">
        <div className="pricing-tem">
          <h3 styles={{color: "#0d6efd"}}>Ultimate Plan</h3>
          <div className="price"><sup>$</sup>49<span> / mo</span></div>
          <div className="icon">
            <i className="bi bi-rocket" styles={{color: "#0d6efd"}}></i>
          </div>
          <ul>
            <li>Aida dere</li>
            <li>Nec feugiat nisl</li>
            <li>Nulla at volutpat dola</li>
            <li>Pharetra massa</li>
            <li>Massa ultricies mi</li>
          </ul>
          <a href="#" className="btn-buy">Buy Now</a>
        </div>
      </div>
      {/* <!-- End Pricing Item --> */}

    </div>
    {/* <!-- End pricing row --> */}

  </div>

</section>
{/* <!-- /Pricing Section --> */}

{/* <!-- Faq Section --> */}
<section id="faq" className="faq section light-background">

  <div className="container">

    <div className="row gy-4">

      <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
        <div className="content px-xl-5">
          <h3><span>Frequently Asked </span><strong>Questions</strong></h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
          </p>
        </div>
      </div>

      <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">

        <div className="faq-container">
          <div className="faq-item faq-active">
            <h3><span className="num">1.</span> <span>Non consectetur a erat nam at lectus urna duis?</span></h3>
            <div className="faq-content">
              <p>Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.</p>
            </div>
            <i className="faq-toggle bi bi-chevron-right"></i>
          </div>
          {/* <!-- End Faq item--> */}

          <div className="faq-item">
            <h3><span className="num">2.</span> <span>Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?</span></h3>
            <div className="faq-content">
              <p>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.</p>
            </div>
            <i className="faq-toggle bi bi-chevron-right"></i>
          </div>
          {/* <!-- End Faq item--> */}

          <div className="faq-item">
            <h3><span className="num">3.</span> <span>Dolor sit amet consectetur adipiscing elit pellentesque?</span></h3>
            <div className="faq-content">
              <p>Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis</p>
            </div>
            <i className="faq-toggle bi bi-chevron-right"></i>
          </div>
          {/* <!-- End Faq item--> */}

          <div className="faq-item">
            <h3><span className="num">4.</span> <span>Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?</span></h3>
            <div className="faq-content">
              <p>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.</p>
            </div>
            <i className="faq-toggle bi bi-chevron-right"></i>
          </div>
          {/* <!-- End Faq item--> */}

          <div className="faq-item">
            <h3><span className="num">5.</span> <span>Tempus quam pellentesque nec nam aliquam sem et tortor consequat?</span></h3>
            <div className="faq-content">
              <p>Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in</p>
            </div>
            <i className="faq-toggle bi bi-chevron-right"></i>
          </div>
          {/* <!-- End Faq item--> */}

        </div>

      </div>
    </div>

  </div>

</section>
{/* <!-- /Faq Section --> */}

{/* <!-- Contact Section --> */}
<section id="contact" className="contact section">

  {/* <!-- Section Title --> */}
  <div className="container section-title" data-aos="fade-up">
    <h2>Contact</h2>
    <div><span>Need Help?</span> <span className="description-title">Contact Us</span></div>
  </div>
  {/* <!-- End Section Title --> */}

  <div className="container" data-aos="fade" data-aos-delay="100">

    <div className="row gy-4">

      <div className="col-lg-4">
        <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
          <i className="bi bi-geo-alt flex-shrink-0"></i>
          <div>
            <h3>Address</h3>
            <p>A108 Adam Street, New York, NY 535022</p>
          </div>
        </div>
        {/* <!-- End Info Item --> */}

        <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
          <i className="bi bi-telephone flex-shrink-0"></i>
          <div>
            <h3>Call Us</h3>
            <p>+1 5589 55488 55</p>
          </div>
        </div>
        {/* <!-- End Info Item --> */}

        <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
          <i className="bi bi-envelope flex-shrink-0"></i>
          <div>
            <h3>Email Us</h3>
            <p>info@example.com</p>
          </div>
        </div>
        {/* <!-- End Info Item --> */}

      </div>

      <div className="col-lg-8">
        <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="200">
          <div className="row gy-4">

            <div className="col-md-6">
              <input type="text" name="name" className="form-control" placeholder="Your Name" required=""/>
            </div>

            <div className="col-md-6 ">
              <input type="email" className="form-control" name="email" placeholder="Your Email" required=""/>
            </div>

            <div className="col-md-12">
              <input type="text" className="form-control" name="subject" placeholder="Subject" required=""/>
            </div>

            <div className="col-md-12">
              <textarea className="form-control" name="message" rows="6" placeholder="Message" required=""></textarea>
            </div>

            <div className="col-md-12 text-center">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">Your message has been sent. Thank you!</div>

              <button type="submit">Send Message</button>
            </div>

          </div>
        </form>
      </div>
      {/* <!-- End Contact Form --> */}

    </div>

  </div>

</section>
{/* <!-- /Contact Section --> */}

</main>
    </div>
  );
}
