$(".li1").css({
		color:"#ffffff",
		background:"#36a8ff",
		borderBottom:"1px solid #36a8ff"
	})
$(".ul1 li").click(function(){
	$(".ul1 li").css({
		color:"#36a8ff",
		background:"#eeeeee",
		borderBottom:"1px solid #cccccc"
	})
	
	$(this).css({
		color:"#ffffff",
		background:"#36a8ff",
		borderBottom:"1px solid #36a8ff"
	})
})
$("#ipname").focus(function(){
	$(this).css({
		border:"solid 1px rgb(68,146,200)"
	})
	$(".error1").css({
		display:"none"
	})
})
$("#ipname").blur(function(){
	$(this).css({
		border:"1px solid rgb(204, 204, 204)"
	})
})
$("#iptele").focus(function(){
	$(this).css({
		border:"solid 1px rgb(68,146,200)"
	})
})
$("#iptele").blur(function(){
	$(this).css({
		border:"1px solid rgb(204, 204, 204)"
	})
})
$("#ipadd").focus(function(){
	$(this).css({
		border:"solid 1px rgb(68,146,200)",
		outline:"none"
	})
})
$("#ipadd").blur(function(){
	$(this).css({
		border:"1px solid rgb(204, 204, 204)"
	})
	if(!$(this).val()){
		$(".error2").css({
			display:"block"
		})
	}
})
$("#ipqq").focus(function(){
	$(this).css({
		border:"solid 1px rgb(68,146,200)"
	})
})
$("#ipqq").blur(function(){
	$(this).css({
		border:"1px solid rgb(204, 204, 204)"
	})
})
$("#ipsubmit").click(function(){
	if(!$("#ipname").val()){
		$(".error1").css({
			display:"block"
		})
	}
})
//二级菜单
$(".ul2 li").css({
	display:"none"
})
$(".li11").css({
	display:"block"
})
$(".ul1 li").click(function(){
	$(".ul2 li").css({
		display:"none"
	})
	$(".ul2 li").eq($(this).index()).css({
		display:"block"
	})
})
















