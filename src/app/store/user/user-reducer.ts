import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from "./user-state";
import { REGISTER_USER, LOGIN_USER, LOGOUT_USER, GET_USERS, RegisterUserAction, LoginUserAction, LogoutUserAction, GetUsersAction} from "./user-actions";
import * as fromActions from './user-actions';
import LoginUser from '../../models/login-user';

const initialState: UserState = {
    loggedUser: {},
    authenticated: false,
    allUsers: []
}

export function userReducer(state = initialState, 
  action: fromActions.LoginUserAction | fromActions.RegisterUserAction | fromActions.LogoutUserAction | fromActions.GetUsersAction): UserState {

    switch(action.type) {
      case REGISTER_USER: {
        return Object.assign({}, state, {loggedUser: action.user, authenticated: true});
      }
      case LOGIN_USER: {
        return Object.assign({}, state, {loggedUser: action.user, authenticated: true});
      }
      case LOGOUT_USER: {
        return Object.assign({}, state, {authenticated: false, loggedUser: {}, allUsers: []});
      }
      case GET_USERS: {
        return Object.assign({}, state, {authenticated: state.authenticated, loggedUser:state.loggedUser, allUsers: action.allUsers});
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