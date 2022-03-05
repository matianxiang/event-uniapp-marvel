<template>
	<view class="content">
		<!-- 顶部 -->
		<view class="top-bar">
			<view class="top-bar-left">
				<image src="../../static/images/index/1.jpg" mode=""></image>
			</view>
			<view class="top-bar-center">
				<image class="logo" src="../../static/images/index/kaoyan.png" mode=""></image>
			</view>
			<view class="top-bar-right">
				<view class="search"><image src="../../static/images/index/sousuo.png"></image></view>
				<view class="add"><image src="../../static/images/index/jia.png"></image></view>
			</view>
		</view>
		<view class="main">
			<!-- 好友申请 -->
			<view class="friends">
				<view class="friend-list">
					<!-- 好友列表左侧部分 包括头像和消息提示 -->
					<view class="friend-list-l">
						<text class="tip">1</text>
						<image src="../../static/images/index/haoyou.png"></image>
					</view>
					<!-- 好友列表右侧 包括好友名、消息详情、发送时间 -->
					<view class="friend-list-r">
						 <view class="top">
							 <view class="name">好友申请</view>
							 <view class='time'>8:24</view>
						 </view>
						 <!-- 消息详情 -->
						 <view class="message">茫茫人海，相聚便是缘分</view>
					</view>
				</view>
			</view>
			<!-- 好友列表 -->
			<view class="friends">
				<view class="friend-list" v-for="(item,index) in friends" :key='item.id'>
					<!-- 好友列表左侧部分 包括头像和消息提示 -->
					<view class="friend-list-l">
						<text class="tip">{{item.tip}}</text>
						<image :src="item.imgurl"></image>
					</view>
					<!-- 好友列表右侧 包括好友名、消息详情、发送时间 -->
					<view class="friend-list-r">
						 <view class="top">
							 <view class="name">{{item.name}}</view>
							 <view class='time'>{{item.time}}</view>
						 </view>
						 <!-- 消息详情 -->
						 <view class="message">{{item.message}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import datas from '../../commons/js/datas.js'
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
          this.getFriends()
		},
		methods: {
           getFriends: function(){
			    //向实例上绑定friends数据
			   this.friends = datas.friends();
			   for(let i = 0;i<this.friends.length;i++){
				  this.friends[i].imgurl = '../../static/images/img/'+this.friends[i].imgurl
			   }
			   console.log(this.friends)
		   }
		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.top-bar {
		position: fixed;
		z-index: 1000;
		top: 0;
		left: 0;
		width: 100%;
		height: 88rpx;
		//将padding不算在宽度以内
		box-sizing: border-box;
		background: $uni-bg-color;
		border-bottom: 1px solid $uni-border-color;
		//padding-left: $uni-spacing-col-base;
		//padding-right: $uni-spacing-col-base;
		 .top-bar-left{
			   float: left;
			   padding-left: $uni-spacing-col-base;
			   image{
				   padding-top: 10rpx; //(88-68)/2
				     width: 68rpx;
					 height: 68rpx;
					 border-radius: 16rpx;
			   }
		 }
		 .top-bar-center{
			 position: absolute;
			 text-align: center;
			 left: 0;
			 right: 0;
			 top: 0;
			 bottom: 0;
			 margin: auto;
			 .logo{
				 padding-top: 11rpx;//(88-66)/2
				  width: 72rpx;
				  height: 66rpx;
			 }
		 }
		 .top-bar-right{
			 float: right;
			 padding-right: 14rpx;
			 .search{
				 width: 88rpx;
				 height: 88rpx;
				 display: inline-block;
			 }
			 .add{
				 width: 88rpx;
				 height: 88rpx;
				 display: inline-block;
			 }
			 image{
				 padding: 18rpx 0 0 18rpx; //(88-52)/2
				 width: 52rpx;
				 height: 52rpx;
			 }
		 }
	}

    .main {
		width: 100%;
		padding: 88rpx $uni-spacing-col-base 0;
		border: 1px solid red;
	} 
	
	.friend-list{
		height: 96rpx;
		padding: 16rpx 0;
		.friend-list-l{
			position: relative;
			float: left;
			image {
				width: 96rpx;
				height: 96rpx;
				border-radius: $uni-border-radius-base;
				background-color: $uni-color-primary;
			}
			.tip {
				position: absolute;
				z-index: 10;
				top: -6rpx;
				left: 68rpx;
				min-width: 36rpx;
				height: 36rpx;
				background: $uni-color-warning;
				border-radius: $uni-border-radius-circle;
				font-size: $uni-font-size-sm;
				color:$uni-text-color-inverse;
				line-height: 36rpx;
			    text-align: center;
			}
		}
		.friend-list-r {
			padding-left: 128rpx;
			.top {
				height: 50rpx;
				.name {
					float: left;
					font-size: 36rpx;
					font-weight: 400;
					color: $uni-text-color;
					line-height: 50rpx;
				}
				.time {
					//display: none;
					float: right;
					font-size: $uni-font-size-sm;
					color: $uni-text-color-disable;
					line-height: 50rpx;
				}
			}
		}
	  .message{
		  font-size: $uni-font-size-base;
		  color: $uni-text-color-grey;
		  line-height: 40rpx;
		  //css单行省略号
		  display: -webkit-box;
		  -webkit-box-orient: vertical;
		  -webkit-line-clamp: 1;
		  overflow: hidden;
	  }
	}
</style>
