$("#advert").animate({
	height:"500px"
},2000).animate({
	height:"500px"
},2000).animate({
	height:"50px"
},2000,function(){
	$("#ad1").css({display:"block"});
	$("#ad2").css({display:"none"});
})


var index=0;
var timer;
function move1(){
	tiemr=setInterval(function(){
		var a=-$(".swiper-move").width();
		index++;
		$("#swiper-wrapper").css({left:index*a});
		$("#pagination span").css({backgroundPosition:" -480px -14px"})
		$("#pagination span").eq(index).css({backgroundPosition:" -460px -14px"})
		if(index>=4){
			index=-1;
		}
	},3000)
}
move1();
$("#pagination span").click(function(){
	clearInterval(timer);
	$("#pagination span").css({backgroundPosition:" -480px -14px"})
	$(this).css({backgroundPosition:" -460px -14px"});
	var a=-$(".swiper-move").width();
	index=$(this).index();
	$("#swiper-wrapper").css({left:index*a});
})

$("#flfun>li").mouseenter(function(){
	$(".flcon").eq($(this).index()).css({display:"block"});
})
$("#flfun>li").mouseleave(function(){
	$(".flcon").eq($(this).index()).css({display:"none"});
})
$(".flcon").mouseenter(function(){
	$(".flcon").css({display:"none"});
	$(this).css({display:"block"});
})
$(".flcon").mouseleave(function(){
	$(".flcon").css({display:"none"});
})
var timer;
var ttop=0;
function move(){
	timer=setInterval(function(){
		$("#listcontent ul").css({
			top:ttop
		})
		ttop--;
		if(ttop<=-220){
			ttop=0;
		}
	},25)
}
move();
$("#listcontent").mouseover(function(){
	clearInterval(timer);
})
$("#listcontent").mouseout(function(){
	move();
})

$(".sub").eq(0).mouseenter(function(){
	$(".left_mxy01").css({left:"13px"})
	$(".right_mxy01").css({left:"171px"})
})
$(".sub").eq(0).mouseleave(function(){
	$(".left_mxy01").css({left:"21px"})
	$(".right_mxy01").css({left:"163px"})
})
$(".sub").eq(1).mouseenter(function(){
	$(".left_mxy02").css({left:"13px"})
	$(".right_mxy02").css({left:"171px"})
})
$(".sub").eq(1).mouseleave(function(){
	$(".left_mxy02").css({left:"21px"})
	$(".right_mxy02").css({left:"163px"})
})
$(".sub").eq(2).mouseenter(function(){
	$(".left_mxy03").css({left:"8px"})
	$(".right_mxy03").css({left:"151px"})
})
$(".sub").eq(2).mouseleave(function(){
	$(".left_mxy03").css({left:"16px"})
	$(".right_mxy03").css({left:"143px"})
})
$(".sub").eq(3).mouseenter(function(){
	$(".left_mxy04").css({left:"13px"})
	$(".right_mxy04").css({left:"199px"})
})
$(".sub").eq(3).mouseleave(function(){
	$(".left_mxy04").css({left:"21px"})
	$(".right_mxy04").css({left:"191px"})
})
$(".sub").eq(4).mouseenter(function(){
	$(".left_mxy05").css({left:"13px"})
	$(".right_mxy05").css({left:"171px"})
})
$(".sub").eq(4).mouseleave(function(){
	$(".left_mxy05").css({left:"21px"})
	$(".right_mxy05").css({left:"163px"})
})
$(".sub").eq(5).mouseenter(function(){
	$(".left_mxy06").css({left:"4px"})
	$(".right_mxy06").css({left:"189px"})
})
$(".sub").eq(5).mouseleave(function(){
	$(".left_mxy06").css({left:"21px"})
	$(".right_mxy06").css({left:"181px"})
})
$(".sub").eq(6).mouseenter(function(){
	$(".left_mxy07").css({left:"8px"})
	$(".right_mxy07").css({left:"189px"})
})
$(".sub").eq(6).mouseleave(function(){
	$(".left_mxy07").css({left:"16px"})
	$(".right_mxy07").css({left:"181px"})
})



