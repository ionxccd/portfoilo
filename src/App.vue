<script setup>
  import HeaderView from './components/Header.vue';
  import ContactPage from './components/ContactPage.vue';

  import GithubIcon from './components/icons/GithubIcon.vue';
  import { ref, onMounted } from 'vue';
  import ProjectPage from './components/ProjectPage.vue';
  import LangaugePage from './components/LangaugePage.vue';
  import IntroPage from './components/IntroPage.vue';
  import AboutPage from './components/AboutPage.vue';

  const count = ref(0)

  function increment() {
    count.value++
    console.log(count.value);
  }

  onMounted(() => {
    console.log(`The initial count is ${count.value}.`)
  })
</script>

<style>
  .socialContainer{
    display: -webkit-flex;
      display: flex;
      -webkit-flex-direction: row;
    flex-direction: row;
  }

  #marginauto {
    margin: auto;
    display: block;
  }
</style>

<template>
  <HeaderView/>

  <div class="col-md-5 p-lg-5 w-100 text-white" id="home" style="background-color:#1e1e1e;" tabindex="0">
    <IntroPage/>
  </div>
  <div class="row g-0 flex-md-row shadow-sm h-md-300 position-relative p-lg-5 text-white" style="background-color:#1e1e1e" id="about" tabindex="1">
    <div class="py-3" style="background-color:#1e1e1e;"></div>  
    <AboutPage/>
  </div>
  <div class="col-md-5 p-lg-5 w-auto text-white justify-content-center" style="background-color:#1e1e1e" id="portofilo" tabindex="2">
    <div class="row g-0 overflow-hidden flex-md-row row d-flex justify-content-center p-lg-5">
      <h2 class="text-center mb-3">My Portofilo</h2>

      <h4 class="text-center mb-5">Langauges</h4>
      <LangaugePage/>

      <h4 class="text-center g-5">Projects</h4>
      <ProjectPage/>

      <div class="col-md-5 p-lg-5 w-100 text-white justify-content-center d-block" style="background-color:#1e1e1e" id="contact" tabindex="2">
      <ContactPage/>
      </div>
    </div>
    <div class="alert" style="width:fit-content" role="alert" id="alertContent">
    </div>
  </div>
</template>
