<template>
  <div>
    <header>
      <Aside/>
    </header>
    <main>
      <Main id="main"/>
      <Timer id="timer"/>
      <AboutProject id="about-project"/>
      <Gallery id="gallery"/>
      <AboutUs id="about-us"/>
      <PreviousEditions id="previous-editions"/>
      <Place id="place" />
      <FAQ id="faq"/>
      <Partners id="partners"/>
    </main>
    <footer>
      <Contact id="contact"/>
    </footer>
  </div>
</template>

<script>
import Main from "../components/Main";
import Aside from "../components/Aside";
import Contact from "../components/Contact";
import AboutProject from "../components/AboutProject";
import Gallery from "../components/Gallery";
import AboutUs from "../components/AboutUs";
import PreviousEditions from "../components/PreviousEditions";
import FAQ from "../components/FAQ";
import Partners from "../components/Partners";
import Place from "../components/Place";
import Timer from "../components/Timer";

export default {
  name: "home",
  components: {
    Main,
    AboutProject,
    Gallery,
    AboutUs,
    PreviousEditions,
    Place,
    FAQ,
    Aside,
    Contact,
    Timer,
    Partners
  }
};
</script>
