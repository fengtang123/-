
// 头部中间的字体部分
function a(){
    // 获取头部的id
    var head=document.getElementById("new-head")
    //获取头部的 li
    var li=head.getElementsByTagName("li")
    var aa=head.getElementsByTagName("a")
    li[0].style.background = 'red'
    for(var i=0;i<li.length;i++){
        st(i)
    }
    function st(a){
        li[a].onclick=function(){
        for(var i=0;i<li.length;i++){
            li[i].style.background= ""
            aa[i].style.color=""
        }
        li[a].style.background="red"
        aa[a].style.color="#fff"
        }
    }
} 

a()

// 推荐一行的开始的js
function b(){
        //获取li的id
        var nav2=document.getElementById("g_nav2")
        var list=nav2.getElementsByTagName("li")
        var aa=nav2.getElementsByTagName("a")
        for(var i=0;i<list.length;i++){
            st(i)
        }
        function st(a){
            //点击事件
            list[a].onclick=function(){
                //先清空背景颜色
                for(var i=0;i<list.length;i++){
                    aa[i].style.background=""
                }
                aa[a].style.background="rgba("+0+","+0+","+0+","+0.2+")"
            }
        }
}
b()

// 轮播图的开始
// 首先获取id
function lbt(){
    var lbt=document.getElementById("lpt")
    // 随机事件
    function random(min,max){
        return Math.floor(Math.random()*(max-min+1)+min)
    }
    //随机颜色
    function rgba(){
        var r,g,b,a
        r=random(0,255)
        g=random(0,255)
        b=random(0,255)
        a=Math.random()
        return "rgba("+r+","+g+","+b+","+a+")"
    }
    // 时间事件的开始
    setInterval(function(){
        lbt.style.background=rgba();
    },3000)
}
lbt()



//轮播图的开始
function lbtp(){
    //获取名字
    var img=document.querySelectorAll(".img li")  //获取img的li
    var oli=document.querySelectorAll(".oli li")  //获取小圆点的li
    var z=document.querySelector(".z")  //获取左边的按钮
    var y=document.querySelector(".y")  //获取右边的按钮

    var index=0  //下标
    //清空
    function xsyc(){
    for(var i=0;i<img.length;i++){
        img[i].style.display="none"  //首先全部隐藏
        oli[i].style.background="rgba("+0+","+0+","+0+","+0.2+")"
    }
    img[index].style.display="block"  //先展示出来li的第 i 项目
    oli[index].style.background="rgba("+0+","+0+","+0+","+0.6+")"
}

//点击事件的发生
    z.onclick=function(){
        index--  //点击一次 下标开始减减
        if(index<0){index=img.length-1}
        xsyc()
    }
    y.onclick=function(){
        index++  //点击一次 下标开始加加
        if(index>img.length-1){index=0}
        xsyc()
    }

    //点击小圆点发生的事件
    for(var i=0;i<oli.length;i++){
        //点击那个那个执行
        //自定义属性到小圆点上
        oli[i].setAttribute("xb",i)  //自定义取名下标 是 此时的i
        //点击事件发生
        oli[i].onclick=function(){
            index=this.getAttribute("xb")*1 //获取下标 点击 指向 小圆点
            xsyc()  //调用显示隐藏
        }
    }
    //时间的执行
    var tt;
    function time(){
        clearInterval(tt)  //先关闭tt
        tt=setInterval(function(){
            index++  //点击一次 下标开始加加
            if(index>img.length-1){index=0}
            xsyc()
            },3000)
    }
    time()  
    var btm=document.querySelector(".ban-img")
    //划入划出
    btm.onmouseover=function(){clearInterval(tt)}  //划入时关闭tt
    btm.onmouseout=function(){time()}  //划走时 开启tt
}
lbtp()



