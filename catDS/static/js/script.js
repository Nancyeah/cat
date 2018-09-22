//封装一个函数来代替document.getElementById()
function getId(id){
	return typeof(id) === "string"?document.getElementById(id):id;
}
console.log(document.getElementById("banner"));
//实现图片轮播效果，当鼠标滑过时停止播放（清除定时器），当鼠标离开时继续。
var timer=null,
    index=0,
    pics=getId("banner").getElementsByTagName("div"),
    //getElementsByTagName()返回的值是数组
    len=pics.length,
    dots=getId("dots").getElementsByTagName("span"),
    prev=getId("button prev"),
    next=getId("button next");
console.log(pics.length);
function controlImg(){
	var main=getId("main");
	main.onmouseover=function(){
		//鼠标滑入时清除定时器
		if(timer)
			clearInterval(timer);
	}
	main.onmouseout=function(){
		timer=setInterval(function(){
			index++;
			if(index>=len){
				index=0;
			}
		//切换图片，点击小圆点、左右按钮都能切换图片，于是封装一个函数
		changeImg();
		},1500)
	}
	//自动触发，这里是onmouseout方法，上面是事件
	main.onmouseout();

	//点击小圆点切换图片
	for(var d=0;d<len;d++){
		dots[d].id=d;
		//console.log(dots[d]);
		//函数会改变作用域，如果在下面的函数直接输出d，那么得到的d的值是3
		dots[d].onclick=function(){
			//改变index为当前span的id值
			//onclick事件绑在dots[d]上，那么this就指的是这个dots[d]对象
			index=this.id;
			changeImg();
	    }
    }

    //点击上一张下一张按钮来切换图片
    next.onclick=function(){
    	index++;
    	if(index>=len)
    		index=0;
    	changeImg();
    }
    prev.onclick=function(){
    	index--;
    	if(index<0)
    		index=len-1;
    	changeImg();
    }
}

function changeImg(){
	//第一轮之后发现所有的div元素都是block了，所以要进行for遍历元素
	//遍历所有span，让它们上的类自动清除
	for(var i=0;i<len;i++){
		pics[i].style.display="none";
		dots[i].className="";
	}
	//根据index索引找到当前div和span，将其显示出来并设为当前
	pics[index].style.display="block";
	dots[index].className="active";
}
controlImg();
export {
	controlImg
}
