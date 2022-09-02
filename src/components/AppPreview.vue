<script>
    import axios from 'axios';
    import { onMounted, getCurrentInstance, ref, reactive } from "vue";
  
    export default {
        props: ['appData']
        //  name : "messagespainel",
        //  data: function() {
        //    return {messages: [{"appName":"sw"}]}  
        //  },
        //  props:["data"],
        //  setup(props){
        //         let options = {
        //             method: 'GET',
        //             url: 'https://google-playstore-api.p.rapidapi.com/getApp/' + props.data,
        //             headers: {
        //             'X-RapidAPI-Key': '01f5630935msh2ae232b2b21e979p1bd426jsncdf93648d3da',
        //             'X-RapidAPI-Host': 'google-playstore-api.p.rapidapi.com'
        //             }
        //     };
        //     let item = ref([{}]);
        //     axios.request(options).then(response => 
        //     {  {item = response.data.app;console.log(item)} })
        //     return {item};
        //  },
         
        //  methods:{
        //   getAppD: function (appID){
        //     let options = {
        //       method: 'GET',
        //       url: 'https://google-playstore-api.p.rapidapi.com/getApp/com.ionxccd.finalFinincal',
        //       headers: {
        //         'X-RapidAPI-Key': '01f5630935msh2ae232b2b21e979p1bd426jsncdf93648d3da',
        //         'X-RapidAPI-Host': 'google-playstore-api.p.rapidapi.com'
        //       }
        //     };
        //     axios.request(options).then(response => 
        //     {  this.messages = response.data })
        //     // console.log(this.messages.data)
        //     // return this.messages.data;
        //   }
        //  },

        //  mounted() {
        //   axios.request(options).then(response => 
        //   {  this.messages = response })
        //   // console.log(runrun())
        // }
      }
  </script>

<template>
    <div v-for="(item, index) in appData" :key="index" class="card mb-3" style="height: 220px;">
        <div class="row g-0 d-flex align-items-center">
            <div class="col-md-4">
            <img :src=item.appIcon class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8" style="height:fit-content">
            <div class="card-body text-black">
                <h5 class="card-title" v-once>{{item.appName}}</h5>
                <p class="card-text">{{item.appAbout}}</p>
                <p class="card-text">{{item.appDownloads}} Downloads</p>
                <div class="row mx-auto mb-2" style="width:130px;">
                    <div class="col-md">
                        <img :src=item.appRatingIcon alt="App Rating" class="mb-2"/>
                    </div>
                    <div class="col-md">
                        <p class="card-text">{{item.appRating}}</p>
                    </div>
                </div>
                <a :href=item.url target="_blank" class="btn btn-primary">Visit App</a>
            </div>
            </div>
        </div>
        </div>
</template>