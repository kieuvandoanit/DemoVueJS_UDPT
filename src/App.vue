<template>
  <div id="app">
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app{
    width: 1100px;
    margin: 0px auto;
  }
  .container{
    padding: 0;
  }
</style>