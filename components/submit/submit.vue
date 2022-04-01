<template>
	<view>
		<view class="submit">
			<view class="submit-chat">
				<view class="bt-img" @tap="records">
					<image :src="toc"></image>
				</view>
				<textarea auto-height="true" class="chat-send btn" v-show="!isrecord"></textarea>
				<view class="soundRecord btn" v-show='isrecord'>按住说话</view>
				<view class="bt-img" @tap="emoji">
					<image src="../../static/images/submit/biaoqing.png"></image>
				</view>
				<view class="bt-img">
					<image src="../../static/images/submit/add.png"></image>
				</view>
			</view>
			<view class="emoji" v-show="isemoji">
				表情
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isrecord:false,
				toc: "../../static/images/submit/yuyin.png",
				isemoji:true,
			}
		},
		methods: {
			//点击切换音频
			records: function(){
				if(this.isrecord){
					this.isrecord = false
					this.toc = "../../static/images/submit/yuyin.png"
				}else{
					this.isrecord = true
					this.toc = "../../static/images/submit/jianpan.png"
				}
			},
			//表情
			emoji: function(){
				this.isemoji = !this.isemoji
			}
		}
	}
</script>

<style lang="scss">
	.submit{
		background: rgba(244,244,244,0.96);
		border-top: 1px solid $uni-border-color;
		width: 100%;
	    position: fixed;
		bottom:  0;
		z-index: 100;
		padding-bottom: var(--status-bar0-height);
	}

    .submit-chat{
		width: 100%;
		display: flex;
		align-items: flex-end;
		box-sizing: border-box;
		padding: 14rpx 10rpx;
		image{
			width: 56rpx;
			height: 56rpx;
			margin: 0 10rpx;
			flex: auto;
		}
		.btn{
			flex: auto;
			background-color: #fff;
			border-radius: 10rpx;
			padding: 20rpx;
			max-height: 160rpx; //固定最大高度 差不多4行
			margin: 0 10rpx;
		}
		.soundRecord{
			text-align: center;
			font-size: $uni-font-size-lg;
			color: $uni-text-color-grey;
		}
	}
	.emoji{
		width: 100%;
		height: 460rpx;
		background-color: rgba(236,237,238,1);
		box-shadow: 0px -1rpx 0px 0px rgba(0,0,0,0.1);
	}
</style>
