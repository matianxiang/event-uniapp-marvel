<template>
	<view class="content">
		<!-- 顶部 -->
		<view class="top-bar">
			<view class="top-bar-left" @tap="backOnepage">
				<image src="../../static/images/common/back.png" class="back-img"></image>
			</view>
			<view class="top-bar-center">
				<view class="title">详情</view>
			</view>
			<view class="top-bar-right">
				<view class="pice"></view>
			</view>
		</view>
		<view class="main">
			<view class="column heads">
				<view class="row head">
					<view class="title">头像</view>
					<view class="user-head">
						<image-cropper :src="tempFilePath" @confirm="confirm" @cancel="cancel"></image-cropper>
						<image :src="cropFilePath" @tap="upload" class="user-img"></image>
					</view>
					<view class="more">
						<image src="../../static/images/common/more.png" mode="aspectFit"></image>
					</view>
				</view>
				<view class="row">
					<view class="title">签名</view>
					<view class="cont">
						{{user.Signature}}
					</view>
					<view class="more">
						<image src="../../static/images/common/more.png" mode="aspectFit"></image>
					</view>
				</view>
				<view class="row">
					<view class="title">注册</view>
					<view class="cont">
						{{user.regesiterTime}}
					</view>
				</view>
			</view>
			<view class="column">
				<view class="row">
					<view class="title">昵称</view>
					<view class="cont">
						{{user.nick}}
					</view>
					<view class="more">
						<image src="../../static/images/common/more.png" mode="aspectFit"></image>
					</view>
				</view>
				<view class="row">
					<view class="title">性别</view>
					<view class="cont">
						<picker @change="bindPickerChange" :value="index" :range="array">
							<view class="uni-input">{{array[index]}}</view>
						</picker>
					</view>
					<view class="more">
						<image src="../../static/images/common/more.png" mode="aspectFit"></image>
					</view>
				</view>
				<view class="row">
					<view class="title">生日</view>
					<view class="cont">
						<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
							<view class="uni-input">{{date}}</view>
						</picker>
					</view>
					<view class="more">
						<image src="../../static/images/common/more.png" mode="aspectFit"></image>
					</view>
				</view>
				<view class="row">
					<view class="title">电话</view>
					<view class="cont">
						{{user.tel}}
					</view>
					<view class="more">
						<image src="../../static/images/common/more.png" mode="aspectFit"></image>
					</view>
				</view>
				<view class="row">
					<view class="title">邮箱</view>
					<view class="cont">
						{{user.email}}
					</view>
					<view class="more">
						<image src="../../static/images/common/more.png" mode="aspectFit"></image>
					</view>
				</view>
			</view>
			<view class="column">
				<view class="row">
					<view class="title">密码</view>
					<view class="cont">
						{{user.psw}}
					</view>
					<view class="more">
						<image src="../../static/images/common/more.png" mode="aspectFit"></image>
					</view>
				</view>
			</view>
			<view class="btn2">退出应用</view>
		</view>
	</view>
</template>

<script>
	import ImageCropper from "@/components/ling-imgcropper/ling-imgcropper.vue";
	export default {
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				user: {
					imgUrl: "../../static/images/img/one.jpg",
					Signature: '我是签名我是签名我是签名我是签名我是签名我是签名我是签名我是签名我是签名我是签名我是签名我是签名',
					regesiterTime: "2022-03-11 23:23:11",
					nick: '宇宙无敌暴龙神',
					sex: '女',
					birthday: '2002-02-24',
					tel: '17626986146',
					email: '2950208312@qq.com',
					psw: '1123456'
				},
				array: ['男', '女', '保密^_^'],
				index: 0, //默认值为男
				date: currentDate,
				tempFilePath: '',
				// cropFilePath: "../../static/images/img/one.jpg",  使用计算属性
				// headimg
			}
		},
		components: {
			ImageCropper,
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			},
			cropFilePath: {
				get(){
					return this.user.imgUrl
				},
				set(value){
					this.user.imgUrl = value
				}
			}
		},
		methods: {
			//向前跳转一页
			backOnepage: function() {
				uni.navigateBack({
					delta: 1, //返回一层
				})
			},
			//性别选择器
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value
			},
			//日期选择器
			bindDateChange: function(e) {
				this.date = e.target.value
			},
			//获取日期
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			//头像裁剪
			upload() {
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ["original", "compressed"], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ["album",'camera'], //从相册、相机选择
					success: (res) => {
						this.tempFilePath = res.tempFilePaths.shift();
					},
				});
			},
			confirm(e) {
				this.tempFilePath = "";
				this.cropFilePath = e.detail.tempFilePath;
                //this.headimg = e.detail.tempFilePath
				// #ifdef APP-PLUS||MP
				//除了H5端返回base64数据外，其他端都是返回临时地址，所以你要判断base64还是临时文件名，（用条件编译APP-PLUS||MP执行编译。）
				//按我这里是先上传裁剪得来的临时文件地址然后得到临时文件名，
				//待活你要判断是H5还是其他端传给后端类型参数让后端判断执行何种情况代码就OK了

				uni.uploadFile({
					url: "后端地址上传图片接口地址",
					//filePath: this.headimg
					filePath: this.cropFilePath,
					name: "file",
					fileType: "image",
					//formData:{},传递参数
					success: (uploadFileRes) => {
						var backstr = uploadFileRes.data;
						//自定义操作
					},

					fail(e) {
						console.log("this is errormes " + e.message);
					},
				});

				// #endif
			},
			cancel() {
				console.log("canceled");
				this.tempFilePath = "";
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
		padding-top: 118rpx;
		display: flex;
		flex-direction: column;

		.column {
			display: flex;
			padding-top: 12rpx;
			flex-direction: column;
			border-bottom: 1px solid $uni-border-color;
			width: 100%;

			.row {
				display: flex;
				flex-direction: row;
			}

			.title {
				flex: none;

				padding: 0 $uni-spacing-col-base;
				font-size: $uni-font-size-lg;
				color: $uni-text-color;
				line-height: 112rpx;
			}

			.head {
				height: 148rpx;
				display: flex;
				align-items: center;
			}

			.user-head {
				flex: auto;
			}

			.user-img {
				width: $uni-img-size-lg;
				height: $uni-img-size-lg;
				border-radius: $uni-border-radius-base;
			}

			.cont {
				flex: auto;
				align-items: center;
				font-size: $uni-font-size-lg;
				color: $uni-text-color-grey;
				line-height: 112rpx;
				//单行显示
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}

			.more {
				flex: none;
				height: 112rpx;
				display: flex;
				align-items: center;

				image {
					width: 80rpx;
					height: 28rpx;
				}
			}
		}

		.btn2 {
			margin-top: 160rpx;
			text-align: center;
			font-size: $uni-font-size-lg;
			color: $uni-color-warning;
			line-height: 88rpx;
		}
	}
</style>
