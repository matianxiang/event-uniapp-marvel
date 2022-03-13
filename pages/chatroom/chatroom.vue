<template>
	<view class="content">
		<view class="top-bar">
			<view class="top-bar-left" @tap="backOnepage">
				<image src="../../static/images/common/back.png" class="back-img"></image>
			</view>
			<view class="top-bar-center">
				<view class="title">小明</view>
			</view>
			<view class="top-bar-right">
				<view class="pice"></view>
				<view class="group-img">
					<image src="../../static/images/index/1.jpg"></image>
				</view>
			</view>
		</view>
		<scroll-view scroll-y="true" class="chat" scroll-with-animation="true">
			<view class="chat-main">
				<view class="chat-ls" v-for="(item,index) in msgs" :key='item.tip'>
					<view class="chat-time">
						{{formatTime(item.time)}}
					</view>
					<view class="msg-m msg-left" v-if='item.id!=2'>
						<image :src="item.imgUrl" class="user-img"></image>
						<view class="message" v-if="item.types==0">
							<view class="msg-text">{{item.message}}</view>
						</view>
						<view class="message" v-if="item.types==1">
							<image :src="item.message" class="msg-img" mode="widthFix" @tap="previewImg(item.message)"></image>
						</view>
					</view>
					<view class="msg-m msg-right" v-if='item.id==2'>
						<image :src="item.imgUrl" class="user-img"></image>
						<view class="message" v-if="item.types==0">
							<view class="msg-text">{{item.message}}</view>
						</view>
						<view class="message" v-if="item.types==1">
							<image :src="item.message" class="msg-img" mode="widthFix" @tap="previewImg(item.message)"></image>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import datas from '../../commons/js/datas.js'
	import timeUtils from '../../commons/utils/timeUtils.js'
	export default {
		data() {
			return {
				msgs: [],
				//用来存放聊天数据中的图片 供查看图片功能使用
				imgMsg:[],
			};
		},
		onLoad() {
			this.getMsg()
		},
		methods: {
			backOneStep: function() {
				uni.navigateBack({
					delta: 1
				})
			},
			//获取聊天数据
			getMsg: function() {
				let msg = datas.message()
				//console.log(msg)
				for (let i = 0; i < msg.length; i++) {
					msg[i].imgUrl = '../../static/images/img/' + msg[i].imgUrl
					//补充图片地址
					if (msg[i].types == 1) {
						msg[i].message = '../../static/images/img/' + msg[i].message
						//对应 也需要倒序插入
						this.imgMsg.unshift(msg[i].message)
					}
					//倒序插入 最新的消息在最下面显示
					this.msgs.unshift(msg[i])
				}
				//console.log(this.msgs)
			},
			//date 消息发送的时间
			formatTime: function(date) {
				return timeUtils.dateTime(date)
			},
			//预览图片
			previewImg: function(e) {
				//获取当前点击图片的索引
				let index = 0;
				for(let i =0;i<this.imgMsg.length;i++){
					if(this.imgMsg[i] == e){
						index = i
					}
				}
				uni.previewImage({
					current:index,
					urls: this.imgMsg,
					longPressActions: {
						itemList: ['发送给朋友', '保存图片', '收藏'],
						success: function(data) {
							console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
						},
						fail: function(err) {
							console.log(err.errMsg);
						}
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	@import "../../commons/css/mycss.scss";

	//设置page的height content才能获取页面高度
	page {
		height: 100%;
	}

	.content {
		height: 100%;
		background-color: rgba(244, 244, 244, 0.96);
	}

	.top-bar {
		border-bottom: 1px solid $uni-border-color;
		background-color: rgba(244, 244, 244, 1);

		.group-img {
			position: absolute;
			right: $uni-spacing-col-base;
			bottom: 10rpx;
			width: 68rpx;
			height: 68rpx;

			image {
				width: 68rpx;
				height: 68rpx;
				border-radius: 16rpx;
			}
		}
	}

	.chat {
		height: 100%;

		.chat-main {
			padding-left: $uni-spacing-col-base;
			padding-right: $uni-spacing-col-base;
			padding-top: 100rpx;
			padding-bottom: 120rpx;
			display: flex;
			flex-direction: column;
		}

		.chat-ls {
			.chat-time {
				font-size: $uni-font-size-sm;
				color: rgba(39, 40, 50, 0.3);
				line-height: 34rpx;
				padding: 20rpx 0;
				text-align: center;
			}

			.msg-m {
				display: flex;
				padding: 20rpx 0;

				.user-img {
					flex: none;
					width: $uni-img-size-sm;
					height: $uni-img-size-sm;
					border-radius: $uni-border-radius-base;
				}

				.message {
					//flex: auto  不能加 否则宽度就固定了 不是由子元素撑开 或者改为 flex: none
					flex: none;
					max-width: 480rpx;
				}

				.msg-text {
					font-size: $uni-font-size-lg;
					color: $uni-text-color;
					line-height: 44rpx;
					padding: 18rpx 24rpx;
				}

				.msg-img {
					max-width: 400rpx;
					border-radius: $uni-border-radius-base;
				}
			}

			.msg-left {
				//从左往右排列
				flex-direction: row;

				.msg-text {
					margin-left: 16rpx;
					background-color: #fff;
					border-radius: 0rpx 20rpx 20rpx; //左上角没有圆角
				}

				.msg-img {
					margin-left: 16rpx;
				}
			}

			.msg-right {
				//从右往左排列
				flex-direction: row-reverse;

				.msg-text {
					margin-right: 16rpx;
					background-color: $uni-color-primary;
					border-radius: 20rpx 0rpx 20rpx 20rpx; //右上角没有圆角
				}

				.msg-img {
					margin-right: 16rpx;
				}
			}
		}
	}
</style>
