<template>
	<view class="content">
		<view class="top-bar">
			<view class="top-bar-left" @tap="backOneStep">
				<image src="../../static/images/common/back.png" class="back-img"></image>
			</view>
			<view class="top-bar-center">
				<view class="title">好友请求</view>
			</view>
			<view class="top-bar-right">
				<view class="pice"></view>
			</view>
		</view>
		<view class="main">
			<view class="requester" v-for="(item,index) in arr" :key='item.id'>
				<view class="requester-top">
					<view class="reject btn">拒绝</view>
					<view class="header-img">
						<image :src='item.imgUrl'></image>
					</view>
					<view class="agree btn">同意</view>
				</view>
				<view class="request-center">
					<view class="title">{{item.title}}</view>
					<view class="time">{{changeTime(item.time)}}</view>
				</view>
				<view class="notice">
					<text space="emsp" decode="true">留言: </text>
					{{item.notice}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import timeUtils from "@/commons/utils/timeUtils.js"
	export default {
		data() {
			return {
				//注意 只有定义在return中的数据才可以被模版字面量语法引用
				arr: [{
						id: 1,
						title: '川本',
						time: '2022/3/11 11:13:25',
						imgUrl: '../../static/images/img/three.jpg',
						notice: "您好，可以加一下您吗？麻烦通过一下呢"
					},
					{
						id: 2,
						title: '乔本欢娜',
						time: "2022/3/06 11:13:25",
						imgUrl: '../../static/images/img/four.jpg',
						notice: "巴嘎雅路，死啦死啦得，巴嘎雅路，死啦死啦得，巴嘎雅路，死啦死啦得"
					}
				]
			}
		},
		methods: {
			backOneStep: function() {
				uni.navigateBack({
					delta: 1
				})
			},
			//时间格式化
			changeTime: function(date) {
				return timeUtils.dateTime(date)
			},
		}
	}
</script>

<style lang="scss">
	@import '../../commons/css/mycss.scss';

	.top-bar {
		background: rgba(255, 255, 255, 0.95);
		border-bottom: 1px solid $uni-border-color;
	}

	.main {
		padding: 108rpx $uni-spacing-row-base $uni-spacing-col-base;

		.requester {
			margin-top: 112rpx;
			padding: $uni-spacing-col-base;
			background: rgba(255, 255, 255, 1);
			box-shadow: 0 24rpx 64rpx -8rpx rgba(0, 0, 0, 0.1);
			border-radius: $uni-border-radius-base;
		}

		.requester-top {
			display: flex;
			flex-direction: row;

			.btn {
				flex: none;
				text-align: center;
				width: 160rpx;
				height: 64rpx;
				line-height: 64rpx;
				background: rgba(255, 93, 91, 0.1);
				border-radius: 40rpx;
				font-size: $uni-font-size-lg;
				font-weight: 400;
			}

			.reject {
				color: $uni-color-warning;
				background-color: rgba(255, 93, 91, 0.1);
			}

			.agree {
				color: $uni-text-color;
				background-color: $uni-color-primary;
			}

			.header-img {
				margin-top: -104rpx;
				flex: auto;
				text-align: center;

				image {
					width: 144rpx;
					height: 144rpx;
					border-radius: 50%;
				}
			}
		}

		.request-center {
			text-align: center;
			padding-top: 20rpx;
			padding-bottom: 40rpx;

			.title {
				font-size: 36rpx;
				font-weight: 500;
				color: $uni-text-color;
				line-height: 50rpx;
			}

			.time {
				font-size: $uni-font-size-sm;
				color: $uni-text-color-disable;
				line-height: 34rpx;
			}
		}

		.notice {
			padding: $uni-spacing-row-sm $uni-spacing-col-base;
			border-radius: $uni-border-radius-base;
			background-color: $uni-bg-color-grey;
			font-size: $uni-font-size-base;
			color: $uni-text-color;
			line-height: 40rpx;

			text {
				padding-right: 15rpx; //空格占位符
			}
		}
	}
</style>
