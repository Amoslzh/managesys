export interface loginform {
  username: string;
  password: string;
}

export interface loginres {
  code: number;
  data: {
    token?: string;
    message?:string;
  };
  
}

interface userdata {
  userId: number;
  avatar: string;
  username: string;
  password: string;
  desc: string;
  roles: string[];
  buttons: string[];
  routes: string[];
  token: string;
}

export interface userinfores {
  code: number;
  data: {
    checkUser:userdata
  };
}
