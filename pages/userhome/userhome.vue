<template>
	<view>
		<view class="top-bar">
			<view class="top-bar-left" @tap="backOneStep">
				<image src="../../static/images/common/back.png" class="back-img"></image>
			</view>
			<view class="top-bar-right">
				<view class="more-img">
					<image src="../../static/images/userhome/more.png"></image>
				</view>
			</view>
		</view>
		<view class="bg">
			<view class="bg-white"></view>
			<image class="bg-img" src="../../static/images/index/2.jpg" mode="aspectFill"></image>
		</view>
		<view class="main">
			<view class="user-header">
				<view class="sex">
					<image src="../../static/images/userhome/women.png"></image>
				</view>
				<image src="../../static/images/index/2.jpg" mode="aspectFill" class="user-img"></image>
			</view>
			<view class="user-info">
				<view class="name">{{user.name}}</view>
				<view class="nick">昵称: {{user.nick}}</view>
				<view class="intr">{{user.introduction}}</view>
			</view>
		</view>
		<view class="bottom-bar">
			<view class="bottom-btn">加为好友</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user: {
					name: '秋风',
					nick: '大表妹',
					introduction: '乾坤未定，你我都是黑马。青春时光，做美好自己。乾坤未定，你我都是黑马。青春时光，做美好自己。'
				}
			}
		},
		methods: {
			backOneStep: function() {
				uni.navigateBack({
					delta: 1
				})
			},
		}
	}
</script>

<style lang='scss'>
	@import '../../commons/css/mycss.scss';

	.bg {
		position: fixed;
		z-index: -2;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		.bg-white {
			width: 100%;
			height: 100%;
		}

		.bg-img {
			opacity: 0.4;
			position: absolute;
			left: -10px;
			top: -10px;
			width: 110%;
			height: 110%;
			filter: blur(16px);
		}
	}

	.main {
		//图片居中
		text-align: center;
		padding-top: 148rpx;

		.user-header {
			position: relative;
			margin: 0 auto;
			width: 412rpx;
			height: 412rpx;

			.sex {
				position: absolute;
				z-index: 10;
				bottom: 12rpx;
				right: 12rpx;

				image {
					width: 64rpx;
					height: 64rpx;
					border-radius: $uni-border-radius-circle;
				}
			}

			.user-img {
				width: 400rpx;
				height: 400rpx;
				border-radius: 48rpx;
				border: 6rpx solid rgba(255, 255, 255, 1);
			}
		}

		.user-info {
			padding-top: 42rpx;
			color: $uni-text-color;

			.name {
				font-size: 52rpx;
				line-height: 74rpx;
			}

			.nick {
				font-size: $uni-font-size-base;
				line-height: 40rpx;
			}

			.intr {
				padding: 20rpx 100rpx;
				font-size: $uni-font-size-base;
				font-weight: 300;
				line-height: 48rpx;
			}
		}
	}

	.bottom-bar {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 104rpx;
		.bottom-btn{
			position: absolute;
            left: 0;
			top: 0;
			bottom: 20rpx;
			right: 0;
			margin: auto;
			text-align: center;
			line-height: 80rpx;
			width: 684rpx;
			height: 80rpx;
			background: $uni-color-primary;
			border-radius: $uni-border-radius-sm;
			color: $uni-text-color;
		}
	}
</style>
