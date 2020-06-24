<template>
  <div class="main-container">
    <header>
      <div class="logo">
        <img src="@/assets/logo.png" alt="an image of logo" />
      </div>
      <button class="nav-toggle" aria-label="toggle navigation">
        <span class="hamburger"></span>
      </button>
      <nav class="nav">
        <ul class="nav__list">
          <li class="nav__item">
            <a href="#home" class="nav__link">Home</a>
          </li>
          <li class="nav__item">
            <a href="#services" class="nav__link">My Service</a>
          </li>
          <li class="nav__item">
            <a href="#about" class="nav__link">About Me</a>
          </li>
          <li class="nav__item">
            <a href="#work" class="nav__link">My Work</a>
          </li>
        </ul>
      </nav>
    </header>

    <!-- introduction -->
    <section class="intro" id="home">
      <h1 class="section__title section__title--intro">
        Hi, I am
        <strong>Arman</strong>
      </h1>
      <p class="section__subtitle section__subtitle--intro">front end dev</p>
      <img src="@/assets/logo.png" alt="a picture of arman" />
    </section>

    <!-- my services -->
    <section class="my-services" id="services">
      <h2 class="section__title section__title--services">What I do</h2>
      <div class="services">
        <div class="service">
          <h3></h3>
          <p></p>
        </div>
        <div class="service">
          <h3></h3>
          <p></p>
        </div>
        <div class="service">
          <h3></h3>
          <p></p>
        </div>
      </div>
      <a href="#work" class="btn">My Work</a>
    </section>

    <!-- About me -->
    <section class="about-me" id="about">
      <h2 class="section__title section__title--about">Who I am</h2>
      <p class="section__subtitle section__subtitle--about"></p>
      <div class="about-me__body">
        <p></p>
      </div>
      <img src="@/assets/logo.png" alt="arman half body picture" />
    </section>
    <section class="my-work" id="work">
      <h2 class="section__title">My Work</h2>
      <p class="section__subtitle"></p>
      <div class="portfolio">
        <!-- portfolio 1 -->
        <a href="#" class="portfolio__item">
          <img src="@/assets/logo.png" alt class="portfolio__img" />
        </a>
        <!-- portfolio 1 -->
        <a href="#" class="portfolio__item">
          <img src="@/assets/logo.png" alt class="portfolio__img" />
        </a>
        <!-- portfolio 1 -->
        <a href="#" class="portfolio__item">
          <img src="@/assets/logo.png" alt class="portfolio__img" />
        </a>
      </div>
    </section>

    <!-- footer -->
    <footer>
      <a href="mailto:armanahmedjony786@gmail.com" class="footer__link"
        >armanahmedjony786@gmail.com</a
      >
      <ul class="social-list">
        <li class="social-list__item">
          <a href="facebook.com" class="social-list__link">f</a>
        </li>
        <li class="social-list__item">
          <a href="linkedin.com" class="social-list__link">l</a>
        </li>
        <li class="social-list__item">
          <a href="skype.com" class="social-list__link">s</a>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {}
</script>

<style>
/* custom properties */
.main-container {
  --ff-primary: 'Comfortaa', cursive;
  --ff-secondary: Arial, Helvetica, sans-serif;
  --fw-reg: 300;
  --fw-bold: 900;
  --clr-light: #fff;
  --clr-dark: #303030;
  --clr-accent: #16e0bd;
  --fs-h1: 3rem;
  --fs-h2: 2.25rem;
  --fs-h3: 1.25rem;
  --fs-body: 1rem;
}

@media (min-width: 800px) {
  .main-container {
    --fs-h1: 4.5rem;
    --fs-h2: 3.75rem;
    --fs-h3: 1.5rem;
    --fs-body: 1.125 rem;
  }
}
</style>
<style scoped src="../css/portfolio.css"></style>
