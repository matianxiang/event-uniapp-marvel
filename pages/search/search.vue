<template>
	<view class="content">
		<view class="top-bar">
			<view class="search-div">
				<image src="../../static/images/search/search.png" class="search-img"></image>
				<input type="search" placeholder="搜索用户(支持邮箱搜索) /搜索群" class="search" placeholder-style="color: #aaa;font-weight:400"
					@input="searchUsername" />
			</view>
			<view class="top-bar-right">
				<view class="text" @tap='backOneStep'>取消</view>
			</view>
		</view>
		<view class="main">
			<view class="serach-user result">
				<view class="title" v-if='userarr.length>0'>用户</view>
				<view class="list user" v-for="(item,index) in userarr" :key='index'>
					<image :src="item.imgurl"></image>
					<view class="names">
						<view class="name" v-html='item.name'></view>
						<view class="email" v-html='item.email'></view>
					</view>
					<view class="right-btn send-msg" v-if='item.flag==1'>发消息</view>
					<view class="right-btn add-msg" v-if='item.flag==0'>加好友</view>
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
              userarr:[], //匹配用户名或邮箱的用户
			}
		},
		methods: {
			//获取关键字
            searchUsername:function(e){
				//先清空
				this.userarr = []
				let name = e.detail.value
				if(name.length>0){
					this.searchFun(name)
				}
			},
			//寻找关键字匹配的结果
			searchFun:function(e){
              let arr = datas.friends()
			  let exp = eval("/"+e+"/g")
	           for(let i =0;i<arr.length;i++){
				   //用户名/邮箱 匹配
				  if(arr[i].name.search(e)!=-1||arr[i].email.search(e)!=-1){
					  //遍历每一个用户时都判断是否是其好友
					  this.isFriend(arr[i])
					  arr[i].imgurl = '../../static/images/img/'+arr[i].imgurl
					  arr[i].name = arr[i].name.replace(exp,"<span style='color:#4AAAFF;'>"+e+"</span>")
					  arr[i].email = arr[i].email.replace(exp,"<span style='color:#4AAAFF;'>"+e+"</span>")
					  this.userarr.push(arr[i])
				  }
			   }
			},
			//判断是否为好友
			isFriend: function(e){
				let flag = 0
				let arr = datas.friendlist()
				for(let i =0;i<arr.length;i++){
					//假定当前用户id是1 他的好友id 1 2 5 8
					if(arr[i].friend == e.id){
						flag = 1;
					}
				}
			    e.flag = flag
				//console.log(e.flag)
			},
			backOneStep:function(){
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style lang="scss">
	@import "../../commons/css/mycss.scss";
	.top-bar {
		background: rgba(255,255,255,0.95);
		border-bottom: 1px solid $uni-border-color;
		.search-div{
			position:absolute;
			top:0;
			left:0;
			width: 100%;
			z-index: -1;
			box-sizing: border-box;
			padding: 14rpx 118rpx 14rpx $uni-spacing-row-base;
		}
		.search{
			padding: 0 60rpx 0 12rpx; 
			height: 60rpx;
			background: $uni-bg-color-grey;
			border-radius: 10rpx;
		}
		.search-img{
			position: absolute;
			right: 130rpx;
			top: 22rpx;
			width: 40rpx;
			height: 40rpx;
		}
	}
	.main{
		padding: 88rpx $uni-spacing-col-base;
		.result{
			padding-top: $uni-spacing-col-base;
			.title{
				font-size: 44rpx;
				font-weight: 600;
				color: $uni-text-color;
				line-height: 60rpx;
			}
			.list{
				width: 100%;
				//border: 1px solid red;
				padding: 20rpx 0;
				height: 80rpx;
				image{
					float: left;
					width: 80rpx;
					height: 80rpx;
					border-radius: $uni-border-radius-base;
				}
			}
			.names{
				float: left;
				padding-left: $uni-spacing-col-base;
			}
			.name{
				font-size: 36rpx;
				color: $uni-text-color;
				line-height: 50rpx;
			}
			.email{
				font-size: $uni-font-size-sm;
				color: rgba(39,40,50,1);
				line-height: 28rpx;
			}
			.right-btn{
				float: right;
				width: 120rpx;
				height: 48rpx;
				border-radius: 24rpx;
				font-size: $uni-font-size-sm;
				font-weight: 600;
				line-height: 48rpx;
				margin-top: 16rpx;
				text-align: center;
			}
			.send-msg {
				background: $uni-color-primary;
				color: rgba(39,40,50,1);
			}
			.add-msg {
				background: rgba(74,170,255,0.1);
				color: $uni-color-success;
			}
		}
		
		
	}
</style>
