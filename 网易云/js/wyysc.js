function lbt(){
    //首先获取各个类名
    var uli=document.querySelector(".ulli") //获取图片
    var list=uli.getElementsByTagName("li")
    
    var oli=document.querySelector(".olli") //获取小圆点
    var lis=oli.getElementsByTagName("li")

    var z=document.querySelector(".zuo")  //获取左边按钮
    var y=document.querySelector(".you")  //获取右边按钮

    var lb=document.querySelector(".lunbo")
    var index=0 //初始值为 0

    function tab(){
        for(var i=0;i<list.length;i++){
            list[i].style.display="none"
            lis[i].style.background="rgba("+0+","+0+","+0+","+0.6+")"
        }
            //显示一个
        list[index].style.display="block"
        lis[index].style.background="rgba("+0+","+0+","+0+","+0.8+")"
    }
    //点击右边按钮的时候
    y.onclick=function(){
        index++  //初始值开始加加
        if(index>list.length-1){index=0} //如果初始值大于了他的长度
        tab()
    }
    //点击左边的时候
    z.onclick=function(){
        index--  //初始值开始减减
        if(index<0){index=list.length-1} //如果初始值小于了他的长度
        tab()
    }

    //点击小圆点
    for(var i=0;i<lis.length;i++){
        lis[i].setAttribute("xb",i) //给小圆点设置自定义属性 属性的值为i
        //点击小圆点发生的事情
        lis[i].onclick=function(){
            index=this.getAttribute("xb")*1
            tab()
        }
    }

    //时间
    var tt;
    function sj(){
        clearInterval(tt)  //避免重复开启定时器
        tt=setInterval(function(){
            index++;
            if(index>list.length-1){index=0}
            //显示隐藏调用
            tab()
        },1000)
    }
    sj()

    //划出 
    lb.onmouseover=function(){clearInterval(tt)}  //关
    lb.onmouseout=function(){sj()}  //开
}
lbt()








function recmd(){
    var sz=[
        {
            "img":"imgg/5.png",
            "zt1":"H16 Pro 光感入耳检测 开盖",
            "zt2":"秒连 无线充电 蓝牙5.0真无线耳机 苹果安卓",
            "zt3":"¥229"
        },
        {
            "img":"imgg/6.png",
            "zt1":"WE BARE BEARS 咱们裸熊 ",
            "zt2":"三代无线蓝牙",
            "zt3":"¥138"
        },
        {
            "img":"imgg/7.png",
            "zt1":" 网易云音乐-玩趣黑胶短袖T恤",
            "zt2":"",
            "zt3":"¥69"
        },
        {
            "img":"imgg/25.jpg",
            "zt1":" 影巨人i36 第三代真无线 三真",
            "zt2":"电量 降噪通话 光感入耳 安卓苹果通用",
            "zt3":"¥199"
        },
        {
            "img":"imgg/9.png",
            "zt1":" 健美创研牛奶沐浴露家庭装香体持久留香滋润沐浴乳",
            "zt2":"",
            "zt3":"¥19"
        },
        {
            "img":"imgg/26.jpg",
            "zt1":" 漫步者（EDIFIER）LolliPod",
            "zt2":"皮卡丘 真无线半入耳式立体声蓝牙运动手",
            "zt3":"¥499"
        },
        {
            "img":"imgg/11.png",
            "zt1":"【正版授权】航海王XZ系列黑色T恤",
            "zt2":"",
            "zt3":"¥79"
        },
        {
            "img":"imgg/42.jpg",
            "zt1":" X9S 运动蓝牙耳机脖挂半入耳超长",
            "zt2":"待机",
            "zt3":" ¥129"
        },
    ]

    var ul=document.querySelector(".ul")
    var li=ul.getElementsByTagName("li")
    for(var i=0;i<li.length;i++){
        var s=sz[i]
        li[i].innerHTML=' <a href="#">'+
       '<img src='+s["img"]+'>'+
       ' </a>'+
        '<div class="ztbf">'+
        '<h3>'+s["zt1"]+'</h3>'+
        '<h3>'+s["zt2"]+'</h3>'+
        '<p>'+s["zt3"]+'</p>'+
        '</div>'
    }



}
recmd()

