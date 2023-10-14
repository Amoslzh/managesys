export interface loginform {
  username: string;
  password: string;
}

export interface loginres {
  code: string;
  data: {
    token: string;
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
  code: string;
  data: {
    checkUser:userdata
  };
}
