# date.js
Date()函数扩展
<br>
## demo
<script src="../date.min.js"></script><br>
var time = new Date();<br>
var content="";<br>
content+="当前时间："+time+<br>
         "<br>格式化："+time.format("YYYY-MM-DD hh:mm:ss")+<br>
         "<br>是否闰年："+time.isLeap()+<br>
         "<br>加一天："+time.add(1,"day").format("YYYY-MM-DD")+<br>
         "<br>加一年："+time.add(1,"year").format("YYYY-MM-DD")+<br>
         "<br>减三月："+time.sub(3,"month").format("YYYY-MM-DD")+<br>
         "<br>星期："+time.getWeek()+<br>
         "<br>周："+time.getWeek(1)+<br>
         "<br>week："+time.getWeek(2);<br>
document.getElementById("demo").innerHTML=content;<br>

## 输出
当前时间：Thu Sep 08 2016 15:26:11 GMT+0800 (中国标准时间)<br>
格式化：2016-9-8 15:26:11<br>
是否闰年：true<br>
加一天：2016-9-9<br>
加一年：2017-9-9<br>
减三月：2017-6-9<br>
星期：星期五<br>
周：周五<br>
week：Friday<br>
