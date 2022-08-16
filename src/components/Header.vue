<script setup>
  import GithubIcon from './icons/GithubIcon.vue';
</script>

<template>
<header class="site-header sticky-top">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
      <a class="navbar-brand w-5 mx-2" style="font-weight:100;" href="#"><b style="font-weight:500;">A</b>asa</a>
      <div class="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNav">
          <ul class="navbar-nav float-right mx-3">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">About</a>
            </li>
            <li class="nav-item mr-5" style="margin-right: 20px;">
              <a class="nav-link" href="#portofilo">My Portofilo</a>
            </li>
            <a href="https://github.com/ionxccd" class="text-white" target="_blank"><GithubIcon/></a>
          </ul>
      </div>
    </nav>
  </header>
</template>