//热门推荐的下半部分
function rmtj(){
    //首先获取id
    var crvlst=document.getElementById("m-cvrlst")
    //获取id里面的li
    var lis=crvlst.getElementsByTagName("li")
    var sz=[
        {
            "img":"img/11.jpg",
            "rs":"14万",
            "wz":"深海迷航 | 光明的最终归宿"
        },
        {
            "img":"img/12.jpg",
            "rs":"1.5万",
            "wz":"经典武侠影视金曲丨重温你的武侠梦"
        },
        {
            "img":"img/13.jpg",
            "rs":"15万",
            "wz":"【流行热歌】那些一夜火爆的歌曲 "
        },
        {
            "img":"img/14.jpg",
            "rs":"4639",
            "wz":" 张赫宣X亢竹青-朱自清散文《春》 "
        },
        {
            "img":"img/15.jpg",
            "rs":"350万",
            "wz":"季节轮换 你也会随着时间把我淡忘 "
        },
        {
            "img":"img/16.jpg",
            "rs":"2976",
            "wz":" 妈妈，是我永远的守护神#软肋与铠甲# "
        },
        {
            "img":"img/17.jpg",
            "rs":"8899",
            "wz":"你-总是有各种理由让我放弃你☹ "
        },
        {
            "img":"img/18.jpg",
            "rs":"701万",
            "wz":" 在心动的期限里无限想你"
        }
    ]
    for(var i=0;i<lis.length;i++){
            var s=sz[i] //临时存储到s
            lis[i].innerHTML='<div class="cvr-img">'+
            '<img src='+s.img+'>'+
            '<div class="cvr-bfl">'+
                '<span class="ej fl"></span>'+
                '<span class="rs fl">'+s.rs+'</span>'+
                '<span class="bf fr"></span>'+
            '</div>'+
        '</div>'+
        '<p class="cvr-p">'+s.wz+'</p>'
    }
}
rmtj()   

//新碟上架的开始部分
function xdsj(){
    var arr=[
        {
            "img":"img/19.jpg",
            "p1":"不加糖(ZERO)",
            "p2":"白敬亭"
        },
        {
            "img":"img/20.jpg",
            "p1":"Higher Power",
            "p2":"Coldplay"
        },
        {
            "img":"img/21.jpg",
            "p1":"Run",
            "p2":"OneRepublic"
        },
        {
            "img":"img/22.jpg",
            "p1":"Your Power",
            "p2":"Billie Eilish"
        },
        {
            "img":"img/23.jpg",
            "p1":"Walpurgis",
            "p2":"Aimer"
        }
    ]

    var list=document.querySelectorAll(".zyhr1 li")
    var zyhr1=document.getElementsByClassName("zyhr1")[0]
    for(var i=0;i<list.length;i++){
        var s=arr[i]
        list[i].innerHTML='<div><img src='+s["img"]+'></div>'+
        '<p class="p1">'+s["p1"]+'</p>'+
        '<p class="p2">'+s["p2"]+'</p>'
    }

    // 2222222222222222
    var sz=[
        {
            "img":"img/24.jpg",
            "p1":"青春的模样",
            "p2":"王一博"
        },
        {
            "img":"img/25.jpg",
            "p1":"Electric",
            "p2":"Katy Perry"
        },
        {
            "img":"img/26.jpg",
            "p1":"呼吸之野",
            "p2":"许嵩"
        },
        {
            "img":"img/27.jpg",
            "p1":"A Page",
            "p2":"宋雨琦"
        },
        {
            "img":"img/28.jpg",
            "p1":"环绕",
            "p2":"张哲瀚"
        }
    ]

    var list2=document.querySelectorAll(".zyhr2 li")
    var zyhr2=document.getElementsByClassName("zyhr2")[0]
    for(var i=0;i<sz.length;i++){
        var s=sz[i]
        list2[i].innerHTML='<div><img src='+s["img"]+'></div>'+
        '<p class="p1">'+s["p1"]+'</p>'+
        '<p class="p2">'+s["p2"]+'</p>'
    }

    //点击事件
    var z=document.querySelector(".truefl")
    var y=document.querySelector(".truefr")
    z.onclick=function(){
        zyhr1.style.display="none"
        zyhr2.style.display="block"
    }
    y.onclick=function(){
        zyhr2.style.display="none"
        zyhr1.style.display="block"
    }
}
xdsj()

