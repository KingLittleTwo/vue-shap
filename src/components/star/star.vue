<template lang="html">
  <div class="star" :class="starType">
    <span v-for="item in itemClasses" :class="item" class="star-item"></span>
  </div>
</template>

<script>
export default {
  const STAR_LENGTH = 5;
  const STAR_ON = 'on';
  const STAR_OFF = 'off';
  const STAR_HALF = 'half';

  props:[
    'size',
    'score'
  ],
  // 计算属性
  computed:{
    starType(){
      return 'star-'+this.size;
    },
    itemClasses:() {
      let result = [];
      let score = math.floor(this.score * 2) / 2;
    }
  }
}
</script>

<style lang="css">
.star{
  font-size: 0;
}
.star .star-item{
  display: inline-block;
  background-repeat: no-repeat;
}

.star-24{
  width: 10px;
  height: 10px;
  background-size: 10px 10px;
}
.star-24 .on{
    background-image: url('./img/star24_on@2x.png');
}
.star-24 .off{
    background-image: url('./img/star24_off@2x.png');
}
.star-24 .half{
    background-image: url('./img/star24_half@2x.png');
}
.star-36{
  width: 15px;
  height: 15px;
  margin-right: 6px;
  background-size: 15px 15px;
}
.star-36 .on{
    background-image: url('./img/star36_on@2x.png');
}
.star-36 .off{
    background-image: url('./img/star36_off@2x.png');
}
.star-36 .half{
    background-image: url('./img/star36_half@2x.png');
}
.star-48{
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}
.star-48 .on{
    background-image: url('./img/star48_on@2x.png');
}
.star-48 .off{
    background-image: url('./img/star48_off@2x.png');
}
.star-48 .half{
    background-image: url('./img/star48_half@2x.png');
}
.star .star-item:last-child{
  margin-right: 0;
}
</style>
