import { Action } from "redux";
import LoginUser from "../../models/login-user";
import RegisterUser from "../../models/register-user";
import { AuthService } from "../../services/auth/auth.service";

export const REGISTER_USER = 'user/REGISTER';
export const LOGIN_USER = 'user/LOGIN';
export const LOGOUT_USER = 'user/LOGOUT';

export class RegisterUserAction implements Action {
    readonly type = REGISTER_USER;

    constructor(public user: RegisterUser){}
}
  
export class LoginUserAction implements Action {
    readonly type = LOGIN_USER;
  
    constructor(public user: LoginUser) { }
} 

export class LogoutUserAction implements Action {
    readonly type = LOGOUT_USER;

    constructor(){}
}