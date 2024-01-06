let p = new Promise((res,reject)=>{
    res(1)
})

p.then((res)=>{
    return Promise.reject('cao')
}).then((res)=>{
    console.log('ss',res);
},(rson)=>{
    console.log('shule',rson);
})