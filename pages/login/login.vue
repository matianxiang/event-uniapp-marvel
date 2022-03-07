<template>
	<view  class="content">
		<!-- 顶部 -->
		<view class="top-bar">
			<view class="top-bar-right">
				<view class="text">注册</view>
			</view>
		</view>
		<view class="logo">
			<image src="../../static/images/login/kaoyan.png"></image>
		</view>
		<view class="main">
			 <view class="title">登录</view>
			 <view class='slogan'>您好，欢迎来到 Moyo!</view>
			 <view class="inputs">
				 <input type="text"  placeholder="用户名/邮箱" class="user" placeholder-style="color: #aaa;font-weight:400"/>
				 <input type="password"  placeholder="密码" class="pwd"  placeholder-style="color: #aaa;font-weight:400" />
			 </view>
			 <view class="tips">用户名或密码格式错误!</view>
			 <view class="forget-pwd">忘记密码?</view>
		</view>
		<view class="submit">登录</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>
     
<style lang='scss'>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding-top: var(--status-bar0-height);//防止将手机顶部状态栏覆盖
		padding-bottom: $uni-spacing-col-base;//方便观看最下面的消息
	}
	
     .top-bar {
     	position: fixed;
     	z-index: 1000;
     	top: 0;
     	left: 0;
     	width: 100%;
     	height: 88rpx;
     	padding-top: var(--status-bar-height);
     	background: $uni-bg-color;
     	border-bottom: 1px solid $uni-border-color;
		
        .top-bar-right {
     		 float: right;
     		 padding-right: 32rpx;
			 .text {
				 font-size: $uni-font-size-lg;
				 font-weight: 600;
				 color: $uni-text-color;
				 line-height: 88rpx
			 }
     	 }
     }
	 
	 .logo{
		 text-align: center;
		 image{
		 		   padding-top: 206rpx;
		 		   width: 194rpx;
		 		   height: 142rpx;
		 		   margin: 0 auto;
		 }
		 
	 }
	 
	 .main{
		 padding: 54rpx $uni-spacing-row-lg 120rpx;
		 width: 100%;
		 //注意当设置宽度为100%的时候还需要设置padding值时 一定要把box-sizing设置为border-box
		 box-sizing: border-box;
		.title {
			  font-size : 56rpx;
			  font-weight: 600;
			  color: $uni-text-color;
			  line-height: 80rpx;
		 }
		 .slogan {
			 margin-top: 10rpx;
			 font-size: 32rpx;
			 color: $uni-text-color-grey;
			 line-height: 56rpx;
		 }
		 .inputs {
		            padding-top: 8rpx;
				    input {
						padding-top: 20rpx;
						height: 88rpx;
						font-size: $uni-font-size-lg;
						font-weight: 500;
						color: $uni-text-color;
						line-height: 88rpx;
						border-bottom: 1px solid $uni-border-color;
					}
		  }
		  .tips {
			  //使其浮动 不占据页面位置
			  float: left;
			  font-size: $uni-font-size-lg;
			  color: $uni-color-warning;
			  line-height: 56rpx;
		  }
		  .forget-pwd {
			  //使其浮动 不占据页面位置
			  float: right;
			  font-size: $uni-font-size-lg;
			  color: $uni-color-primary;
			  line-height: 56rpx;
			  &:active {
			  		color: #ffff00;
			  }
		  }
	 }
	 .submit {
		 margin: 0 auto;
		 width: 520rpx;
		 height: 96rpx;	
		 background: $uni-color-primary;
		 box-shadow: 0px 50rpx 32rpx -36rpx rgba(255,228,49,0.4);
		 border-radius: 48rpx;
		 font-size: $uni-font-size-lg;
		 font-weight: 600;
		 color: $uni-text-color;
		 line-height: 96rpx;
		 text-align: center;
		  &:active {
		  		background-color: #ffff00;
		  }
	 }
</style>
