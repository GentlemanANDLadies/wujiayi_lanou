//底部事件
$("#checkCity").mouseenter(function(){
			$("#select").css({display:"block",opacity: 1});
		})
		$("#checkCity").mouseleave(function(){
			$("#select").css({display:"none",opacity: 0});
		})
		$(".fl").mouseenter(function(){
			$(this).children().children().last().css({background:"rgb(15,139,228)",color:"white"})
		})
		$(".fl").mouseleave(function(){
			$(this).children().children().last().css({color:"rgb(51, 51, 51)",background:"rgb(233, 233, 233)"})
		})
		
//头部导航栏点击事件
$(".dropdown-toggle").click(function(){
	$(".dropdown-menu").toggle(500,"linear");
})
//$(".navBtn").click(function(){
//	$(".navbar-sider").toggle();
//})
//	$(".navBtn").data("isClick","true")

$(".nav-left").css({display:"none",width:0,overflow:"hidden"});

$(".navBtn").click(function(){	
	if($(".nav-left").hasClass("show")){

		$(".nav-left").animate({width:0},100,"linear",function(){
			$(".nav-left").hide();
		});
		$(".body-right").animate({left:0},100,"linear");
		$(".nav-left").removeClass("show");
		
	}else{
		$(".nav-left").show();
		$(".nav-left").animate({width:200},100,"linear");
		$(".body-right").animate({left:200},100,"linear");		
		$(".nav-left").addClass("show")
	}	
	  });
	
	
	
	
	
	
//录播优选课程选择
$("#optimize li").hover(function(){
	if(!$(this).hasClass("on")){

		$(this).addClass("Grey") 
	}else{
		$(this).removeClass("Grey") 
	}
},function(){
	
		$(this).removeClass("Grey");
})

$("#optimize li").click(function(){
//  $(this).addClass("on").css("background","cornflowerblue").siblings().css("background","white").removeClass("on");
    $(this).addClass("on").siblings().removeClass("on");
    var index = $(this).index();
    $(".sd").eq(index).show().siblings().hide();
});
//


//轮播图部分
var num = 0;
var timer = setInterval(function(){
	if(num>4){
		num = 0;
	}
	 $(".slider").css({left:-num*$(".swiper>.slider>li").width()});
	 $(".swiper>.btns>li").removeClass("btnsCss");
	 $(".swiper>.btns>li:eq(" + num +")").addClass("btnsCss");
	num++;
	},2000)

$(".btns").children().on("click",function(){
	 $(".swiper>.btns>li").removeClass("btnsCss");
	 $(this).attr("class","btnsCss" );
	num = $(this).index()
	$(".slider").css({
		left:$(this).index()*-$(".swiper>.slider>li").width(),
	})
})


////微信hover事件
//$(".weixin").hover(function(){
//	$(".weixinMa").show(100);
//},function(){
//	$(".weixinMa").hide(100);
//})
$(".weixinMa").css({"transform":"scale(0.01,0.01)"});
$(".weixin").hover(function(){
	$(".weixinMa").show(100);
	$(".weixinMa").css({"transform":"scale(1,1)"});
},function(){
	$(".weixinMa").css({"transform":"scale(0.01,0.01)"});
})

$(".teacher-block").hover(function(){
	$(this).find("p").hide();
	$(this).find(".teacher-conta").show();
},function(){
	$(this).find("p").show();
	$(this).find(".teacher-conta").hide();
	
})
var clickBool= false;

//热门优选课点击事件
window.onresize = function(){
	if(window.innerWidth<800){
		clickBool= true;
	}else{
		clickBool= false;
	}
	 
	 
}
 $(".hide").css({"display":"none"});

 setInterval(function(){
	if(clickBool){
		$("#optimize").children().first().addClass("on");
		$(".on").click(function(){
	       $(".hide").toggle();
         })
		
	}
	
},10);


 


