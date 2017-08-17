<template>
  <div class="goods">
    <div class="menu-wrapper">
        <div class="menu-item" v-for="item in goods">
          <span><i  v-if="item.type != -1">*</i>{{ item.name }}</span>
        </div>
    </div>
    <div class="foods-wrapper">
      <div class="foods" v-for="food in goods">
        <h1 class="foods-title">{{ food.name }}</h1>
        <div class="foods-item" v-for="item in food.foods">
          <div class="foods-img">
            <img :src="item.icon" :alt="item.name">
          </div>
          <div class="foods-info">
            <h2>{{ item.name }}</h2>
            <p class="foods-desc">{{ item.description }}</p>
            <div class="">
              <span>月售{{ item.sellCount }}份</span>
              <span></span>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data: function() {
      return {
        goods : {},
        // url : 'http://127.0.0.1/vue/vue-shap/data.php'
        url : 'http://localhost:8080/vue/elm/data.php'
      }
    },
    created() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        this.$http.jsonp(this.url).then(function (data) {
          this.goods = data.body.goods;
          console.log(this.goods);
        }, function (response) {
          console.log(response);
        });
      }
    }

  }
</script>

<style>
.goods{
  display: flex;
  position: absolute;
  top: 177px;
  bottom: 46px;
  width: 100%;
  overflow: hidden;
}

.goods .menu-wrapper{
  flex: 0 0 80px;
  width: 80px;
  background: #f3f5f7;
}

.goods .menu-wrapper .menu-item{
  display: table;
  height: 54px;
  width: 56px;
  padding-left: 12px;
}
.goods .menu-wrapper .menu-item span{
  display: table-cell;
  font-size: 12px;
  color: rgb(240, 20, 20);
  font-weight: 200;
  line-height: 14px;
  vertical-align: middle;
  border-bottom: 1px solid #e4e4e4;
}
.goods .footer-wrapper{
  flex: 1;
}

</style>
