import { HttpParams, HttpHeaders } from '@angular/common/http';

export interface Api {
  endpoint: string;
  token: string | null;
  contentRootPath: string;
}

export class LoginUser {
  id: number;
  name: string;
  surname: string;
}

export interface HttpParameter {
  version: string;
  url: string;
  reponseType?: string;
  headers?: HttpHeaders;
  params?: HttpParams;
}

export class Login {
  userName: string;
  password: string;
}

export class ResponseLogin {
  token: string;
  loginUser: LoginUser;
}
