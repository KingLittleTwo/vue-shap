<template>
	<div class="post">
		<div class="loading" v-if="loading">
			Loading...
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        'loading': false,
        'post': null
      }
    },
    created () {
      this.fetchData()
    },
    methods: {
      fetchData () {
        var url = 'http://127.0.0.1/vue/vue-shap/data.php'
        this.loading = true
        this.$http.jsonp(url).then(function (data) {
          var json = data.body
          this.data = this.evil('(' + json + ')')
        }, function (response) {
          console.log(response)
        })
      },
      // 替代eval
      evil (fn) {
        var Fn = Function // 一个变量指向Function，防止有些前端编译工具报错
        return new Fn('return ' + fn)()
      }
    }
  }

</script>

<style>

</style>
