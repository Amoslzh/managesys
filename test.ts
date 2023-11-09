function getcntime(){
    let msg = ''
    let nowtime = new Date().getHours()
    if (nowtime >5 && nowtime <=10) {
        msg = '早上好'
    }
    else if (nowtime <13 ) {
        msg = '中午好'
    }
    else if (nowtime <24 ) {
        msg = '晚上好'
    } else {
        msg = "深夜了,注意休息"
    }
    
    return msg
}

console.log(getcntime());