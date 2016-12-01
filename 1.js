var xx=document.getElementById('btn2');
var bawei=document.getElementById('btn1');
var iamge=document.getElementById('cartoon');
xx.onclick=function() 
{
	cartoon.setAttribute("src","images/xx.png");
	xx.style.background="url(images/btn-blue.png)";
	bawei.style.background="url(images/btn-gray.png)";
	document.body.style.background="url(\"images/xx-bg.png\")";
}
bawei.onclick=function() 
{
	cartoon.setAttribute("src","images/bw.png");
	bawei.style.background="url(images/btn-blue.png)";
	xx.style.background="url(images/btn-gray.png)";
	document.body.style.background="url(\"images/bw-bg.png\")";
}