Date.prototype.format=function(type){
    if(type){
        return type.replace(/Y+/,this.getFullYear()).replace(/M+/,+this.getMonth()+1).replace(/D+/,this.getDate()).replace(/h+/,this.getHours()).replace(/m+/,this.getMinutes()).replace(/s+/,this.getSeconds());
    }
}
Date.prototype.getWeek=function(type){
    var week = {
        "0":{         
            "0" : "星期天",     
            "1" : "星期一",         
            "2" : "星期二",         
            "3" : "星期三",         
            "4" : "星期四",         
            "5" : "星期五",         
            "6" : "星期六"
        },
        "1":{
            "0" : "周日",     
            "1" : "周一",         
            "2" : "周二",         
            "3" : "周三",         
            "4" : "周四",         
            "5" : "周五",         
            "6" : "周六"
        },
        "2":{
            "0" : "Sunday",     
            "1" : "Monday",         
            "2" : "Tuesday",         
            "3" : "Wednesday",         
            "4" : "Thursday",         
            "5" : "Friday",         
            "6" : "Saturday"
        }
    };
    type?"":type="0";
    return week[type][this.getDay()];
}
Date.prototype.isLeap=function(){
    var y=+this.getFullYear();
    return !(y % (y % 100 ? 4 : 400));
}
Date.prototype.add=function(num,type){
    if(!num){
        return this; 
    }
    switch(type){
        case "year":
            this.setFullYear(+this.getFullYear()+num);
            break;
        case "month":
            this.setMonth(+this.getMonth()+num);
            break;
        case "day":
            this.setDate(+this.getDate()+num);
            break;
        case "hour":
            this.setHours(+this.getHours()+num);
            break;
        case "minute":
            this.setMinutes(+this.getMinutes()+num);
            break;
        case "second":
            this.setSeconds(+this.getSeconds()+num);
            break;
        case "ms":
            this.setMilliseconds(+this.getMilliseconds()+num);
            break;
    }
    return this;
}
Date.prototype.sub=function(num,type){
    if(!num){
        return this; 
    }
    switch(type){
        case "year":
            this.setFullYear(+this.getFullYear()-num);
            break;
        case "month":
            this.setMonth(+this.getMonth()-num);
            break;
        case "day":
            this.setDate(+this.getDate()-num);
            break;
        case "hour":
            this.setHours(+this.getHours()-num);
            break;
        case "minute":
            this.setMinutes(+this.getMinutes()-num);
            break;
        case "second":
            this.setSeconds(+this.getSeconds()-num);
            break;
        case "ms":
            this.setMilliseconds(+this.getMilliseconds()-num);
            break;
    }
    return this;
}