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




$(window).scroll(function(){
	if($(window).scrollTop()>=600){
		$("#return").css({display:"block"})
	}else{
		$("#return").css({display:"none"})
	}
})
var bol=true;
$("#doyoo_min").click(function(){
	if(bol){
		$("#doyoo_chat").css({bottom:"0px",right:"0"})
		bol=false;
	}else{
		$("#doyoo_chat").css({bottom:"-368px"});
		bol=true;
	}
})
$("#doyoo_close").click(function(){
	$("#doyoo_chat").css({display:"none"});
})


var box=document.getElementById("doyoo_title");
var box1=document.getElementById("doyoo_chat");
box.onmousedown=function(e){
	var ev=window.event||e;
	var _left=box1.offsetLeft;
	var _top=box1.offsetTop;
	document.onmousemove=function(e1){
		var ev1=window.event||e1;
		box1.style.left=ev1.clientX-ev.clientX+_left+"px";
		box1.style.top=ev1.clientY-ev.clientY+_top+"px";
	}
}
box.onmouseup=function(){
	document.onmousemove=null;
}