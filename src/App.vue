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
  data: function() {
    return {
      seller: {},
      goods: {},
      // url : 'http://127.0.0.1/vue/vue-shap/data.php'
      url : 'http://localhost:8080/vue/elm/data.php'
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData: function() {
      // this.loading = true;
      this.$http.jsonp(this.url).then(function (data) {
        this.seller = data.body.seller;
        this.goods = data.body.goods;
        // console.log(this.goods);
      }, function (response) {
        console.log(response);
      })
    }
  }

}
</script>

<style>

</style>
