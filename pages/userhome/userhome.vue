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
			<view class="bg-white" :animation="animationData4"></view>
			<image class="bg-img" src="../../static/images/index/2.jpg" mode="aspectFill"></image>
		</view>
		<view class="main">
			<view class="user-header">
				<view class="sex" :animation="animationData3">
					<image src="../../static/images/userhome/women.png"></image>
				</view>
				<image src="../../static/images/index/2.jpg" mode="aspectFill" class="user-img" :animation="animationData2"></image>
			</view>
			<view class="user-info">
				<view class="name">{{user.name}}</view>
				<view class="nick">昵称: {{user.nick}}</view>
				<view class="intr">{{user.introduction}}</view>
			</view>
		</view>
		<view class="bottom-bar">
			<view class="bottom-btn btn" @tap="addFriendAnimation">加为好友</view>
		</view>
		<view class="add-msg" :style="{height:deviceHeight+'px',bottom:'-'+deviceHeight+'px'}"
			:animation="animationData">
			<view class="name">{{user.name}}</view>
			<textarea :value='myname+"请求加为好友~"' maxlength="150" class="add-content"></textarea>
		</view>
		<view class="add-btn bottom-bar" :animation="animationData1"><!-- add-btn 绑定animationData1显示动画 -->
			<view class="cancel btn" @tap="addFriendAnimation">取消</view>
			<view class="send btn">发送</view>
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
				myname: 'root', //用户姓名
				deviceHeight: '', //add板块高度
				animationData: {}, //add板块动画
				animationData1: {}, //取消添加动画
				animationData2: {}, //头像动画
				animationData3: {}, //性别动画
				animationData4: {}, //背景色动画
				isAdd: false, //是否点击取消添加
			}
		},
		onShow: function() {
			//console.log('onShow我执行了')
		},
		onReady: function() {
			//console.log('我执行了')
			this.getDeviceInfo()
		},
		methods: {
			backOneStep: function() {
				uni.navigateBack({
					delta: 1
				})
			},
			//获取设备的高度
			getDeviceInfo: function() {
				const query = uni.createSelectorQuery().in(this)
				query.select('.bg').boundingClientRect(data => {
					console.log("得到布局位置信息" + JSON.stringify(data))
					console.log("节点离页面顶部的距离为" + data.top)
					this.deviceHeight = data.height - 186; //372rpx/2 = 186px
				}).exec()
			},
			//添加好友动画
			addFriendAnimation: function() {
				this.isAdd = !this.isAdd
				var animation = uni.createAnimation({
					duration: 400,
					timingFunction: 'ease',
				})
				var animation1 = uni.createAnimation({
					duration: 400,
					timingFunction: 'ease',
				})
				var animation2 = uni.createAnimation({
					duration: 400,
					timingFunction: 'ease',
				})
				var animation3 = uni.createAnimation({
					duration: 200,
					timingFunction: 'ease',
				})
				var animation4 = uni.createAnimation({
					duration: 200,
					timingFunction: 'ease',
				})
				if (this.isAdd) {
					//bottom位置设置为0 显示出来
					animation.bottom(0).step()
					animation1.bottom(0).step()
					animation2.width('240rpx').height('240rpx').left('-200rpx').step()  //头像宽度高度变小  注意这里的120是px  等于 240rpx
					animation3.opacity(0).step()
					animation4.backgroundColor('rgba(255,228,49,0.8)').step()
				} else {
					//点击取消添加后
					animation.bottom(-this.deviceHeight).step()
					animation1.bottom('-200rpx').step()
					animation2.width('400rpx').height('400rpx').left(0).step()  //头像宽度高度返回默认大小 注意这里的200是px  等于 400rpx
					animation3.opacity(1).step()
					animation4.backgroundColor('rgba(255,228,49,0)').step()
				}
				this.animationData = animation.export()
				this.animationData1 = animation1.export()
				this.animationData2 = animation2.export()
				this.animationData3 = animation3.export()
				this.animationData4 = animation4.export()
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
		padding-top: 228rpx;

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
				top: 0;
				width: 400rpx;
				height: 400rpx;
				border-radius: 48rpx;
				border: 6rpx solid rgba(255, 255, 255, 1);
				box-shadow: 0px 40rpx 40rpx 0px rgba(39, 40, 50, 0.2);
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
   .bottom-bar{
	    .bottom-btn{
			background-color: $uni-color-primary;
		    margin: 0 $uni-spacing-col-base;
		}
   }

	.add-msg {
		position: fixed;
		//bottom: 0; //先隐藏 然后点击加为好友再动画弹出
		width: 100%;
		//height: 80%; 用deviceheight替代
		box-sizing: border-box;
		padding: 0 60rpx;
		background: rgb(255, 255, 255);
		border-radius: 40rpx 40rpx 0rpx 0rpx;

		.name {
			padding: 198rpx 0 40rpx;
			font-size: 52rpx;
			color: $uni-text-color;
			line-height: 74rpx;
		}

		.add-content {
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

	.add-btn {
		bottom: -204rpx; //先隐藏 然后点击加为好友再动画弹出
		z-index: 100;
		height: 104rpx;
		display: flex;

		.cancel {
			width: 172rpx;
			background: $uni-bg-color-hover;
			margin-left: $uni-spacing-col-base;
		}

		.send {
			margin:0 $uni-spacing-col-base;
			flex: auto;
			background: $uni-color-primary;
		}
	}
</style>
