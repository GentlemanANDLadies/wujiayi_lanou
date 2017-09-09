$(".ul_tit li").mouseenter(function(){
	$(".act").css({display:"none"});
	$(".ul_teas").css({display:"none"});
	$(".act").eq($(this).index()).css({display:"block"});
	$(".ul_teas").eq($(this).index()).css({display:"block"});
})
