<template>
	<div class="header">
		<div class="content-wrapper">
			<div class="avatar">
				<img width="64" height="64" v-bind:src="seller.avatar" alt="">
			</div>
			<div class="content">
				<div class="title">
					<span class="brand"></span>
					<span class="name">{{seller.name}}</span>
				</div>
				<div class="description">
					<span>{{seller.description}}/{{seller.deliveryTime}}分钟送达</span>
				</div>
				<div v-if="seller.supports" class="supports">
					<span class="icon" v-bind:class="classMap[seller.supports[0].type]"></span>
					<span class="text">{{seller.supports[0].description}}</span>
				</div>
			
			
			
			
			
			
			
			
			</div>
			<div v-bind:if="seller.supports" class="support-count">
				<span class="count">{{seller.supports.length}}个</span>
				<i class="icon-keyboard_arrow_right"></i>
			</div>
		</div>
		<div class="bulletin-wrapper">
			<span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
			<i class="icon-keyboard_arrow_right"></i>
		</div>
	</div>
</template>

<script type="type/ecmascript-6">
	export default {
		props: {
			seller: {
				type: Object
			}
		},
		created() {
			this.classMap=['decrease','discount','special','invoice','guarantee']
		}
	};
</script>

<style lang="stylus">
@import "../../common/stylus/mixin";


	.header
		color: #fff
		background:#999
		.content-wrapper
			padding:24px 12px 18px 24px
			font-size: 0px
			position relative
			.avatar
				display:inline-block
				vertical-align top
				border-radius 2px
			.content
				display:inline-block
				margin-left: 16px
				.title
					margin:2px 0px 8px 0px
					.brand
						display:inline-block
						vertical-align: top
						bg-image('brand')
						width: 30px
						height: 18px
						background-size:30px 18px
						background-repeat:no-repeat
					.name
						font-size: 16px
						line-height: 16px
						font-weight: bold
						margin-left: 6px
				.description
					& span
						display:inline-block
						font-size:12px
						font-weight: 200
						line-height:12px
						margin: 0px 0 10px 0
				.supports
					margin: 0 0 4px 0
					.icon
						display inline-block
						vertical-align: top
						margin-right 4px
						background-size 12px 12px
						background-repeat no-repeat
						width 12px
						height 12px
						&.decrease
								bg-image('decrease_1')
						&.discount
								bg-image('discount_1')
						&.guarantee
								bg-image('guarantee_1')
						&.invoice
								bg-image('invoice_1')
						&.special
								bg-image('special_1')
					.text
						line-height 12px
						font-size: 10px
						font-weight: 200
			.support-count
				position absolute
				right 12px
				bottom 14px
				height 24px
				line-height 24px
				padding 0px 8px
				background-color rgba(0,0,0,0.2)
				border-radius 14px
				.count
					font-size 10px
					margin-right 2px
					vertical-align top
				.icon-keyboard_arrow_right
					font-size 10px
					line-height 24px
		.bulletin-wrapper
			position relative
			height 28px
			line-height 28px
			padding 0 22px 0 12px
			white-space nowrap
			text-overflow ellipsis
			overflow hidden	
			background-color rgba(7,17,27,0.2)
			.bulletin-title
				display inline-block
				vertical-align top
				margin-top 7px
				width 22px
				height 12px
				bg-image('bulletin')
				background-size 22px 12px
				background-repeat no-repeat	
			.bulletin-text
				vertical-align top
				font-size 10px
				margin 0 4px
			.icon-keyboard_arrow_right
				position absolute
				right 12px
				font-size 10px
				top 8px
				
</style>