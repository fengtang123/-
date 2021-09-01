/*
 * @作者 张三 李四
 * @功能 提供公共方法
 * @日期 2021.6.18
*/

/*
 * @方法 $
 * @描述 根据参数来获取元素
 * @参数 css css表达式 例如：span[name=aa]
 * @参数 el 元素对象 例如：document.getElementById('aa')
 * @返回 元素 
 * @示例 $('.aa',document.getElementById('aa'))
 	$('.aa',$('#bb'))
 */
function $(css,el){
	el = el || document;
	return el.querySelector(css);
}
/*
 * @方法 _
 * @描述 根据参数来获取元素集合
 * @参数 css css表达式 例如：span[name=aa]
 * @参数 el 元素对象 例如：document.getElementById('aa')
 * @返回 元素集合 
 * @示例 _('.aa',document.getElementById('aa'))
 	_('.aa',$('#bb'))
 */
function _(css,el){
	el = el || document;
	return el.querySelectorAll(css);
}
/*
 * @方法 each
 * @描述 数组循环并执行自定义函数
 * @参数 arr 数组(包含类数组)
 * @参数 callback 回调函数
 * @返回 没有返回
 * @示例 each([1,2,3],function(el,index){
		console.log(el,index)
		//el代表元素，index代表下标
 	})
*/
function each(arr,callback){
	for(var i=0;i<arr.length;i++){
		callback(arr[i],i);
	}
}
/*
 * @方法 makeListToArray
 * @描述 将集合转换成数组
 * @参数 list 集合
 * @返回 将转换的数组返回
*/
function makeListToArray(list){
	var arr = [];
	for(var i=0;i<list.length;i++){
		arr.push(list[i]);
	}
	return arr;
}
/*
 * @方法 extend
 * @描述 将多个对象参数复制到一个对象中
 * @参数 第一个参数是目标对象，其它所有的对象都复制到这个对象中
 * @示例 extend({},{name:123},{age:21});
*/
function extend(){
	//arguments 所有的参数集合
	var arr = makeListToArray(arguments);
	var obj = arr.shift();
	var element;
	for(var i=0;i<arr.length;i++){
		element = arr[i];
		for(var index in element){
			obj[index] = element[index];
		}
	}

	return obj;
}


var cookie = {}; //定义对象
/*
	@函数 cookie.get
	@描述 根据键来获取值
	@参数 key 键
*/
cookie.get = function (key) {
	var ck = document.cookie;
	var arr = ck.split(';')
	var obj = {};
	var element;
	for (var i = 0; i < arr.length; i++) {
		element = arr[i].split('=')
		obj[element[0]] = element[1]
	}
	return obj[key] ? obj[key] : obj[' ' + key]  //如果有一个值没有空格 如果多个值有空格
}

/*
	@函数 cookie.set
	@描述 设置cookie
	@参数 key键
	@参数 value值s
*/
cookie.set = function (key, value, day) {//console.log(arguments)
	var date = new Date();  //时间
	day = day || 1;  //天
	var expires;
	date.setTime(date.getTime() + day * 24 * 60 * 60 * 1000);//设置毫秒的日期
	//一天24小时 第一个表示时间 第二个表示分钟
	expires = 'expires=' + date.toGMTString();
	document.cookie = key + '=' + value + ';' + expires + ';path=/'
}

/*
	@函数 cookie.remove
	@描述 根据键删除cookie
	@参数 key要删除的键
*/
cookie.remove = function (key) {//console.log(key)
	cookie.set(key, cookie.get(key), -1)
}



//AJAX方法
/*
		@描述 创建XMLHttpRequest
		@函数 getRequest
		@返回 XMLHttpRequest对象
*/

//前端请求的状态 readyState
//后台返回的状态 srate  200(ok)  404(请求地址不存在)  500(服务器宕机)  304(请求地址没有变化) 
//Ajax的作用 做到异步刷新 给用户更好的体验
//Ajax的原理 前端请求  后台接受处理发送，前端接收
function getRequest() {
	var xmlHttp;
	if (window.XMLHttpRequest) {
		xmlHttp = new XMLHttpRequest();
	} else {
		xmlHttp = new ActiveXObject('Microsoft.XMLHTTP')
	}
	return xmlHttp;
}

/*
	@描述 发送请求 接收数据
*/
function ajax(obj) {
	var url=obj.url,  //json路径
		method=obj.method||'GET',  //get或者post
		param=obj.param||'',  //参数
		//async必须是字符串
		async=obj.async||true;
		callback=obj.callback||function(){}; //函数表达式

	var xmlHttp = getRequest();
	xmlHttp.onreadystatechange = function () {
		if (xmlHttp.readyState === 4 && xmlHttp.status == 200) {
			//JSON.parse将字符串转为对象
			//JSON.stringify()将对象转为字符串
			if (xmlHttp.responseXML){  //xml对象
				callback(xmlHttp.responseXML);
				return
			} //xml转
			callback(JSON.parse(xmlHttp.responseText)) //传的参数  文本对象
		}
	}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
	xmlHttp.open(method, url,eval(async)) //open
	if(method==='POST'){
		//设置请求头部
		xmlHttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
	}
	xmlHttp.send(param); //参数
}


/*
	描述 加载页面 单界面
	函数 load
	参数 obj 里面包括 obj.el  el代表元素对象 
	参数 obj.url 代表地址
	示例 load({
		el:$('#id')
		url:'地址'
	})
*/
function load(obj){
	var el=obj.el; //对象 div之类的
	var url=obj.url; //地址
	var xmlHttp = getRequest();
	xmlHttp.onreadystatechange = function () {
		if (xmlHttp.readyState === 4 && xmlHttp.status == 200) {
			el.innerHTML=xmlHttp.responseText;  //对象的内容是 转换陈text
		}	
	}
	xmlHttp.open('GET', url, true)
	//xmlHttp.href='txt.txt'
	xmlHttp.send();
}
