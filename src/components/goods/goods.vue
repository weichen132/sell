<template>
	<div class="foods">
		<div class="menu-wrapper">
			<ul>
				<li v-for="item in goods" class="menu-item">
					<span class="text border-1px">
						<span v-if="item.type>0" class="icon"  :class="classMap[item.type]"></span>{{item.name}}
					</span>
				</li>
			</ul>
		</div>
		<div class="foods-wrapper">

		</div>
	</div>
</template>

<script type="ecmascript-6">

const ERROR_OK = 0;

	export default{
		props: {
			seller: {
				type: Object
			}
		},
		data() {
			return {
				goods: []
			}
		},
		created() {
			this.classMap=['decrease','discount','special','invoice','guarantee'];

			this.$http.get('api/goods').then((response) => {
				var response = response.body;
				if(response.errno===ERROR_OK){
					this.goods=response.data;
					console.log(this.goods);
				}
			})
		}
	};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixin";

	.foods
		display flex
		position absolute
		width 100%
		top 174px
		bottom 46px
		overflow hidden
		.menu-wrapper
			flex 0 0 80px
			width 80px
			background-color #f3f5f7
			.menu-item
				display table
				height 54px
				width 56px
				padding  0 12px
				// color rgb(240,20,20)
				line-height 14px
				.icon
					display inline-block
					vertical-align: top
					margin-right 2px
					background-size 12px 12px
					background-repeat no-repeat
					width 12px
					height 12px
					&.decrease
							bg-image('decrease_3')
					&.discount
							bg-image('discount_3')
					&.guarantee
							bg-image('guarantee_3')
					&.invoice
							bg-image('invoice_3')
					&.special
							bg-image('special_3')
				.text
					font-size 12px
					display table-cell
					vertical-align middle 
					border-1px(rgba(7,17,27,0.1))
					width 56px
		.foods-wrapper
			flex 1
</style>