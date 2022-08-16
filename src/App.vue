<script setup>
  import HeaderView from './components/Header.vue';
  import ContactPage from './components/ContactPage.vue';

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

  #marginauto {
    margin: auto;
    display: block;
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
      </div>
    </div>
  </div>
  <div class="row g-0 flex-md-row shadow-sm h-md-300 position-relative p-lg-5 text-white" style="background-color:#1e1e1e" id="about" tabindex="1">
      <div class="col-auto d-none d-lg-block">
        <img class="bd-placeholder-img" width="400" height="600" style="align-content: center;"
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficon-library.com%2Fimages%2Fdefault-profile-icon%2Fdefault-profile-icon-16.jpg&f=1&nofb=1"/>
      </div>
      <div class="col p-4 d-flex flex-column position-static">
        <h2 style="color: #000;" class="col-sm-4 justify-content-center d-block text-white">About Me</h2>
        <hr />
        <h4>Hello, my name is David. I am a 16yo self-taught programmer. </h4>
      </div>
  </div>
  <div class="col-md-5 p-lg-5 w-auto text-white justify-content-center" style="background-color:#1e1e1e" id="portofilo" tabindex="2">
  <div class="row g-0 overflow-hidden flex-md-row row d-flex justify-content-center p-lg-5">
    <h2 class="text-center mb-3">My Portofilo</h2>
    <h4 class="text-center mb-5">Langauges</h4>
    <div class='row justify-content-around w-200'>
      <div class="col-3">
        <img src="src\images\nodejs.png" width=auto height="100" id="marginauto"/>
      </div>
      <div class="col-3">
        <img src="src\images\python.png" width=auto height="100" id="marginauto"/>
      </div>
      <div class="col-3">
        <img src="src\images\mysql.png" width=auto height="100" id="marginauto"/>
      </div>
      <div class="col-3">
        <img src="src\images\react.png" width=auto height="100" id="marginauto"/>
      </div>
    </div>
    <h4 class="text-center g-5">Projects</h4>
    <!-- !Embed is a bit laggy-->
    <!-- <div class='row justify-content-around w-200'>
      <div class="col-4">
        <embed src="https://bit.ly/3plwgQh" class="rounded" style="width:500px; height: 300px;"/>
      </div>
      <div class="col-4">
        <embed src="https://play.google.com/store/apps/details?id=com.ionxccd.PocketNotes" 
        style="width:500px; height: 300px;" class="rounded"/>
      </div>
    </div> -->
    <!-- <div class='row justify-content-around w-200'>
      <div class="col-4">
        <embed src="https://rapidapi.com/ionxccd/api/open-library2" class="rounded" style="width:500px; height: 300px;"/>
      </div>
      <div class="col-4">
        <embed src="https://rapidapi.com/ionxccd/api/today-in-history/" 
        style="width:500px; height: 300px;" class="rounded"/>
      </div>
    </div> -->
    <ContactPage></ContactPage>
  </div>
  </div>
</template>
