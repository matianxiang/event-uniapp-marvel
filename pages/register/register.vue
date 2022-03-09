<template>
	<view class="content">
		<!-- 顶部 -->
		<view class="top-bar">
			<view class="top-bar-left" @tap="tologin">
				<image src="../../static/images/common/back.png" class="back-img"></image>
			</view>
		</view>
		<view class="logo">
			<image src="../../static/images/login/kaoyan.png"></image>
		</view>
		<view class="main">
			<view class="title">注册</view>
			<view class="inputs">
				<view class="inputs-div">
					<input type="text" placeholder="用户名" class="user" placeholder-style="color: #aaa;font-weight:400"
						@input="getUsername" :value="username" />
					<view class="invalid" v-if="isUsed">用户名重复!</view>
					<image src="../../static/images/register/正确.png" class="icon" v-if='username.length>=4&&!isUsed'>
					</image>
					<!-- username不为空 且 !isUsed-->
				</view>
				<view class="inputs-div">
					<input type="text" placeholder="邮箱" class="emali" placeholder-style="color: #aaa;font-weight:400"
						@input="getUserEmail" :value="email">
					<view class="invalid" v-if='isInvalidEmail'>邮箱格式无效!</view>
					<image src="../../static/images/register/正确.png" class="icon" v-if='email.length&&!isInvalidEmail'>
					</image>
					<!-- email不为空 且 !isInvalidEmail-->
				</view>
				<view class="inputs-div">
					<input :type='Type' placeholder="密码" class="pwd" placeholder-style="color: #aaa;font-weight:400"
						@input="getUserPwd" :value="password" />
					<view class="invalid" v-if='isInvalidPwd'>密码格式错误，仅支持字母数字组合!</view>
					<image :src='eye_url' class="icon pwd-eye" @tap="changeEyes"></image>
				</view>
			</view>
		</view>
		<view :class="[{submit:isok},{sumbitNot:!isok}]">注册</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username: '',
				email: '',
				password: '',
				Type: 'password',
				//用于调试 默认为true
				isUsed: false, //用户名是否占用
				isInvalidEmail: false, //邮箱格式是否错误
				isInvalidPwd: false, //密码格式是否错误
				change_eyes: false, //是否显示密码  false不显示
				eye_url: "../../static/images/register/close.png",
				//判读光标是否离开
				blur_username: false,
				blur_email: false,
				// 注册按钮是否可以点击
				isok: false,
			}
		},
		methods: {
			changeEyes: function() {
				if (this.change_eyes) {
					this.Type = 'text'
					this.change_eyes = !this.change_eyes
					this.eye_url = "../../static/images/register/open.png"
				} else {
					this.Type = 'password'
					this.change_eyes = !this.change_eyes
					this.eye_url = "../../static/images/register/close.png"
				}
			},
			getUsername: function(e) {
				this.username = e.detail.value
				//这里发起请求判断用户名是否已经重复 注意要做节流处理
				this.isOk()
			},
			getUserEmail: function(e) {
				this.email = e.detail.value
				let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
				if (this.email) {
					if (reg.test(this.email)) {
						//console.log('正确')
						this.isInvalidEmail = false
					} else {
						//console.log('错误')
						this.isInvalidEmail = true
					}
					this.blur_email = true;
				}
				this.isOk()
			},
			getUserPwd: function(e) {
				this.passsword = e.detail.value
				if (this.passsword.length < 4) {
					this.isInvalidPwd = true
				} else {
					this.isInvalidPwd = false
				}
				this.isOk()
			},
			// 返回登录页面
			tologin: function() {
				uni.navigateBack({
					delta: 1, //返回一层
				})
			},
			//判断是否可以注册
			isOk: function() {
				if (this.username && this.email && this.passsword && !this.isUsed && !this.isInvalidEmail && !this
					.isInvalidPwd) {
					this.isok = true
				} else {
					this.isok = false
				}
			}
		},
	}
</script>

<style lang='scss'>
	@import "../../commons/css/mycss.scss";
	.top-bar-left {
		//增大back按钮点击范围
		width: 88rpx;
		height: 88rpx;
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
		padding: 54rpx $uni-spacing-row-lg 120rpx;
		width: 100%;
		//注意当设置宽度为100%的时候还需要设置padding值时 一定要把box-sizing设置为border-box
		box-sizing: border-box;

		.title {
			font-size: 56rpx;
			font-weight: 600;
			color: $uni-text-color;
			line-height: 80rpx;
		}

		.inputs {
			padding-top: 8rpx;

			input {
				padding-top: 35rpx;
				height: 88rpx;
				font-size: $uni-font-size-lg;
				font-weight: 500;
				color: $uni-text-color;
				line-height: 88rpx;
				border-bottom: 1px solid $uni-border-color;
			}

			.inputs-div {
				position: relative;

				.invalid {
					padding: 10rpx 0;
					position: absolute;
					font-size: $uni-font-size-base;
					color: $uni-color-warning;
				}

				.icon {
					width: 50rpx;
					height: 50rpx;
					position: absolute;
					right: 0rpx;
					top: 60rpx;
				}

				.pwd-eye {
					padding: 20rpx 0rpx 15rpx 20rpx;
					top: 40rpx; //60-15
				}

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

	.sumbitNot {
		margin: 0 auto;
		width: 520rpx;
		height: 96rpx;
		background: rgba(39, 40, 50, 0.2);
		border-radius: 48rpx;
		font-size: $uni-font-size-lg;
		font-weight: 600;
		color: $uni-text-color-inverse;
		line-height: 96rpx;
		text-align: center;
	}
</style>
