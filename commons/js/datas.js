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
	}
}