function bd(){
    //获取li
    var ul_1=document.querySelectorAll(".bill-ul1")[0]
    var ul_2=document.querySelectorAll(".bill-ul1")[1]
    var ul_3=document.querySelectorAll(".bill-ul1")[2]
    var li_2=ul_2.getElementsByTagName("li")
    var li_3=ul_3.getElementsByTagName("li")
    var li_1=ul_1.getElementsByTagName("li")

    
    var sz1=[
        {
            "spa1":"1",
            "spa2":"Butter"
        },
        {
            "spa1":"2",
            "spa2":"不舍"
        },
        {
            "spa1":"3",
            "spa2":"还是会想你"
        },
        {
            "spa1":"4",
            "spa2":"★kiss me baby☆（吻我，宝）"
        },
        {
            "spa1":"5",
            "spa2":"Mood (Lil Ghost Remix)"
        },
        {
            "spa1":"6",
            "spa2":"这世界那么多人"
        },
        {
            "spa1":"7",
            "spa2":"Blue Banisters"
        },
        {
            "spa1":"8",
            "spa2":"Wildflower Wildfire"
        },
        {
            "spa1":"9",
            "spa2":"Butter (Instrumental)"
        },
        {
            "spa1":"10",
            "spa2":"爱情慢慢来"
        }
    ]

    var sz2=[
        {
            "spa1":"1",
            "spa2":"Mood (Lil Ghost Remix)"
        },
        {
            "spa1":"2",
            "spa2":"海底（Live）"
        },
        {
            "spa1":"3",
            "spa2":"Butter"
        },
        {
            "spa1":"4",
            "spa2":"跨过山海"
        },
        {
            "spa1":"5",
            "spa2":"不舍"
        },
        {
            "spa1":"6",
            "spa2":"青春的模样"
        },
        {
            "spa1":"7",
            "spa2":"最好的都给你"
        },
        {
            "spa1":"8",
            "spa2":"恋爱画板"
        },
        {
            "spa1":"9",
            "spa2":"冰柜"
        },
        {
            "spa1":"10",
            "spa2":"各自快乐"
        }
    ]
    var sz3=[
        {
            "spa1":"1",
            "spa2":"孤影"
        },
        {
            "spa1":"2",
            "spa2":"听书"
        },
        {
            "spa1":"3",
            "spa2":"你是我的遗憾"
        },
        {
            "spa1":"4",
            "spa2":"是你吗"
        },
        {
            "spa1":"5",
            "spa2":"没你想的那么好"
        },
        {
            "spa1":"6",
            "spa2":"脸红"
        },
        {
            "spa1":"7",
            "spa2":"身边"
        },
        {
            "spa1":"8",
            "spa2":"摇摆之夜"
        },
        {
            "spa1":"9",
            "spa2":"落"
        },
        {
            "spa1":"10",
            "spa2":"漩涡"
        }
    ]
    for(var i=0;i<li_1.length;i++){
        if(i%2==0){
            li_1[i].style.background="#e8e8e8"
        }else{
            li_1[i].style.background="#f4f4f4"
        }
    var s=sz1[i]
    li_1[i].innerHTML='<span class="spa1">'+s["spa1"]+'</span>'+
    '<span class="spa2">'+s["spa2"]+'</span>'+
    '<img src="img/31.png" alt="">'
    }

    for(var i=0;i<li_2.length;i++){
        if(i%2==0){
            li_2[i].style.background="#e8e8e8"
        }else{
            li_2[i].style.background="#f4f4f4"
        }
        var s=sz2[i]
        li_2[i].innerHTML='<span class="spa1">'+s["spa1"]+'</span>'+
        '<span class="spa2">'+s["spa2"]+'</span>'+
        '<img src="img/31.png" alt="">'
        }

        for(var i=0;i<li_3.length;i++){
            if(i%2==0){
                li_3[i].style.background="#e8e8e8"
            }else{
                li_3[i].style.background="#f4f4f4"
            }
            var s=sz3[i]
            li_3[i].innerHTML='<span class="spa1">'+s["spa1"]+'</span>'+
            '<span class="spa2">'+s["spa2"]+'</span>'+
            '<img src="img/31.png" alt="">'
            }
}
bd()

