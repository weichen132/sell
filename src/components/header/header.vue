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
			<div v-bind:if="seller.supports" class="support-count" @click="showDetial">
				<span class="count">{{seller.supports.length}}个</span>
				<i class="icon-thumb_up"></i>
			</div>
		</div>
		<div class="bulletin-wrapper">
			<span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
			<i class="icon-thumb_up" @click="showDetial"></i>
		</div>
		<div class="background">
			<img v-bind:src="seller.avatar" alt="" width="100%" height="100%">
		</div>
		<div v-show="detialShow" class="detial" transition="fade">
			<div class="detial-wrapper clearfix">
				<div class="detial-main">
					<h1 class="name">{{seller.name}}</h1>
					<div class="star-wapper">
						<star :size="48"	:score="seller.score"></star>
					</div>
					<div class="title">
						<div class="line"></div>
						<div class="text">优惠信息</div>
						<div class="line"></div>
					</div>
					<ul v-if="seller.supports" class="supports">
						<li class="supports-item" v-for="item in seller.supports">
							<span class="icon" :class="classMap[seller.supports[$index].type]"></span>
							<span class="text">{{seller.supports[$index].description}}</span>
						</li>
					</ul>
					<div class="title">
						<div class="line"></div>
						<div class="text">商家公告</div>
						<div class="line"></div>
					</div>
					<div class="bulletin">
						<p class="content">{{seller.bulletin}}</p>
					</div>
				</div>
			</div>
			<div class="detial-close" @click="hideDetial">
				<i class="icon-remove_circle_outline"></i>
			</div>
		</div>
	</div>
</template>

<script type="type/ecmascript-6">
	import star from 'components/star/star';

	export default {
		props: {
			seller: {
				type: Object
			}
		},
		data() {
			return{
				detialShow:false
			}
		},
		methods: {
			showDetial() {
				this.detialShow=true
			},
			hideDetial() {
				this.detialShow=false
			}
		},
		created() {
			this.classMap=['decrease','discount','special','invoice','guarantee']
		},
		components:{star}

	};
</script>

<style lang="stylus">
@import "../../common/stylus/mixin";


	.header
		position relative
		color: #fff
		background:rgba(7,17,27,0.5)
		overflow hidden
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
				.icon-thumb_up
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
				margin-top 8px
				width 22px
				height 12px
				bg-image('bulletin')
				background-size 22px 12px
				background-repeat no-repeat	
			.bulletin-text
				vertical-align top
				font-size 10px
				margin 0 4px
			.icon-thumb_up
				position absolute
				right 12px
				font-size 10px
				top 8px
		.background
			position absolute
			width 100%
			height 100%
			top 0
			left 0
			z-index -1
			filter blur(10px)
		.detial
			position fixed
			top 0
			left 0
			width 100%
			height 100%
			overflow auto
			z-index 100
			transition all 0.5s
			&.fade-transition
				opacity 1
				background rgba(7,17,27,0.8)
				backdrop blur(10px)
			&.fade-enter, &.fade-leave
				opacity 0
				background rgba(7,17,27,0)
			.detial-wrapper
				min-height 100%
				width 100%
				.detial-main
					.name
						font-size 16px
						line-height 16px
						font-weight 700
						text-align center
					margin-top 64px
					padding-bottom 64px
					.star-wapper
						margin-top 18px
						padding 2px 0px
						text-align center
					.title
						display flex
						width 80%
						margin 28px auto 24px auto
						.line
							flex 1
							position relative
							top -6px
							border-bottom  1px solid rgba(255,255,255,0.2)
						.text
							padding 0 12px
							font-weight 700
					.supports
						width 80%
						margin 0 auto
						.supports-item
							padding 0 12px
							margin-bottom  12px
							font-size 0px
							&.last-child 
								margin-bottom 0px
							.icon
								display inline-block
								width 16px
								height 16px
								margin-right 6px
								background-size 16px 16px
								vertical-align top
								background-repeat no-repeat
								&.decrease
										bg-image('decrease_2')
								&.discount
										bg-image('discount_2')
								&.guarantee
										bg-image('guarantee_2')
								&.invoice
										bg-image('invoice_2')
								&.special
										bg-image('special_2')
							.text
								display inline-block
								font-size 12px
								font-weight 200
								color rgb(255,255,255)
								line-height 16px
					.bulletin
						width 80%
						margin 0 auto
						.content
							padding 0px 12px
							font-size 12px
							line-height 24px
							font-weight 200
							color rgb(255,255,255) 
			.detial-close
				position relative
				width 32px
				height 32px
				margin -64px auto 0 auto
				clear both
				font-size 32px
</style>