function change(){
	var str="";
	var id=document.getElementById("test");
	str=id.innerHTML;
	if(str=="点击"){
		id.innerHTML=str+"<br>请再点击";
	}else if(str=="点击<br>请再点击"){
		id.innerHTML=str+"<br>请再点击一次";
	}else if(str=="点击<br>请再点击<br>请再点击一次"){
		id.innerHTML=str+"<br>谢谢";
	}else if(str=="点击<br>请再点击<br>请再点击一次<br>谢谢"){
		id.innerHTML="再见";
	}else{
		id.style.display="none";
	}
}
