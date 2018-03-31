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
					<span class="icon"></span>
					<span class="text">{{seller.supports[0].description}}</span>
				</div>
			</div>
		</div>
		<div class="bulletin-wrapper"></div>
	</div>
</template>

<script type="type/ecmascript-6">
	export default {
		props: {
			seller: {
				type: Object
			}
		}
	};
</script>

<style lang="stylus">
@import "../../common/stylus/mixin";
	.header
		color: #fff
		background:#000
		.content-wrapper
			padding:24px 12px 18px 24px
			font-size: 0px
			.avatar
				display:inline-block
			.content
				display:inline-block
				font-size: 14px
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
					.text
						font-size: 10px
						font-weight: 200

						
</style>