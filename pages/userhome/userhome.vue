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
		<view class="add-msg" :style="{height:deviceHeight+'px'}">
			  <view class="name">{{user.name}}</view>
			  <textarea :value = 'myname+"请求加为好友~"' maxlength="150" class="add-content"></textarea>
		</view>
		<view class="add-btn">
			<view class="cancel">取消</view>
			<view class="send">发送</view>
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
					introduction: '乾坤未定，你我都是黑马。青春时光，做美好自己。乾坤未定，你我都是黑马。青春时光，做美好自己。',					
				},
				myname: 'root',  //用户姓名
				deviceHeight:'',
			}
		},
		onShow:function(){
			console.log('onShow我执行了')
		},
		onReady:function(){
			console.log('我执行了')
             this.getDeviceInfo()
		},
		methods: {
			backOneStep: function() {
				uni.navigateBack({
					delta: 1
				})
			},
			//获取设备的高度
			getDeviceInfo:function(){
				const query = uni.createSelectorQuery().in(this)
				query.select('.bg').boundingClientRect(data => {
				  console.log("得到布局位置信息" + JSON.stringify(data))
				  console.log("节点离页面顶部的距离为" + data.top)
				  this.deviceHeight = data.height-186; //372rpx/2 = 186px
				}).exec()
			}
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
				z-index: 15; //要比.user-img高
				bottom: 12rpx;
				right: 12rpx;

				image {
					width: 64rpx;
					height: 64rpx;
					border-radius: $uni-border-radius-circle;
				}
			}

			.user-img {
				z-index: 10;
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
		box-sizing: border-box;
		padding: 12rpx $uni-spacing-col-base;
		.bottom-btn{
			text-align: center;
			line-height: 80rpx;
			width: 684rpx;
			height: 80rpx;
			background: $uni-color-primary;
			border-radius: $uni-border-radius-sm;
			color: $uni-text-color;
		}
	}
	.add-msg{
		position: fixed;
		bottom: 0;
		width: 100%;
		//height: 80%;
		box-sizing: border-box;
		padding: 0 60rpx;
		background: rgb(255,255,255);
		border-radius: 40rpx 40rpx 0rpx 0rpx;
		.name{
			padding: 198rpx 0 40rpx;
			font-size: 52rpx;
			color: $uni-text-color;
			line-height: 74rpx;
		}
		.add-content{
			padding: 22rpx 22rpx;
			box-sizing: border-box;
			width: 100%;
			height: 360rpx;
			background: $uni-bg-color-grey;
			border-radius: $uni-border-radius-base;
			font-size: $uni-font-size-lg;
			color: $uni-text-color;
			line-height: 44rpx;
		}
	}
	.add-btn{
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 104rpx;
		box-sizing: border-box;
		padding: 12rpx $uni-spacing-col-base;
		z-index: 100;
		height: 104rpx;
		display: flex;
		.cancel{
			width: 172rpx;
			text-align: center;
			line-height: 80rpx;
			height: 80rpx;
			background: $uni-bg-color-hover;
			border-radius: $uni-border-radius-sm;
			color: $uni-text-color;
		}
		.send{
			margin-left: $uni-spacing-col-base;
			flex: auto;
			text-align: center;
			line-height: 80rpx;
			height: 80rpx;
			background: $uni-color-primary;
			border-radius: $uni-border-radius-sm;
			color: $uni-text-color;
		}
	}
</style>
