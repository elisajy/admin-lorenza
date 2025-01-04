import React, { createContext, useContext, useReducer } from "react";

interface SideNav {
    id: string,
    name: string,
    icon: string,
    order: number,
    route: string,
    parentId: string,
    roleType: string,
}
interface AuthState {
    isLogin: boolean;
    loginStatus: any;
    userProfile: null | {
        id?: string,
        name?: string,
        userName?: string,
        roleName: any,
        canManageSystemUser: boolean,
        branches: string
    }
    sideNav: SideNav[]
}

const INITIAL_STATE: AuthState = {
    isLogin: false,
    loginStatus: null,
    userProfile: null,
    sideNav: []
};

export const SET_LOGIN_STATUS = "[AUTH] SET_LOGIN_STATUS";
export const SET_LOGIN_ERROR = "[AUTH] SET_LOGIN_ERROR";
export const SET_CURRENT_USER = "[AUTH] SET_CURRENT_USER";
export const CLEAR_CURRENT_USER = "[AUTH] CLEAR_CURRENT_USER";
export const UPDATE_CURRENT_USER_PROFILE = "[AUTH] UPDATE_CURRENT_USER_PROFILE";
export const UPDATE_CHANGE_PASSWORD_STATUS = "[AUTH] UPDATE_CHANGE_PASSWORD_STATUS"

const reducer = (state: AuthState, action: { type: string, payload: any }): AuthState => {
    const { type, payload } = action;
    switch (type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                userProfile: { ...payload['userProfile'] },
                sideNav: [...payload['sideNav']]
            }
        case UPDATE_CURRENT_USER_PROFILE:
            return {
                ...state,
                userProfile: { ...payload['userProfile'] }
            }
        case SET_LOGIN_STATUS:
            return { ...state, isLogin: payload };
        case CLEAR_CURRENT_USER:
            return INITIAL_STATE;
        default:
            return state;
    }
};

const authContext = createContext<{ authState: AuthState; authDispatch: React.Dispatch<any>; }>
    ({ authState: INITIAL_STATE, authDispatch: () => null });

export const AuthProvider = ({ children }: any) => {
    const [authState, authDispatch] = useReducer(reducer, INITIAL_STATE);
    return (
        <authContext.Provider value={{ authState, authDispatch }} >
            {children}
        </authContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(authContext);
}