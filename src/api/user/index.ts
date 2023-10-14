//用户管理接口

import request from "@/utils/request";
import type { loginform,loginres,userinfores } from "./type";

enum API{
    LOGIN_URL = "/user/login",
    USERINFO_URL =  "/user/info"
}


export const reqLogin = (data:loginform)=>request.post<any,loginres>(API.LOGIN_URL,data)

export const reqUserInfo = ()=>request.post<any,userinfores>(API.USERINFO_URL)