// 右侧的上半部分
function rzgs(){
    //数组
    var sz=[
        {
            "img":"img/32.jpg",
            "zt1":"张惠妹aEMI",
            "ztw":"台湾歌手张惠妹"
        },
        {
            "img":"img/33.jpg",
            "zt1":"Fine乐团",
            "ztw":"独立音乐人"
        },
        {
            "img":"img/34.jpg",
            "zt1":"萬曉利",
            "ztw":"民谣歌手、中国现代民谣的代表人物之一"
        },
        {
            "img":"img/35.jpg",
            "zt1":"音乐人赵雷",
            "ztw":"民谣歌手"
        },
        {
            "img":"img/36.jpg",
            "zt1":"王三溥",
            "ztw":"音乐人"
        }
    ]

       //获取类名
       var li=document.querySelectorAll(".rzgs ul li")
        for(var i=0;i<li.length;i++){
            var s=sz[i]
            li[i].innerHTML='<div class="fl div1">'+
            '<img src='+s["img"]+'>'+
            '</div>'+
            '<div class="fl div2">'+
                '<h4>'+
                s["zt1"]+
                '</h4>'+
                '<p>'+s["ztw"]+'</p>'+
        '</div>'
        }
}
rzgs()

//播放器的开始
function bfq(){
    //获取标签名
    var k=document.querySelector(".play")  //点击这个
    var g=document.querySelector(".play1")  //点击这个
    var xyd=document.querySelector(".xyd")
    //代表音乐的总长度
		var len = 237;
		//当前的音乐时间
		var now = 0;
		//进度条的总宽度
		var jdLen = 608;
		//进度的宽度
		var jdw = now/len*jdLen;
    var t;
    g.onclick=function(){
        g.style.display="none"
        k.style.display="block"
        clearInterval(t)
        t=setInterval(function(){
           
            now = now>len?len:now;
            jdw = now/len*jdLen;
			//3-修改进度条的宽度
			xyd.style.width= jdw+"px";
            now += 1
            if(now>=len){
                now =0;
                xyd.style.width= 0+"px";
                clearInterval(t) 
                //切换图标
            }
        },100)
    }
    k.onclick=function(){
        clearInterval(t)
        g.style.display="block"
        k.style.display="none"
    }

    var suo=document.querySelector(".suo")  //点击这个
    var bfq=document.querySelector(".bfq")  //点击这个
    var kai=document.querySelector(".kai")  //点击这个
    suo.onclick=function(){
        bfq.style.margin=0
        bfq.style.transition="4s"
    }
    kai.onclick=function(){
        bfq.style.marginBottom="-49px"
        bfq.style.transition="4s"
    }
}
bfq()

//限制范围的拖拽
function tz(){
    var  tzz= document.querySelector('.m-layer')
    var dx,dy;
    tzz.onmousedown=function(e){ //鼠标按下
        dx = e.pageX - tzz.offsetLeft;
        dy = e.pageY - tzz.offsetTop;
        tzz.onmousemove=function(e){
            tzz.style.left=e.pageX-dx+'px'
            tzz.style.top=e.pageY-dy+'px'
            if (tzz.offsetLeft<0){
                tzz.style.left=0
            }
            if (tzz.offsetTop < 0) {
                tzz.style.top = 0
            }
            if (tzz.offsetLeft > 1800 - tzz.offsetWidth) {
                tzz.style.left = 1800 - tzz.offsetWidth + 'px';
            }
            if (tzz.offsetTop > 1900 - tzz.offsetHeight) {
                tzz.style.top = 1900 - tzz.offsetHeight + 'px';
            }
        }
        tzz.onmouseup=function(e){
            var target = e.target;
            tzz.onmousemove = null;
            if (!target.nodeName === 'DIV') {
                tzz.onmousemove = null;
                tzz.onmousedown = null;
            }
        }
    }
}
tz()
function dlwz(){
    var ul=document.querySelector('.u-alt ul')
    var wz=[
        {
            font:'微信登录',
            urlimg: 'url("img/logo.png") no-repeat -151px -669px'
        },
        {
            font: 'QQ登录',
            urlimg: 'url("img/logo.png") no-repeat -192px -669px'
        },
        {
            font: '微博登录',
            urlimg: 'url("img/logo.png") no-repeat -232px -669px'
        },
        {
            font: '网易云邮箱帐号登录',
            urlimg: 'url("img/logo.png") no-repeat -271px -669px'
        }
    ]

    for(var i=0;i<wz.length;i++){
       var str =`<li>
                <a href="#">
                    <i style='background:${wz[i].urlimg}'></i>
                    ${wz[i].font}
                    </a>
                </li>`
        ul.innerHTML += str
    }
}
dlwz()

