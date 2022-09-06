<script>
    import axios from 'axios';
  
    export default {
        props: ['username', 'apiName'],
         data: function() {
           return {data: []}  
         },

         mounted() {
            let vm = this;
            let options = {
                method: 'GET',
                url: 'https://rapid-api5.p.rapidapi.com/getApi/' + vm.username + '/' + vm.apiName,
                headers: {
                    'X-RapidAPI-Key': '01f5630935msh2ae232b2b21e979p1bd426jsncdf93648d3da',
                    'X-RapidAPI-Host': 'rapid-api5.p.rapidapi.com'
                }
            };
            axios.request(options).then(response => 
            {  console.log(this.data = response.data.api) })
        }
      }
  </script>

<template>
        <div class="row g-0 d-flex align-items-center card mb-3" style="height: 220px;justify-content: center;">
            <div class="col-md-4">
            <img :src=data.apiIcon class="img-fluid rounded-start" alt="..." style="height:100px;width:auto">
            </div>
            <div class="col-md-8" style="height:fit-content">
            <div class="card-body text-black">
                <h5 class="card-title">{{data.apiName}}</h5>
                <p class="card-text">{{data.apiDesc}}</p>
                <a :href=data.url target="_blank" class="btn btn-primary">Visit API</a>
            </div>
            </div>
        </div>
</template>