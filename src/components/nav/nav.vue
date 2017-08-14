<template>
	<div class="">
		<div class="tab">
			<div class="tab-item">
				<router-link :to="{ name: 'Goods', params: {} }">点餐</router-link>
			</div>
			<div class="tab-item">
				<router-link :to="{ name: 'Seller', params: {} }">商家</router-link>
			</div>
			<div class="tab-item">
				<router-link :to="{ name: 'Rating', params: {} }">评价</router-link>
			</div>
		</div>
		<div class="border-btm"></div>
	</div>

</template>

<script>
  export default {
    components: {
    }
  }
</script>

<style>
.tab{
	display: flex;
	width: 100%;
	height: 40px;
	line-height: 40px;
}
.border-btm{
    height:1px;
    background:#ccc;
    -webkit-transform: scaleY(0.5);
    -webkit-transform-origin:0 0;
    overflow: hidden;
}
.tab .tab-item{
	flex: 1;
	text-align: center;
}
.tab .tab-item a{
	display: block;
	font-size: 14px;
	color: rgb(77, 85 ,93);
}
.tab .tab-item a.router-link-active{
	color: rgb(240, 20, 20);
}
</style>