function rmsp(){
    var sz=[
        {
            "img":"imgg/20.jpg",
            "zt1":"H16 Pro 光感入耳检测 开盖",
            "zt2":"秒连 无线充电 蓝牙5.0真无线耳机 苹果安卓",
            "zt3":"¥229"
        },
        {
            "img":"imgg/21.jpg",
            "zt1":"WE BARE BEARS 咱们裸熊 ",
            "zt2":"三代无线蓝牙",
            "zt3":"¥138"
        },
        {
            "img":"imgg/22.jpg",
            "zt1":" 网易云音乐-玩趣黑胶短袖T恤",
            "zt2":"",
            "zt3":"¥69"
        },
        {
            "img":"imgg/23.jpg",
            "zt1":" 影巨人i36 第三代真无线 三真",
            "zt2":"电量 降噪通话 光感入耳 安卓苹果通用",
            "zt3":"¥199"
        },
        {
            "img":"imgg/24.jpg",
            "zt1":" 健美创研牛奶沐浴露家庭装香体持久留香滋润沐浴乳",
            "zt2":"",
            "zt3":"¥19"
        },
        {
            "img":"imgg/25.jpg",
            "zt1":" 漫步者（EDIFIER）LolliPod",
            "zt2":"皮卡丘 真无线半入耳式立体声蓝牙运动手",
            "zt3":"¥499"
        },
        {
            "img":"imgg/26.jpg",
            "zt1":"【正版授权】航海王XZ系列黑色T恤",
            "zt2":"",
            "zt3":"¥79"
        },
        {
            "img":"imgg/27.jpg",
            "zt1":" X9S 运动蓝牙耳机脖挂半入耳超长",
            "zt2":"待机",
            "zt3":" ¥129"
        },
        {
            "img":"imgg/28.jpg",
            "zt1":"H16 Pro 光感入耳检测 开盖",
            "zt2":"秒连 无线充电 蓝牙5.0真无线耳机 苹果安卓",
            "zt3":"¥229"
        },
        {
            "img":"imgg/29.jpg",
            "zt1":"WE BARE BEARS 咱们裸熊 ",
            "zt2":"三代无线蓝牙",
            "zt3":"¥138"
        },
        {
            "img":"imgg/30.jpg",
            "zt1":" 网易云音乐-玩趣黑胶短袖T恤",
            "zt2":"",
            "zt3":"¥69"
        },
        {
            "img":"imgg/31.jpg",
            "zt1":" 影巨人i36 第三代真无线 三真",
            "zt2":"电量 降噪通话 光感入耳 安卓苹果通用",
            "zt3":"¥199"
        },
        {
            "img":"imgg/32.jpg",
            "zt1":" 健美创研牛奶沐浴露家庭装香体持久留香滋润沐浴乳",
            "zt2":"",
            "zt3":"¥19"
        },
        {
            "img":"imgg/33.jpg",
            "zt1":" 漫步者（EDIFIER）LolliPod",
            "zt2":"皮卡丘 真无线半入耳式立体声蓝牙运动手",
            "zt3":"¥499"
        },
        {
            "img":"imgg/34.jpg",
            "zt1":"【正版授权】航海王XZ系列黑色T恤",
            "zt2":"",
            "zt3":"¥79"
        },
        {
            "img":"imgg/35.jpg",
            "zt1":" X9S 运动蓝牙耳机脖挂半入耳超长",
            "zt2":"待机",
            "zt3":" ¥129"
        },
        {
            "img":"imgg/36.jpg",
            "zt1":"H16 Pro 光感入耳检测 开盖",
            "zt2":"秒连 无线充电 蓝牙5.0真无线耳机 苹果安卓",
            "zt3":"¥229"
        },
        {
            "img":"imgg/37.jpg",
            "zt1":"WE BARE BEARS 咱们裸熊 ",
            "zt2":"三代无线蓝牙",
            "zt3":"¥138"
        },
        {
            "img":"imgg/38.jpg",
            "zt1":" 网易云音乐-玩趣黑胶短袖T恤",
            "zt2":"",
            "zt3":"¥69"
        },
        {
            "img":"imgg/39.jpg",
            "zt1":" 影巨人i36 第三代真无线 三真",
            "zt2":"电量 降噪通话 光感入耳 安卓苹果通用",
            "zt3":"¥199"
        },
        {
            "img":"imgg/40.jpg",
            "zt1":" 健美创研牛奶沐浴露家庭装香体持久留香滋润沐浴乳",
            "zt2":"",
            "zt3":"¥19"
        },
        {
            "img":"imgg/41.jpg",
            "zt1":" 漫步者（EDIFIER）LolliPod",
            "zt2":"皮卡丘 真无线半入耳式立体声蓝牙运动手",
            "zt3":"¥499"
        },
        {
            "img":"imgg/42.jpg",
            "zt1":"【正版授权】航海王XZ系列黑色T恤",
            "zt2":"",
            "zt3":"¥79"
        },
        {
            "img":"imgg/43.jpg",
            "zt1":" X9S 运动蓝牙耳机脖挂半入耳超长",
            "zt2":"待机",
            "zt3":" ¥129"
        },
    ]
    var uull=document.querySelector(".uull")
    var li=uull.getElementsByTagName("li")
    for(var i=0;i<li.length;i++){
        var s=sz[i]
        li[i].innerHTML=' <a href="#">'+
       '<img src='+s["img"]+'>'+
       ' </a>'+
        '<div class="ztbf">'+
        '<h3>'+s["zt1"]+'</h3>'+
        '<h3>'+s["zt2"]+'</h3>'+
        '<p>'+s["zt3"]+'</p>'+
        '</div>'
    }
}
rmsp()