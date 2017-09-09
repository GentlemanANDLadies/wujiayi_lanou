var z=1;
var arr=["18","-19","-22","20","-4","-29","6"];
var img11=document.getElementsByClassName("img11");
for(var i=0;i<img11.length;i++){
	img11[i].index=i;
	img11[i].onclick=function(){
		if(img11[this.index].offsetLeft==0){
			img11[this.index].style.transform="rotate(0deg)";
			img11[this.index].style.left="410px";
			img11[this.index].style.zIndex=z;
			z++;
		}else{
			img11[this.index].style.transform="rotate("+arr[this.index]+"deg)";
			img11[this.index].style.left="0";
			img11[this.index].style.zIndex=z;
			z++;
		}
	}
}
$("#title li").click(function(){
	$("#title li").css({
		color:"#444444",
		borderBottom:"0"
	})
	$("#listcontent ul").css({
		display:"none"
	})
	$(this).css({
		color:"#ff3f52",
		borderBottom:"4px solid #ff3146"
	})
	$("#listcontent ul").eq($(this).index()).css({
		display:"block"
	})
	$("#listcontent ul").eq($(this).index()).css({
		top:"0"
	})
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




















