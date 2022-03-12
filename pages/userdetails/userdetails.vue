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
					<view class="user-head" @tap="upload">
						<image-cropper :src="tempFilePath" @confirm="confirm" @cancel="cancel"></image-cropper>
						<image :src="cropFilePath" class="user-img"></image>
					</view>
					<view class="more" @tap="upload">
						<image src="../../static/images/common/more.png" mode="aspectFit"></image>
					</view>
				</view>
				<view class="row" @tap="modify('签名',user.Signature,false)">
					<view class="title">签名</view>
					<view class="cont">
						{{user.Signature}}
					</view>
					<view class="more">
						<image src="../../static/images/common/more.png" mode="aspectFit"></image>
					</view>
				</view>
				<view class="row disable_click">
					<view class="title">注册</view>
					<view class="cont">
						{{changeTime(user.regesiterTime)}}
					</view>
				</view>
			</view>
			<view class="column">
				<view class="row" @tap="modify('昵称',user.nick,false)">
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
				<view class="row" @tap="modify('电话',user.tel,false)">
					<view class="title">电话</view>
					<view class="cont">
						{{user.tel}}
					</view>
					<view class="more">
						<image src="../../static/images/common/more.png" mode="aspectFit"></image>
					</view>
				</view>
				<view class="row" @tap="modify('邮箱',user.email,true)">
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
				<view class="row" @tap="modify('邮箱',user.psw,true)">
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
		<view class="modify" :style="{bottom:-+deviceHeight+'px'}" :animation="animationData">
			<view class="modify-header">
				<view class="close" @tap="modify()">取消</view>
				<view class="title">{{modifyTitle}}</view>
				<view class="define" @tap="modifyConfirm()">确定</view>
			</view>
			<view class="modify-main">
				<input type='text' v-model="pwd" class="modify-pwd" placeholder="请输入原密码"
					placeholder-style="color: #aaa;font-weight:400" v-if="needPwd"></input>
				<textarea v-model="text_data" class="modify-content"></textarea>
			</view>
		</view>
	</view>
</template>

<script>
	import ImageCropper from "@/components/ling-imgcropper/ling-imgcropper.vue";
	import timeUtils from "@/commons/utils/timeUtils.js"
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
				text_data: '修改的内容',
				animationData: {}, //修改动画
				isModify: false, //修改动画开关
				deviceHeight: '',
				pwd: '', //原密码,
				modifyTitle: '', //修改标题
				needPwd: false, //是否需要验证密码
			}
		},
		onReady: function() {
			this.getDeviceInfo()
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
				get() {
					return this.user.imgUrl
				},
				set(value) {
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
			//时间格式化
			changeTime: function(date) {
				return timeUtils.dateTime(date)
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
					sourceType: ["album", 'camera'], //从相册、相机选择
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
			//获取设备的高度
			getDeviceInfo: function() {
				const query = uni.createSelectorQuery().in(this)
				query.select('.modify').boundingClientRect(data => {
					this.deviceHeight = data.height;
					console.log('高度' + this.deviceHeight)
				}).exec()
			},
			//修改项弹框
			modify: function(type, data, needPwd) {
				this.needPwd = needPwd //是否需要验证密码
				this.modifyTitle = type //修改弹框绑定的title
				this.text_data = data //textarea初始绑定的值
				this.isModify = !this.isModify
				var animation = uni.createAnimation({
					duration: 400,
					timingFunction: 'ease',
				})
				if (this.isModify) {
					animation.bottom(0).step()
				} else {
					animation.bottom(-this.deviceHeight).step()
				}
			 this.animationData = animation.export()
			},
			//弹窗修改确定
			modifyConfirm: function() {
				this.modify()
			}
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

				:active {
					background-color: $uni-bg-color-hover;
				}
			}
            
			.disable_click{
				:active {
				  background-color: rgba(255,255,255,1);
				}
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

	//修改弹框
	.modify {
		position: fixed;
		z-index: 1002;
		//top: 0;  动态绑定bottom bottom:812px = top:0
		left: 0;
		height: 100%;
		width: 100%;
		background-color: #fff;

		.modify-header {
			width: 100%;
			height: 88rpx;
			//防止将手机顶部状态栏覆盖
			padding-top: var(--status-bar0-height);
			display: flex;
			flex-direction: row;
			align-items: center;
			border-bottom: 1px solid $uni-border-color;

			.close {
				padding-left: $uni-spacing-col-base;
				font-size: $uni-font-size-lg;
				color: $uni-text-color;
				line-height: 44rpx;
			}

			.title {
				flex: auto;
				text-align: center;
				font-size: 40rpx;
				color: $uni-text-color;
				line-height: 88rpx;
				font-weight: 600;
			}

			.define {
				padding-right: $uni-spacing-col-base;
				font-size: $uni-font-size-lg;
				color: $uni-color-success;
				line-height: 44rpx;
			}
		}

		.modify-main {
			display: flex;
			padding: $uni-spacing-col-base;
			flex-direction: column;

			.modify-pwd {
				margin-bottom: $uni-spacing-col-base;
				padding: 0 22rpx;
				box-sizing: border-box; //注意一定要加
				flex: auto;
				width: 100%;
				height: 88rpx;
				background: $uni-bg-color-grey;
				border-radius: $uni-border-radius-base;
				font-size: $uni-font-size-lg;
				color: $uni-text-color;
				line-height: 88rpx;
			}

			.modify-content {
				padding: 16rpx 22rpx;
				box-sizing: border-box; //注意一定要加
				flex: auto;
				width: 100%;
				height: 386rpx;
				background: $uni-bg-color-grey;
				border-radius: $uni-border-radius-base;
				font-size: $uni-font-size-lg;
				color: $uni-text-color;
				line-height: 44rpx;
			}
		}
	}
</style>
