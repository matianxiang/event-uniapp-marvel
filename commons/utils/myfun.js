export default{
	//聊天框间隔时间差
	spaceTime(now,old){
		 now = new Date(now)
		 old = new Date(old)
		 let timeold = old.getTime()
		 let timenow = now.getTime()
		 //因为是倒序取出聊天时间，所以前面一项时间比后面一项大
		 //每两条相隔时间大于5分钟就显示时间
		 if(timenow>(timeold+5*1000*60)){
			 return old
		 }else{
			 return ''
		 }
	}
}