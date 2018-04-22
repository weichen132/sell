<template>
  <div>
  	<v-header v-bind:seller="seller"></v-header>
  	<div class="tab border-1px">
  	  <div class="tab-item">
          <a v-link="{path:'/goods'}">商品</a>
        </div>
        <div class="tab-item">
          <a v-link="{path:'/ratings'}">评论</a>
        </div>
        <div class="tab-item">
          <a v-link="{path:'/seller'}">商家</a>
        </div>
  	</div>
   	<router-view></router-view>
   </div>
    <!--   <div id="app">
        <div class="content">
      <router-link to="/goods">商品</router-link>
      <router-link to="/ratings">评论</router-link>
      <router-link to="/seller">商家</router-link>
        </div>
        <router-view></router-view>
    </div> -->
</template>

<script type="ecmascript-6">
	import header from "./components/header/header";

  const ERROR_OK = 0;

	export default{
		data() {
			return {
        seller: {}
      };
		},
    created() {
      this.$http.get('api/seller').then((response) => {
        var response=response.body;
        console.log(response)
        if(response.errno===ERROR_OK){
            this.seller=response.data;
            console.log(response.data);
        }
      })
    },
		components:{'v-header':header}
	};
</script>

<style lang="stylus">
 @import "./common/stylus/mixin.styl"
	.tab
		display:flex
		height:40px
		width:100%
		line-height:40px
		border-1px(rgb(7,17,27,0.1))
		.tab-item
			flex:1
			text-align:center
			& > a
				display:block
				font-size:14px
				color:rgb(77,85,93)
      .active
       color red
</style>
