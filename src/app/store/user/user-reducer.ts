import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from "./user-state";
import { REGISTER_USER, LOGIN_USER, LOGOUT_USER, RegisterUserAction, LoginUserAction, LogoutUserAction } from "./user-actions";
import * as fromActions from './user-actions';
import LoginUser from '../../models/login-user';

const initialState: UserState = {
    loggedUser: {},
    authenticated: false
}

export function userReducer(state = initialState, action: fromActions.LoginUserAction | fromActions.RegisterUserAction | fromActions.LogoutUserAction): UserState {

    switch(action.type) {
      case REGISTER_USER: {
        return {loggedUser: action.user, authenticated: true};
      }
      case LOGIN_USER: {
        return {loggedUser: action.user, authenticated: true};
      }
      case LOGOUT_USER: {
        return {loggedUser: {}, authenticated: false};
      }
      default: {
        return state;
      }
    }	
} 

export const getArticleState = createFeatureSelector<UserState>('userState');

export const getUsers = createSelector(
    getArticleState, 
    (state: UserState) => state.loggedUser 
); 