//登录的开始
function dl(){
    var zcls = document.querySelector('.zcls')
    var m_layer = document.querySelector('.m-layer')
    //关闭
    zcls.onclick=function(){
        m_layer.style.display='none'
    }
    //登录
    var m_bottom = document.querySelector('.m-bottom') 
    var checkbox = document.querySelector('input[name=chebox]')
    m_bottom.onclick=function(e){
        var ck = document.querySelector('input[name=chebox]:checked')
        var target=e.target;
        if(target.nodeName==='BUTTON'){
            if(target.name==='phone'){
                if (ck) {
                    $('.phone-layer').style.display = 'block'
                    $('.m-layer').style.display = 'none'
                }else{
                    var sh;
                    document.querySelector('.tishi').style.display = 'block'
                    clearInterval(sh)
                    sh = setTimeout(function(){
                            document.querySelector('.tishi').style.display = 'none'              
                    },4000);  
                }
                
            }
            if (target.name === 'zc') {
                if (ck) {
                    $('.phone-layer').style.display = 'block'
                    $('.m-layer').style.display = 'none'
                } else {
                    //提示
                    var sh;
                    document.querySelector('.tishi').style.display = 'block'
                    clearInterval(sh)
                    sh = setTimeout(function () {
                        document.querySelector('.tishi').style.display = 'none'
                    }, 4000);
                }
            }
        }
    }

}
dl()

function zz(){
    var dlcg=$('[name=dlcg]')
    var sr_sjh=$('[name=sr_sjh]')
    var sr_password=$('[name=sr_password]')
    var yzm = $('.yzm')
    var obj=[
        {
            phone:15835975015,
            data:'无情'
        },
        {
            phone:19835030811,
            data:'无味'
        },
    ]
    //正则表达式
    sr_sjh.onkeyup = function () {
        var reg = /[^\d\.]/g
        sr_sjh.value = sr_sjh.value.replace(reg, '')
    }
    //验证码的运用
        yzm.onclick=function(){
            function random(min, max) {
                return Math.floor(Math.random() * (max - min + 1) + min)
            }

            var arrs = [];
            for (var i = 48; i <= 122; i++) {  //写出编出所对应的序号
                if (i >= 48 && i <= 57 || i >= 65 && i <= 90 || i >= 97 && i <= 122) {
                    arrs.push(String.fromCharCode(i))  //将对应的编码转换成字符
                }
            }
            //随机排序
            var sz = [];
            while (sz.length < 4) {
                var sj = random(0, arrs.length - 1)
                sz.push(arrs[sj])
                var hbsz = sz.join('')
            }
            yzm.innerText=hbsz 
        }
        //改变登录状态
    dlcg.onclick=function(){
        for(var i=0;i<obj.length;i++){
            if (sr_sjh.value == obj[i].phone && sr_password.value == yzm.innerText) {
                $('.phone-layer').style.display='none'
                $('.dl').innerText=obj[i].data
                $('.dl').style.color='#fff'
            }
        }
    }

    $('.zcls2').onclick=function(){
        $('.phone-layer').style.display='none'
    }
    $('.a_1').onclick=function(){
        $('.phone-layer').style.display = 'none'
        $('.m-layer').style.display = 'block'
    }
    $('.dll').onclick=function(){
        $('.m-layer').style.display = 'block'
    }
}
zz()

//可视化区域
var ksh=$('.xzkh')
ksh.onclick=function(){
    $('.kshqy').style.display='none'
    $('#container').style.display='block'
    $('#contaainer').style.display = 'block'
}
var fxyy = $('.fxyy')
fxyy.onclick = function () {
    $('#container').style.display = 'none'
    $('#contaainer').style.display = 'none'
    $('.kshqy').style.display = 'block'
}
var gb = $('.highcharts-axis-labels')
var gbb=$('.highcharts-legend-item text')
var gbbb = $('.highcharts-legend-item')
var tt = true;
gbbb.onclick=function(){
    if (tt) {
        gbb.innerHTML = '展开';
        tt = false;
    } else{
        tt=true;
        gbb.innerHTML='折起'
    }
}

var t=gb.children
t[0].innerHTML='2013年'
t[1].innerHTML='至今'

//划入到时
var bttm = $('#buttom .n-new')
var fhdb = $('.fhdb')
window.onscroll=function(){
    var top = document.documentElement.scrollTop //滚进去的高度
    if(top>=bttm.offsetTop){
        fhdb.style.display='block'
    }else{
        fhdb.style.display='none'
    }
}