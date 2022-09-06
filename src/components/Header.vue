<script setup>
  import GithubIcon from './icons/GithubIcon.vue';
  import InstagramIcon from './icons/InstagramIcon.vue';
</script>

<template>
<header class="site-header sticky-top">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
      <a class="navbar-brand w-5 mx-3" style="font-weight:100;" href="#"><b style="font-weight:500;">A</b>asa</a>
      <div class="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNav">
          <ul class="navbar-nav float-right mx-3">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">About</a>
            </li>
            <li class="nav-item mr-5">
              <a class="nav-link" href="#portofilo">My Portofilo</a>
            </li>
            <li class="nav-item mr-5">
              <a class="nav-link" href="#contact">Contact</a>
            </li>
            <a href="https://www.instagram.com/somethignwaht/" class="text-white" style="margin-left: 15px;" target="_blank"><InstagramIcon/></a>
            <a href="https://github.com/ionxccd" class="text-white" style="margin-left: 15px;" target="_blank"><GithubIcon/></a>
          </ul>
      </div>
    </nav>
  </header>
</template>