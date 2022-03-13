// 伪造一些假数据
export default{
	friends: function(){
		// 伪造一些好友列表数据
		let friendarr = [
			{   
			   id:1,
			   imgurl: 'one.jpg',
			   tip:3,
			   name:'孙哥',
			   email:'senlang@163.com',
			   time: new Date(),
			   message: '玩剑圣的都没ma'
		    },
			{
			   id:2,
			   imgurl: 'two.jpg',
			   tip:1,
			   name:'刘墨林',
			   email:'tianxiang@163.com',
			   time: new Date(),
			   message: '苏瞬卿是天下第一女子'
			},
			{
			   id:3,
			   imgurl: 'three.jpg',
			   tip:6,
			   name:'南邮彭于晏',
			   email:'axiswee@163.com',
			   time: new Date(),
			   message: '你知道的，太帅是要被排斥的'
			},
			{
			   id:4,
			   imgurl: 'four.jpg',
			   tip:99,
			   name:'乌克兰特工',
			   email:'pop@163.com',
			   time: new Date(),
			   message: '表，救我'
			},
			{
			   id:5,
			   imgurl: 'four.jpg',
			   tip:99,
			   name:'乌克兰特工',
			   email:'wangyi@163.com',
			   time: new Date(),
			   message: '表，救我'
			},
			{
			   id:6,
			   imgurl: 'four.jpg',
			   tip:99,
			   name:'乌克兰特工',
			   email:'qq@163.com',
			   time: new Date(),
			   message: '表，救我'
			},
			{
			   id:7,
			   imgurl: 'four.jpg',
			   tip:99,
			   name:'乌克兰特工',
			   email:'music@163.com',
			   time: new Date(),
			   message: '表，救我'
			},
			{
			   id:8,
			   imgurl: 'four.jpg',
			   tip:99,
			   name:'乌克兰特工',
			   email:'tencent@163.com',
			   time: new Date(),
			   message: '表，救我'
			},
			{
			   id:9,
			   imgurl: 'four.jpg',
			   tip:0,
			   name:'乌克兰特工',
			   email:'alibaba@163.com',
			   time: new Date(),
			   message: '表，救我'
			},
			{
			   id:10,
			   imgurl: 'four.jpg',
			   tip:99,
			   name:'乌克兰特工',
			   email:'alibaba@163.com',
			   time: new Date(),
			   message: '表，救我'
			}
		]
		return friendarr
	},
	//好友列表
	friendlist: function(){
		let friendList = [
			{
				userid:1,
				friend:1,
			},
			{
				userid:1,
				friend:2,
			},
			{
				userid:1,
				friend:5,
			},
			{
				userid:1,
				friend:8,
			},
		]
		return friendList
	},
	//聊天框数据
	message:function(){
		let msgs = [
			{
				id:'1',
				imgUrl:'one.jpg',
				message:'晴天小猪晴天小猪晴天小猪晴天小猪晴天小猪晴天小猪晴天小猪晴天小猪晴天小猪',
				types:0,               //内容类型 (0文字，1图片链接，2音频链接)
				time:new Date()-1000,    //发送时间
				tip:0
			},
			{
				id:'1',
				imgUrl:'one.jpg',
				message:'晴天小猪晴天小猪晴天小猪晴天小猪晴天小猪晴天小猪晴天小猪晴天小猪晴天小猪',
				types:0,               //内容类型 (0文字，1图片链接，2音频链接)
				time:new Date()-1000*16,    //发送时间
				tip:1
			},
			{
				id:'2',
				imgUrl:'three.jpg',
				message:'老八秘制小汉堡',
				types:0,               //内容类型 (0文字，1图片链接，2音频链接)
				time:new Date()-1000*60,    //发送时间
				tip:2
			},
			{
				id:'2',
				imgUrl:'three.jpg',
				message:'four.jpg',
				types:1,               //内容类型 (0文字，1图片链接，2音频链接)
				time:new Date()-1000*60*36,    //发送时间
				tip:3
			},
			{
				id:'1',
				imgUrl:'one.jpg',
				message:'three.jpg',
				types:1,               //内容类型 (0文字，1图片链接，2音频链接)
				time:new Date()-1000*60*40,    //发送时间
				tip:4
			},
			{
				id:'1',
				imgUrl:'one.jpg',
				message:'一天不摆浑身难受',
				types:0,               //内容类型 (0文字，1图片链接，2音频链接)
				time:new Date()-1000*60*60*60,    //发送时间
				tip:5
			},
			{
				id:'2',
				imgUrl:'three.jpg',
				message:'小汉堡',
				types:0,               //内容类型 (0文字，1图片链接，2音频链接)
				time:new Date()-1000*60*60*80,    //发送时间
				tip:6
			},
			{
				id:'2',
				imgUrl:'three.jpg',
				message:'兄弟们',
				types:0,               //内容类型 (0文字，1图片链接，2音频链接)
				time:new Date()-1000*60*60*90,    //发送时间
				tip:7
			},
		]
		return msgs
	}
}