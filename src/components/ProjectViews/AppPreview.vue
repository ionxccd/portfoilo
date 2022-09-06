<script>
    import axios from 'axios';
  
    export default {
        props: ['appData'],
         data: function() {
           return {data: []}  
         },

         mounted() {
            let vm = this;
            let options = {
              method: 'GET',
              url: 'https://google-playstore-api.p.rapidapi.com/getApp/' + vm.appData,
              headers: {
                'X-RapidAPI-Key': '01f5630935msh2ae232b2b21e979p1bd426jsncdf93648d3da',
                'X-RapidAPI-Host': 'google-playstore-api.p.rapidapi.com'
              }
            };
            axios.request(options).then(response => 
            {  this.data = response.data.app })
        }
      }
  </script>

<template>
        <div class="row g-0 d-flex align-items-center card mb-3" style="height: 220px;">
            <div class="col-md-4">
            <img :src=data.appIcon class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8" style="height:fit-content">
            <div class="card-body text-black">
                <h5 class="card-title">{{data.appName}}</h5>
                <p class="card-text">{{data.appAbout}}</p>
                <p class="card-text">{{data.appDownloads}} Downloads</p>
                <div class="row mx-auto mb-2" style="width:130px;">
                    <div class="col-md">
                        <img :src=data.appRatingIcon alt="App Rating" class="mb-2"/>
                    </div>
                    <div class="col-md">
                        <p class="card-text">{{data.appRating}}</p>
                    </div>
                </div>
                <a :href=data.url target="_blank" class="btn btn-primary">Visit App</a>
            </div>
            </div>
        </div>
</template>