$(".class02").eq(0).mouseenter(function(){
	$(".mxy_em_11").css({left:"9px"});
	$(".mxy_em_22").css({left:"187px"});
})
$(".class02").eq(0).mouseleave(function(){
	$(".mxy_em_11").css({left:"17px"});
	$(".mxy_em_22").css({left:"179px"});
})
$(".class02").eq(1).mouseenter(function(){
	$(".mxy_em_021").css({left:"9px"});
	$(".mxy_em_022").css({left:"187px"});
})
$(".class02").eq(1).mouseleave(function(){
	$(".mxy_em_021").css({left:"17px"});
	$(".mxy_em_022").css({left:"179px"});
})
$(".class02").eq(2).mouseenter(function(){
	$(".mxy_em_031").css({left:"9px"});
	$(".mxy_em_032").css({left:"187px"});
})
$(".class02").eq(2).mouseleave(function(){
	$(".mxy_em_031").css({left:"17px"});
	$(".mxy_em_032").css({left:"179px"});
})
$(".class02").eq(3).mouseenter(function(){
	$(".mxy_em_041").css({left:"9px"});
	$(".mxy_em_042").css({left:"187px"});
})
$(".class02").eq(3).mouseleave(function(){
	$(".mxy_em_041").css({left:"17px"});
	$(".mxy_em_042").css({left:"179px"});
})
$(".class02").eq(4).mouseenter(function(){
	$(".mxy_em_051").css({left:"9px"});
	$(".mxy_em_052").css({left:"187px"});
})
$(".class02").eq(4).mouseleave(function(){
	$(".mxy_em_051").css({left:"17px"});
	$(".mxy_em_052").css({left:"179px"});
})
$(".class02").eq(5).mouseenter(function(){
	$(".mxy_em_061").css({left:"9px"});
	$(".mxy_em_062").css({left:"187px"});
})
$(".class02").eq(5).mouseleave(function(){
	$(".mxy_em_061").css({left:"17px"});
	$(".mxy_em_062").css({left:"179px"});
})
$(".class02").eq(6).mouseenter(function(){
	$(".mxy_em_071").css({left:"9px"});
	$(".mxy_em_072").css({left:"187px"});
})
$(".class02").eq(6).mouseleave(function(){
	$(".mxy_em_071").css({left:"17px"});
	$(".mxy_em_072").css({left:"179px"});
})
$("#toright").click(function(){
	$("#ni_studs_ul").css({left:"-1220px"})
})
$("#toleft").click(function(){
	$("#ni_studs_ul").css({left:"-10px"})
})

