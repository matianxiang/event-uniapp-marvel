<template>
	<view class="content">
		<!-- 顶部 -->
		<view class="top-bar">
			<view class="top-bar-right" @tap="toregister">
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
				<input type="text" placeholder="用户名" class="user" placeholder-style="color: #aaa;font-weight:400"
					@input='getUsername' :value="username" />
				<view class="password">
					<input :type='Type' placeholder="密码" class="pwd" placeholder-style="color: #aaa;font-weight:400"
						@input='getPassword' :value="password" />
					<image :src='eye_url' class="pwd-eye" @tap="changeEyes"></image>
				</view>
			</view>
			<view class="tips" v-if='uncorrect'>用户名或密码错误!</view>
			<view class="forget-pwd">忘记密码?</view>
		</view>
		<view class="submit" @tap="login">登录</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username: '',
				password: "",
				Type: 'password',
				change_eyes: false, //是否显示密码 false不显示
				eye_url: "../../static/images/login/close.png",
				uncorrect: false

			}
		},
		methods: {
			//密码显示与隐藏
			changeEyes: function() {
				if (this.change_eyes) {
					this.Type = 'text'
					this.change_eyes = !this.change_eyes
					this.eye_url = "../../static/images/login/open.png"
				} else {
					this.Type = 'password'
					this.change_eyes = !this.change_eyes
					this.eye_url = "../../static/images/login/close.png"
				}
			},
			//跳转到注册页面
			toregister: function() {
				uni.navigateTo({
					url: '../register/register',
				})
			},
			//获取用户名
			getUsername: function(e) {
				this.username = e.detail.value
			},
			//获取密码
			getPassword: function(e) {
				this.password = e.detail.value
			},
			//登陆提交
			login: function() {
				// 有一个为空则为错误
				if (!this.username || !this.password) {
					this.uncorrect = true
				}

			}
		}
	}
</script>

<style lang='scss'>
	@import "../../commons/css/mycss.scss";

	.top-bar {
		background: rgb(255, 255, 255);
		border-bottom: 1px solid $uni-border-color;
	}

	.logo {
		text-align: center;

		image {
			padding-top: 206rpx;
			width: 194rpx;
			height: 142rpx;
			margin: 0 auto;
		}

	}

	.main {
		padding: 54rpx $uni-spacing-row-lg 80rpx;
		width: 100%;
		//注意当设置宽度为100%的时候还需要设置padding值时 一定要把box-sizing设置为border-box
		box-sizing: border-box;

		.title {
			font-size: 56rpx;
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

			.password {
				position: relative;

				image {
					padding: 20rpx 0 15rpx 20rpx;
					height: 60rpx;
					width: 60rpx;
					position: absolute;
					top: 20rpx;
					right: 0rpx;
				}
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
		box-shadow: 0px 50rpx 32rpx -36rpx rgba(255, 228, 49, 0.4);
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
