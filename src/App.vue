<template>
  <div id="app">
    <vheader :seller="seller"></vheader>
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
  },
  data () {
    return {
      'seller': {}
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      var url = 'http://127.0.0.1/vue/vue-shap/data.php';
      // var url = 'http://localhost:8080/vue/elm/data.php';
      // this.loading = true;
      this.$http.jsonp(url).then(function (data) {
        this.seller = data.body.seller;
      }, function (response) {
        console.log(response);
      })
    }
  }

}
</script>

<style>

</style>
