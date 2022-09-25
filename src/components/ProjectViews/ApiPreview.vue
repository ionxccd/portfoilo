<script>
    import axios from 'axios';
  
    export default {
        props: ['username', 'apiName'],
         data: function() {
           return {data: [], isLoaded:false}  
         },

         mounted() {
            let vm = this;
            let options = {
                method: 'GET',
                url: 'https://rapid-api5.p.rapidapi.com/getApi/' + vm.username + '/' + vm.apiName,
                headers: {
                    'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
                    'X-RapidAPI-Host': 'rapid-api5.p.rapidapi.com'
                }
            };
            axios.request(options).then(response => 
            {  this.data = response.data.api, this.isLoaded=true })
        }
      }
  </script> 

  <style>
    #aligns{
        display: flex;
  justify-content: center;
  align-items: center;
    }
  </style>

<template>
        <div class="row g-0 d-flex align-items-center card mb-3" style="max-height: 320px;">
            <div class="col-md-4">
                <div v-if="isLoaded">
                    <img :src=data.apiIcon class="img-fluid rounded-start" alt="..." style="align-items: center;height:150px;width:auto;margin-top: 15%;">
                </div>
                <div v-else="isLoaded">
                    <svg style="align-items: center;height:150px;width:auto;margin-top: 15%;">
                    <animate attributeName="opacity"
                        values="0;1;0" dur="1s"
                        repeatCount="indefinite"/>
                    <circle cx=50% cy=50% r="70" fill="lightgrey" style="justify-content:center" />
                </svg>
                </div>
            </div>
            <div class="col-md-8">
            <div class="card-body text-black">
                <p class="card-text">&nbsp;</p>
                <h5 class="card-title" v-if="isLoaded">{{data.apiName}}</h5>
                <h5 class="card-title" v-else="isLoaded">
                    <svg xmlns="http://www.w3.org/2000/svg" width="201" height="20" viewBox="0 0 201 20" fill="none">
                        <animate attributeName="opacity"
                        values="0;1;0" dur="1s"
                        repeatCount="indefinite"/>
                    <line x1="10.9981" y1="10" x2="190.998" y2="10" stroke="lightgrey" stroke-width="20" stroke-linecap="round"/>
                    </svg>
                </h5>
                <p class="card-text" v-if="isLoaded">{{data.apiDesc}}</p>
                <p clas="card-text" v-else="isLoaded">
                    <svg xmlns="http://www.w3.org/2000/svg" width="321" height="20" viewBox="0 0 321 20" fill="none">
                        <animate attributeName="opacity"
                        values="0;1;0" dur="1s"
                        repeatCount="indefinite"/>
                    <line x1="10.9981" y1="10" x2="310.998" y2="10" stroke="lightgrey" stroke-width="20" stroke-linecap="round"/>
                    </svg>
                </p>
                <a :href=data.url target="_blank" class="btn btn-primary" v-if="isLoaded">Visit API</a>
                <div v-else="isLoaded">
                    <svg viewBox="0 0 80 40" width="80" height="40">
                        <animate attributeName="opacity"
                        values="0;1;0" dur="1s"
                        repeatCount="indefinite"/>
                        <rect fill="lightgrey" width="80" height="40"></rect>
                    </svg> 
                </div>
            </div>
            <p class="card-text">&nbsp;</p>

            </div>
        </div>
        
</template>