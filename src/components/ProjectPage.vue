  <template>
    <div class="row col-xs-1 text-center" style="justify:center">
      <div class="col-md">
        <AppPreview appData="com.ionxccd.finalFinincal"></AppPreview>
      </div>
      <div class="col-md">
        <AppPreview appData="com.ionxccd.PocketNotes"></AppPreview>
      </div>
    </div>
    <div class="row col-xs-1 text-center" style="justify:center">
      <div class="col-md">
        <ApiPreview username="ionxccd" apiName="open-library2"></ApiPreview>
      </div>
      <div class="col-md">
        <ApiPreview username="ionxccd" apiName="today-in-history"></ApiPreview>
      </div>
    </div>
  </template>

<script setup>
  import AppPreview from './ProjectViews/AppPreview.vue';
  import ApiPreview from './ProjectViews/ApiPreview.vue';
</script>