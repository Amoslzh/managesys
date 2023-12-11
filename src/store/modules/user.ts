import { defineStore } from 'pinia'
import type { loginform } from '@/api/user/type'
import { reqLogin,reqUserInfo } from '@/api/user'
import routes from '@/router/routes'
const userStore = defineStore('User', {
  state:()=>{
    return{
        token:'',
        routemanu:routes,
        username:'',
        usericon:'',
    }
  },
  actions:{
    async userLogin(data:loginform){
        let res = await reqLogin(data)
        if (res.code==200) {
            this.token = <string>res.data.token
            return Promise.resolve()
        }else{
            return Promise.reject(new Error(res.data.message))
        }
    },
    async userInfo(){
      
      let res = await reqUserInfo()
      if (res.code == 200) {
        console.log(res.data.checkUser);
        let {username,avatar} = res.data.checkUser
        this.username  = username
        this.usericon = avatar
        
      } else{
        return Promise.reject(new Error(res.data.message))
      }    
    },
    userLogout(){
      //向服务器发起请求删除用户的唯一标识
      this.token=''
      this.usericon = ''
      this.username = ''
    }

  },
  persist: true,
})

export default userStore
