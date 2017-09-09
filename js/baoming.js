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

//查找
var ipadd=document.getElementById("ipadd");
var ipxueke=document.getElementById("ipxueke");
var search=document.getElementById("search");
var td1=document.getElementsByClassName("td1");
var td2=document.getElementsByClassName("td2");
search.onclick=function(){
	var a=ipadd.value;
	var b=ipxueke.value;
	for(var i=0;i<td2.length;i++){
		td2[i].index=i;
		td2[i].parentNode.style.display="none";
		if(td2[i].innerHTML==a&&td1[i].innerHTML==b){
			td2[i].parentNode.style.display="block";
		}
		if(td2[i].innerHTML==a&&b=="全部学科"){
			td2[i].parentNode.style.display="block";
		}
		if(a=="全部校区"&&td1[i].innerHTML==b){
			td1[i].parentNode.style.display="block";
		}
		if(a=="全部校区"&&b=="全部学科"){
			td2[i].parentNode.style.display="block";
		}
	}
}

























