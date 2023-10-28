import { defineStore } from 'pinia'
import type { loginform } from '@/api/user/type'
import { reqLogin } from '@/api/user'
const userStore = defineStore('User', {
  state:()=>{
    return{
        token:''
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
    }
  },
  persist: true,
})

export default userStore
