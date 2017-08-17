<template>
	<div class="header">
		<div class="loading" v-if="loading">
			Loading...
		</div>
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" width="64" height="64" alt="">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}
        </div>
        <div v-if="seller.supports" class="supports">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div v-if="seller.supports" class="supports-count" @click="showDetail">
        <span class="count">{{seller.supports.length}}个 <i class="el-icon-arrow-right"></i></span>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="showDetail">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{seller.bulletin}}</span>
      <span class="bulletin-title">></span>
    </div>
    <div class="header-background">
      <img :src="seller.avatar" width="100%" height="100%" alt="">
    </div>

    <transition name="fade">
      <div class="detail" v-show="detailShow">
        <div class="detail-wrapper clearfix">
          <div class="detail-main">
            <h1>{{seller.name}}</h1>
            <div class="star-wrapper">
              <star :size="48" :score="seller.score"></star>
            </div>
          </div>
          <div class="title">
            <div class="line"></div>
            <div class="text">优惠详情</div>
            <div class="line"></div>
          </div>
        </div>
        <div @click="hideDetail" class="detail-close">x</div>
      </div>
    </transition>
	</div>
</template>

<script type="text/ecmascript-6">
import star from 'components/star/star';

  export default {
    props: [
      'seller'
    ],
    // 页面加载完成
    created() {
      this.loading = false;
      this.classMap = [];

    },
    // 声明变量
    data() {
      return {
        loading: true,
        detailShow: false
      }
    },
    // 定义方法
    methods: {
      showDetail() {
        this.detailShow = true;
      },
      hideDetail() {
        this.detailShow = false;
      }
    },
    // 注册组件
    components: {
      star
    }
  }

</script>

<style>
.header{
  color: #fff;
  position: relative;
  background: rgba(7, 17, 27, 0.3);
  overflow: hidden;
}
.content-wrapper{
  padding: 24px 12px 18px 24px;
  position: relative;
}
.content-wrapper .avatar,.content-wrapper .content{
  display: inline-block;
  margin-left: 16px;
  font-size: 14px;
}
.content-wrapper .avatar{
  vertical-align: top;
}
.content-wrapper .avatar img{
    border-radius: 2px;
}
.content-wrapper .content .title{
  margin: 2px 0 8px 0;
}
.content-wrapper .content .title .brand{
  display: inline-block;
  width: 30px;
  height: 18px;
  background-image: url('./img/brand@2x.png');
  background-size: 30px 18px;
  background-repeat: no-repeat;
  vertical-align: top;
}
.content-wrapper .content .title .name{
  margin-left: 6px;
  font-size: 16px;
  line-height: 18px;
  font-weight: bold;
}
.content-wrapper .content .description{
  margin-bottom: 10px;
  line-height: 12px;
  font-size: 12px;
}
.content-wrapper .content .supports .icon{
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-right: 4px;
  background-size: 12px;
  background-repeat: no-repeat;
  background-image: url('./img/decrease_1@2x.png');
}
.content-wrapper .supports-count{
  position: absolute;
  right: 12px;
  bottom: 18px;
  padding: 0 8px;
  height: 24px;
  line-height: 24px;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.2);
  text-align: center;
  font-size: 10px;
}

.bulletin-wrapper{
  height: 28px;
  line-height: 28px;
  padding: 0 22px 0 12px;
  background: rgba(7, 17, 28, 0.2);

  /*文字折行加显示省略号*/
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /*文字折行加显示省略号*/
}
.bulletin-wrapper .bulletin-title{
  display: inline-block;
  vertical-align: top;
  margin-top: 8px;
  width: 22px;
  height: 12px;
  background-image: url('./img/bulletin@2x.png');
  background-repeat: no-repeat;
}
.bulletin-wrapper .bulletin-text{
  font-size: 10px;
  margin: 0 4px;
  vertical-align: top;
}

.header .header-background{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  filter: blur(10px);
}

.detail{
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background: rgba(7, 17, 27, .8);
}
.detail .detail-wrapper{
  width: 100%;
  min-height: 100%;
}
.detail .detail-wrapper .detail-main{
  margin-top: 64px;
  /*padding-bottom: 64px;*/
}
.detail .detail-wrapper .detail-main h1{
  font-size: 18px;
  font-weight: 700;
  text-align: center;
}
.detail .detail-wrapper .detail-main .star-wrapper{
  margin-top: 18px;
  padding: 2px 0;
  text-align: center;
}
.detail .detail-close{
  position: relative;
  width: 32px;
  height: 32px;
  margin: -64px auto 0 auto;
  clear: both;
  font-size: 32px;
}
.detail .detail-wrapper .title{
  display: flex;
  width: 80%;
  margin: 28px auto 24px auto;
}
.detail .detail-wrapper .title .line{
  flex: 1;
  position: relative;
  top: -6px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}
.detail .detail-wrapper .title .text{
  padding: 0 12px;
  font-weight: 700;
  font-size: 14px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}
</style>
