﻿var imgs = {
	play: './assets/images/play.png',
	logo: './assets/images/logo.png',
	//baoming:'./assets/images/baoming.png',
	//yibaoming:'./assets/images/yibaoming.png',
	gonggao:'./assets/images/gonggao.png',
	//gonggao1:'./assets/images/gonggao1.png',
	jiaoliu:'./assets/images/jiaoliu2.png',
	kecheng:'./assets/images/kecheng.png',
	//kecheng1:'./assets/images/kecheng1.png',
	//qiandao:'./assets/images/qiandao.png',
	//qiandao1:'./assets/images/qiandao1.png',
	tongxunlu:'./assets/images/tongxunlu.png',
	//tongxunlu1:'./assets/images/tongxunlu1.png',
	xuzhi:'./assets/images/xuzhi.png',
	//xuzhi1:'./assets/images/xuzhi1.png',
	zhusu:'./assets/images/zhusu.png',
	//zhusu1:'./assets/images/zhusu1.png',
	ziliao:'./assets/images/ziliao.png',
	//ziliao1:'./assets/images/ziliao1.png',
	zuowei:'./assets/images/zuowei.png',
	//sousuo:'./assets/images/sousuo.png',
	success:'./assets/images/success.png',
	qiuzhu:'./assets/images/qiuzhu.png',
	title:'./assets/images/title2.jpg',
	qd:'./assets/images/qd.jpg',
	qiandaoBg:'./assets/images/qiandao-bg.png',
	baomingTitle:'./assets/images/baoming-title1.jpg',
}
 var arr = [];


 for (var attr in imgs) {
 	arr.push(imgs[attr]);
 }

window.pNumber = 2; //第2期
window.getdate = '2018年8月22日至2018年8月22日23日'
window.isNeedWXTips = true;
var musics = {
	music: {
		src: './assets/music/bg2.mp3',
		autoplay: false,
		name: 'bg',
		loop: true
	},
	photo:{
		src:'./assets/music/photo.mp3',
		autoplay:false,
		name:"photo",
		loop:false
	}
};

window.menus = [{
	name: "培训须知",
	img: imgs.xuzhi,
	defaultImg: imgs.xuzhi,
	img1: imgs.xuzhi1,
	width: '65px',
	href: "http://www.wenming.cn/specials/wmcj/2018term2/xz/"
}, {
	name: "课程安排",
	img: imgs.kecheng,
	defaultImg: imgs.kecheng,
	width: '54px',
	href: "http://www.wenming.cn/specials/wmcj/2018term2/kcap/"
}, {
	name: "新闻中心",
	img: imgs.gonggao,
	defaultImg: imgs.gonggao,
	img1: imgs.gonggao1,
	width: '65px',
	href: 'http://www.wenming.cn/specials/wmcj/2018term2/news/'
}, {
	name: "我的房间",
	img: imgs.zhusu,
	defaultImg: imgs.zhusu,
	img1: imgs.zhusu1,
	width: '68px'
}, {
	name: "我的座位",
	img: imgs.zuowei,
	defaultImg: imgs.zuowei,
	img1: imgs.zuowei1,
	width: '70px',
	href: 'http://www.wenming.cn/specials/wmcj/2018term2/zj/'
}, {
	name: "我的同学",
	img: imgs.tongxunlu,
	defaultImg: imgs.tongxunlu,
	img1: imgs.zuowei1,
	width: '60px'
}, {
	name: "经验交流",
	img: imgs.jiaoliu,
	defaultImg: imgs.jiaoliu,
	img1: imgs.jiaoliu1,
	width: '50px',
	href: 'http://www.wenming.cn/specials/wmcj/2018term2/jyjl/'
}, {
	name: "文件汇编",
	img: imgs.ziliao,
	defaultImg: imgs.ziliao,
	img1: imgs.ziliao1,
	width: '60px',
	href: 'http://www.wenming.cn/specials/wmcj/2018term2/wjhb/'
}, {
	name: "我要求助",
	img: imgs.qiuzhu,
	defaultImg: imgs.qiuzhu,
	img1: imgs.sousuo1,
	width: '55px'
}]

