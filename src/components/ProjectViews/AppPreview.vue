<script>
    import axios from 'axios';
  
    export default {
        props: ['appData'],
         data: function() {
           return {data: [], isLoaded:false}  
         },

         mounted() {
            let vm = this;
            let options = {
              method: 'GET',
              url: 'https://google-playstore-api.p.rapidapi.com/getApp/' + vm.appData,
              headers: {
                'X-RapidAPI-Key':process.env.VITE_APP_KEY,
                'X-RapidAPI-Host': 'google-playstore-api.p.rapidapi.com'
              }
            };
            axios.request(options).then(response => 
            {  this.data = response.data.app, this.isLoaded=true  })
        }
      }
  </script>

<template>
        <div class="row g-0 d-flex align-items-center card mb-3" style="max-height: 320px;">
            <div class="col-md-4">
              <div v-if="isLoaded">
                <img :src=data.appIcon class="img-fluid rounded-start" alt="...">
              </div>
              <div v-else="isLoaded">
                <svg style="align-items: center;height:150px;width:auto;margin-top: 10%;">
                    <animate attributeName="opacity"
                        values="0;1;0" dur="1s"
                        repeatCount="indefinite"/>
                    <circle cx=50% cy=50% r="70" fill="lightgrey" style="align-items: center;"/>
                </svg>
              </div>
            </div>
            <div class="col-md-8" style="height:fit-content">
            <div class="card-body text-black">
              <h5 class="card-title" v-if="isLoaded">{{data.appName}}</h5>
              <h5 class="card-title" v-else="isLoaded">
                <svg xmlns="http://www.w3.org/2000/svg" width="201" height="20" viewBox="0 0 201 20" fill="none">
                        <animate attributeName="opacity"
                        values="0;1;0" dur="1s"
                        repeatCount="indefinite"/>
                    <line x1="10.9981" y1="10" x2="190.998" y2="10" stroke="lightgrey" stroke-width="20" stroke-linecap="round"/>
                    </svg>
              </h5>
                <p class="card-text" v-if="isLoaded">{{data.appAbout}}</p>
                <div v-else="isLoaded">
                <svg xmlns="http://www.w3.org/2000/svg" width="321" height="20" viewBox="0 0 321 20" fill="none">
                        <animate attributeName="opacity"
                        values="0;1;0" dur="1s"
                        repeatCount="indefinite"/>
                        <line x1="10.9981" y1="10" x2="310.998" y2="10" stroke="lightgrey" stroke-width="20" stroke-linecap="round"/>
                    </svg>
                    </div>
                  <p class="card-text" v-if="isLoaded">{{data.appDownloads}} Downloads</p>
                  <div v-else="isLoaded" style="margin-bottom:10px">
                    <svg xmlns="http://www.w3.org/2000/svg" width="101" height="20" viewBox="0 0 101 20" fill="none">
                      <animate attributeName="opacity"
                        values="0;1;0" dur="1s"
                        repeatCount="indefinite"/>
                      <line x1="10.9981" y1="10" x2="90.9981" y2="10" stroke="lightgrey" stroke-width="20" stroke-linecap="round"/>
                    </svg>
                  </div>
                <div class="row mx-auto mb-2" style="width:130px;" v-if="isLoaded">
                    <div class="col-md">
                        <img :src=data.appRatingIcon alt="App Rating" class="mb-2" style="justify-content: center;"/>
                    </div>
                    <div class="col-md">
                        <p class="card-text">{{data.appRating}}</p>
                    </div>
                </div>
                <div v-else="isLoaded">
                  <svg xmlns="http://www.w3.org/2000/svg" width="121" height="20" viewBox="0 0 121 20" fill="none" style="margin-bottom:10px">
                    <animate attributeName="opacity"
                        values="0;1;0" dur="1s"
                        repeatCount="indefinite"/>
                  <line x1="10.9981" y1="10" x2="110.998" y2="10" stroke="lightgrey" stroke-width="20" stroke-linecap="round"/>
                  </svg>
                </div>
                <a :href=data.url v-if="isLoaded" target="_blank" class="btn btn-primary">Visit App</a>
                <div v-else="isLoaded">
                    <svg viewBox="0 0 80 40" width="80" height="40">
                        <animate attributeName="opacity"
                        values="0;1;0" dur="1s"
                        repeatCount="indefinite"/>
                        <rect fill="lightgrey" width="80" height="40"></rect>
                    </svg> 
                </div>
            </div>
            </div>
        </div>
</template>
