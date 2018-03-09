import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from "./user-state";
import { REGISTER_USER, LOGIN_USER, RegisterUserAction, LoginUserAction } from "./user-actions";
import * as fromActions from './user-actions';
import LoginUser from '../../models/login-user';

const initialState: UserState = {
    loggedUser: {}
}

export function userReducer(state = initialState, action: fromActions.LoginUserAction | fromActions.RegisterUserAction): UserState {

    switch(action.type) {
      case REGISTER_USER: {
        return {loggedUser: action.user};
      }
      case LOGIN_USER: {
        return {loggedUser: action.user};
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