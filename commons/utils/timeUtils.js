export default {
	//首页时间转换 格式化
	//e 是消息发送的时间
	dateTime(e) {
		let old = new Date(e)
		let now = new Date()
		//获取消息发送的具体时间
		let day = old.getTime()
		let hour = old.getHours()
		let minute = old.getHours()
		let Y = old.getFullYear()
		let M = old.getMonth() + 1
		let D = old.getDate()
		//获取当前具体时间
		let nday = now.getTime()
		let nhour = now.getHours()
		let nminute = now.getHours()
		let nY = now.getFullYear()
		let nM = now.getMonth() + 1
		let nD = now.getDate()

		//消息发送的事件是否处于当天时间
		if (D === nD && Y === nY && M === nM) {
			if (hour < 10) {
				hour = '0' + hour
			}
			if (minute < 10) {
				minute = '0' + minute
			}
			return hour + ':' + minute
		} else if (D + 1 === nD && Y === nY && M === nM) {
			//消息发送的时间处于昨天时间
			if (hour < 10) {
				hour = '0' + hour
			}
			if (minute < 10) {
				minute = '0' + minute
			}
			return '昨天' + hour + ':' + minute
		} else {
			//早于昨天
			return Y + '/' + M + '/' + D
		}

	},
	//详细时间转换
	detailTime(e) {
		let old = new Date(e)
		//获取消息发送的具体时间
		let day = old.getTime()
		let hour = old.getHours()
		let minute = old.getHours()
		let Y = old.getFullYear()
		let M = old.getMonth() + 1
		let D = old.getDate()
		//处理时间
		if (M < 10) {
			M = '0' + M
		}
		if (hour < 10) {
			hour = '0' + hour
		}
		if (D < 10) {
			D = '0' + D
		}
		if (minute < 10) {
			minute = '0' + minute
		}
		return Y + '-' + M + '-' + D + '' + hour + ':' + m

	}
}
