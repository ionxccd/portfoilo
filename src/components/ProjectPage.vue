  <script>
  import axios from 'axios';

  export default {
       name : "messagespainel",
       inheritAttrs:false,
       data: function() {
         return {appData1: [{
          "appName": "Financial Timeline",
          "appIcon": "https://play-lh.googleusercontent.com/1vZt2dytIMtfc8HNsPwJ8OHdC7lCM2UaTgKHd4U00aSBwXjAsRGMO01HzkKKAbuziug=w240-h480",
          "appAbout": "A personal finance that tracks income and expenses.",
          "appRating": "Everyone",
          "appDownloads": "10+",
          "appRatingIcon": "https://play-lh.googleusercontent.com/IciOnDFecb5Xt50Q2jlcNC0LPI7LEGxNojroo-s3AozcyS-vDCwtq4fn7u3wZmRna8OewG9PBrWC-i7i=w48-h16",
          "url": "https://play.google.com/store/apps/details?id=com.ionxccd.finalFinincal"
        }],
        appData2:[{
          "appName": "Pocket Notes",
          "appIcon": "https://play-lh.googleusercontent.com/8dyV5MYkndNsgzjmS4uMsha8u25ZUHbM_O4nYJV4HyklU2lglWgjLTCMAJcAGXkSxAl0=w240-h480",
          "appAbout": "A simple task app for recording notes",
          "appRating": "Everyone",
          "appDownloads": "1+",
          "appRatingIcon": "https://play-lh.googleusercontent.com/IciOnDFecb5Xt50Q2jlcNC0LPI7LEGxNojroo-s3AozcyS-vDCwtq4fn7u3wZmRna8OewG9PBrWC-i7i=w48-h16",
          "url": "https://play.google.com/store/apps/details?id=com.ionxccd.PocketNotes"
        }]}  
       },
       methods:{
        getAppD: function (appID){
          let options = {
            method: 'GET',
            url: 'https://google-playstore-api.p.rapidapi.com/getApp/' + appID,
            headers: {
              'X-RapidAPI-Key': '01f5630935msh2ae232b2b21e979p1bd426jsncdf93648d3da',
              'X-RapidAPI-Host': 'google-playstore-api.p.rapidapi.com'
            }
          };
          axios.request(options).then(response => 
          {  this.messages = response })
          console.log(this.messages.data)
          return this.messages.data;
        }
       },
      //  mounted() {
      //   axios.request(options).then(response => 
      //   {  this.messages = response })
      //   // console.log(runrun())
      // }
    }
</script>
  
  
  <template>
    <div class="row col-xs-1 text-center" style="justify:center">
      <div class="col-md">
        <AppPreview :appData=appData1></AppPreview>
      </div>
      <div class="col-md">
        <AppPreview :appData=appData2></AppPreview>
      </div>
    </div>
          <!-- !Embed is a bit laggy-->
        <!-- <div class='row justify-content-around w-200'>
          <AppPreview />
        div class="col-4">
          <embed src="https://bit.ly/3plwgQh" class="rounded" style="width:500px; height: 300px;"/>
        </div>
        <div class="col-4">
          <embed src="https://play.google.com/store/apps/details?id=com.ionxccd.PocketNotes" 
          style="width:500px; height: 300px;" class="rounded"/>
        </div>
      </div>
      <div class='row justify-content-around w-200 mb-20'>
        <div class="col-4">
          <embed src="https://rapidapi.com/ionxccd/api/open-library2" class="rounded" style="width:500px; height: 300px;"/>
        </div>
        <div class="col-4">
          <embed src="https://rapidapi.com/ionxccd/api/today-in-history/" 
          style="width:500px; height: 300px;" class="rounded"/>
        </div>
      </div> -->
  </template>

<script setup>
  import AppPreview from './AppPreview.vue';
</script>