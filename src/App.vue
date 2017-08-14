<template>
  <div id="app">
    <vheader></vheader>
    <vnav></vnav>
	<router-view></router-view>
  </div>
</template>

<script>
import header from './components/header/header.vue'
import nav from './components/nav/nav.vue'
export default {
  components: {
    vheader: header,
    vnav: nav
  }

}
</script>

<style>

</style>