var musics = {
	music: {
		src: './assets/music/bg2.mp3',
		autoplay: false,
		name: 'bg',
		loop: true
	},
	photo:{
		src:'./assets/music/photo.mp3',
		autoplay:false,
		name:"photo",
		loop:false
	}
};
window.leaders = [{
	"username": "董青",
	"sex": 1,
	"nation": "汉",
	"job": "中央文明办中国文明网总编辑",
	"province": "",
	"mobile": "",
	"roomnumber": "1117",
	"status": "",
	"seatnumber": ""
}, {
	"username": "周黎明",
	"sex": 1,
	"nation": "汉",
	"job": "中央文明办中国文明网副总编辑",
	"province": "",
	"mobile": "",
	"roomnumber": "1111",
	"status": "",
	"seatnumber": ""
}, {
	"username": "张其胜",
	"sex": 1,
	"nation": "汉",
	"job": "中央文明办中国文明网编辑部主任",
	"province": "",
	"mobile": "",
	"roomnumber": "1115",
	"status": "",
	"seatnumber": ""
}, {
	"username": "周海刚",
	"sex": 1,
	"nation": "汉",
	"job": "中央文明办中国文明网行政事务部干部",
	"province": "",
	"mobile": "18511582283",
	"roomnumber": "1103",
	"status": "",
	"seatnumber": ""
}, {
	"username": "王兆鹏",
	"sex": 1,
	"nation": "汉",
	"job": "中央文明办中国文明网干部",
	"province": "",
	"mobile": "",
	"roomnumber": "1118",
	"status": "",
	"seatnumber": ""
}, {
	"username": "姚  杰",
	"sex": 1,
	"nation": "汉",
	"job": "中国文明网宣传活动部副主任",
	"province": "",
	"mobile": "13520668523",
	"roomnumber": "1106",
	"status": "",
	"seatnumber": ""
}, {
	"username": "张慧磊",
	"sex": 0,
	"nation": "汉",
	"job": "中国文明网编辑部综合新闻组编辑",
	"province": "",
	"mobile": "13439831281",
	"roomnumber": "1110",
	"status": "",
	"seatnumber": ""
}, {
	"username": "项  丽",
	"sex": 0,
	"nation": "汉",
	"job": "中国文明网宣传活动部网络文明传播组编辑",
	"province": "",
	"mobile": "13466554230",
	"roomnumber": "1110",
	"status": "",
	"seatnumber": ""
}, {
	"username": "逯江楠",
	"sex": 0,
	"nation": "满",
	"job": "中国文明网行政事务部综合组编辑",
	"province": "",
	"mobile": "15811273878",
	"roomnumber": "1102",
	"status": "",
	"seatnumber": ""
}, {
	"username": "段琳玉",
	"sex": 0,
	"nation": "汉",
	"job": "中国文明网编辑部综合新闻组编辑",
	"province": "",
	"mobile": "",
	"roomnumber": "1122",
	"status": "",
	"seatnumber": ""
}, {
	"username": "林  和",
	"sex": 1,
	"nation": "汉",
	"job": "中国文明网编辑部音视频组编辑",
	"province": "",
	"mobile": "",
	"roomnumber": "1118",
	"status": "",
	"seatnumber": ""
}, {
	"username": "贺子桓",
	"sex": 1,
	"nation": "汉",
	"job": "中国文明网宣传活动部网络公益组编辑",
	"province": "",
	"mobile": "",
	"roomnumber": "1106",
	"status": "",
	"seatnumber": ""
}];

 (function () {

 	if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
 		handleFontSize();
 	} else {
 		if (document.addEventListener) {
 			document.addEventListener("WeixinJSBridgeReady", handleFontSize, false);
 		} else if (document.attachEvent) {
 			document.attachEvent("WeixinJSBridgeReady", handleFontSize);
 			document.attachEvent("onWeixinJSBridgeReady", handleFontSize);
 		}
 	}

 	function handleFontSize() {
 		// 设置网页字体为默认大小
 		WeixinJSBridge.invoke('setFontSizeCallback', {
 			'fontSize': 0
 		});
 		// 重写设置网页字体大小的事件
 		WeixinJSBridge.on('menu:setfont', function () {
 			WeixinJSBridge.invoke('setFontSizeCallback', {
 				'fontSize': 0
 			});
 		});
 	}
 })();