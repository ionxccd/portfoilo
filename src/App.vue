<script setup>
  import HeaderView from './components/Header.vue';
  import GithubIcon from './components/icons/GithubIcon.vue';
  import { ref, onMounted } from 'vue';

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
</style>

<template>
  <HeaderView></HeaderView>
    <div class="col-md-5 p-lg-5 w-100 text-white" id="home" style="background-color:#1e1e1e;" tabindex="0">
    <div class="col-md-4 p-lg-5 mx-auto my-5 w-1">
        <img class="img-thumbnail rounded-circle mx-auto d-block justify-content-center" width="200" height="200" style="align-content: center;"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficon-library.com%2Fimages%2Fdefault-profile-icon%2Fdefault-profile-icon-16.jpg&f=1&nofb=1"/>
      <h1 class="display-4 font-weight-normal text-center">David Aasa</h1>
      <p class="lead font-weight-normal text-center">An up and coming full stack developer.</p>
      <div class="col col-md-8 mx-auto">
        <a href="https://github.com/ionxccd" class="bi bi-github text-center col-sm-4" target="_blank">
          <GithubIcon></GithubIcon>
        </a>
      </div>
    </div>
  </div>
  <div class="row g-0 flex-md-row shadow-sm h-md-300 position-relative p-lg-5 text-white" style="background-color:#1e1e1e" id="about" tabindex="1">
      <div class="col-auto d-none d-lg-block">
        <img class="bd-placeholder-img" width="400" height="600" style="align-content: center;"
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficon-library.com%2Fimages%2Fdefault-profile-icon%2Fdefault-profile-icon-16.jpg&f=1&nofb=1"/>
      </div>
      <div class="col p-4 d-flex flex-column position-static">
        <h2 style="color: #000;" class="col-sm-4 justify-content-center d-block">About Me</h2>
        <hr />
        <h4>Hello, my name is David. I am a 16yo self-taught programmer. </h4>
      </div>
  </div>
  <div class="col-md-5 p-lg-5 w-auto text-white justify-content-center" style="background-color:#1e1e1e" id="portoflio" tabindex="2">
  <div class="row g-0 overflow-hidden flex-md-row row d-flex justify-content-center p-lg-5">
    <h3 class="text-center">My Portofilo</h3>
    <h4 class="text-center">Langauges</h4>
    <div class='row align-items-start'>
      <div class="col">
      <img src="src\images\nodejs.png" width=auto height="100"/>
      </div>
      <div class="col">
        <img src="src\images\python.png" width=auto height="100"/>
      </div>
    </div>
    <h4>Projects</h4>
  </div>
  </div>
</template>