var timer1;
$(".city01").animate({
	left:-302
},4000).animate({
	left:-302
},3000)
.animate({
	left:0
},4000)
timer1=setInterval(function(){
	$(".city01").animate({
		left:-302
	},4000).animate({
		left:-302
	},3000)
	.animate({
		left:0
	},4000)
},14000)
$(".ni_city li").click(function(){
	clearInterval(timer1);
	$(this).addClass("active").siblings().removeClass("active");
	$(".citylb").css({display:"none"});
	$(".citylb").eq($(this).index()).css({display:"block"});
	if($(this).index()==0){
		$(".city01").animate({
			left:-302
		},4000).animate({
			left:-302
		},3000).animate({
			left:0
		},4000)
		timer1=setInterval(function(){
			$(".city01").animate({
				left:-302
			},4000).animate({
				left:-302
			},3000)
			.animate({
				left:0
			},4000)
		},14000)
	}else if($(this).index()==1){
		$(".city02").animate({
			left:-302
		},4000).animate({
			left:-302
		},3000)
		.animate({
			left:0
		},4000)
		timer1=setInterval(function(){
			$(".city02").animate({
				left:-302
			},4000).animate({
				left:-302
			},3000)
			.animate({
				left:0
			},4000)
		},14000)
	}else if($(this).index()==2){
		$(".city03").animate({
			left:-604
		},4000).animate({
			left:-604
		},3000)
		.animate({
			left:0
		},4000)
		timer1=setInterval(function(){
			$(".city03").animate({
				left:-604
			},4000).animate({
				left:-604
			},3000)
			.animate({
				left:0
			},4000)
		},14000)
	}else if($(this).index()==4){
		$(".city05").animate({
			left:-1208
		},4000).animate({
			left:-1208
		},3000)
		.animate({
			left:0
		},4000)
		timer1=setInterval(function(){
			$(".city05").animate({
				left:-1208
			},4000).animate({
				left:-1208
			},3000)
			.animate({
				left:0
			},4000)
		},14000)
	}else if($(this).index()==5){
		$(".city06").animate({
			left:-1208
		},4000).animate({
			left:-1208
		},3000)
		.animate({
			left:0
		},4000)
		timer1=setInterval(function(){
			$(".city06").animate({
				left:-1208
			},4000).animate({
				left:-1208
			},3000)
			.animate({
				left:0
			},4000)
		},14000)
	}else if($(this).index()==6){
		$(".city07").animate({
			left:-302
		},4000).animate({
			left:-302
		},3000).animate({
			left:0
		},4000)
		timer1=setInterval(function(){
			$(".city07").animate({
				left:-302
			},4000).animate({
				left:-302
			},3000)
			.animate({
				left:0
			},4000)
		},14000)
	}else if($(this).index()==7){
		$(".city08").animate({
			left:-1208
		},4000).animate({
			left:-1208
		},3000).animate({
			left:0
		},4000)
		timer1=setInterval(function(){
			$(".city08").animate({
				left:-1208
			},4000).animate({
				left:-1208
			},3000)
			.animate({
				left:0
			},4000)
		},14000)
	}else if($(this).index()==9){
		$(".city10").animate({
			left:-906
		},4000).animate({
			left:-906
		},3000).animate({
			left:0
		},4000)
		timer1=setInterval(function(){
			$(".city10").animate({
				left:-906
			},4000).animate({
				left:-906
			},3000)
			.animate({
				left:0
			},4000)
		},14000)
	}
})
$(".acti").mouseenter(function(){
	$(this).css({background:'#00abf7'})
	$(this).children().css({color:"white"})
})
$(".acti").mouseleave(function(){
	$(this).css({background:'white'})
	$(this).children().css({color:"#4f5362"})
})
$(".ni_left li").eq(1).mouseenter(function(){
	$(".left01").attr({ src: "img/019锁定位置.png"});
})
$(".ni_left li").eq(1).mouseleave(function(){
	$(".left01").attr({ src: "img/019锁定位置 (1).png"});
})
$(".ni_left li").eq(2).mouseenter(function(){
	$(".left02").attr({ src: "img/保障 (1).png"});
})
$(".ni_left li").eq(2).mouseleave(function(){
	$(".left02").attr({ src: "img/保障.png"});
})
$(".ni_left li").eq(3).mouseenter(function(){
	$(".left03").attr({ src: "img/考试大纲.png"});
})
$(".ni_left li").eq(3).mouseleave(function(){
	$(".left03").attr({ src: "img/考试大纲 (1).png"});
})
$(".ni_left li").eq(4).mouseenter(function(){
	$(".left04").attr({ src: "img/free.png"});
})
$(".ni_left li").eq(4).mouseleave(function(){
	$(".left04").attr({ src: "img/free (1).png"});
})
$(".ni_left li").eq(5).mouseenter(function(){
	$(".left05").attr({ src: "img/学校 (1).png"});
})
$(".ni_left li").eq(5).mouseleave(function(){
	$(".left05").attr({ src: "img/学校.png"});
})
$(".ni_left li").eq(6).mouseenter(function(){
	$(".left06").attr({ src: "img/礼物.png"});
})
$(".ni_left li").eq(6).mouseleave(function(){
	$(".left06").attr({ src: "img/礼物 (1).png"});
})
var upup=document.getElementsByClassName("upup");
var updown=document.getElementsByClassName("updown");
for (var i=0;i<upup.length;i++) {
	upup[i].index=i;
	upup[i].onmouseenter=function(){
		var a=this.index;
		console.log(a);
		$(".updown").eq(a).animate({
			top:0
		},1000).animate({
			top:-19
		},200).animate({
			top:0
		},200).animate({
			top:-9
		},200).animate({
			top:0
		},200)
	}
}
//$(".upup").each(function(){
//	$(this).hover(function(){
//		var a=$(this).index();
//		console.log($(this).index());
//	//	console.log($(".zone01"));
//		$(".updown").eq(a).animate({
//			top:-19
//		},200).animate({
//			top:0
//		},200).animate({
//			top:-9
//		},200).animate({
//			top:0
//		},200)
//	})
//})


