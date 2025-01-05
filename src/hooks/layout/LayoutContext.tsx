import React, { createContext, useContext, useReducer } from "react";

interface LayoutState {
    locale: string,
    showLoading: boolean,
    showNotification: { message: string | undefined, type: 'success' | 'info' | 'warning' | 'error', description: string | undefined },
    dimension: { width: number, height: number }
}

const INITIAL_STATE: LayoutState = {
    locale: 'en',
    showLoading: false,
    showNotification: { message: undefined, type: 'success', description: undefined },
    dimension: { width: window.innerWidth, height: window.innerHeight }
};

export const SET_LANGUAGE = "[LAYOUT] SET_LANGUAGE";
export const SHOW_LOADING = '[LAYOUT] SHOW_LOADING';
export const SHOW_NOTIFICATION = "[LAYOUT] SHOW_NOTIFICATION";
export const CLEAR_NOTIFICATION = "[LAYOUT] CLEAR_NOTIFICATION";
export const SET_SCREENSIZE = "[LAYOUT] SET_SCREENSIZE";

const reducer = (state: LayoutState, action: { type: string, payload: any }): LayoutState => {
    const { type, payload } = action;
    switch (type) {
        case SET_LANGUAGE:
            return { ...state, locale: payload };
        case SHOW_LOADING:
            return { ...state, showLoading: payload };
        case SHOW_NOTIFICATION:
            return { ...state, showNotification: payload };
        case CLEAR_NOTIFICATION:
            return { ...state, showNotification: INITIAL_STATE.showNotification };
        case SET_SCREENSIZE:
            return { ...state, dimension: payload };
        default:
            return state;
    }
};


const layoutContext = createContext<{ layoutState: LayoutState; layoutDispatch: React.Dispatch<any>; }>
    ({ layoutState: INITIAL_STATE, layoutDispatch: () => null });

export const LayoutProvider = ({ children }: any) => {
    const [layoutState, layoutDispatch] = useReducer(reducer, INITIAL_STATE);
    return (
        <layoutContext.Provider value={{ layoutState, layoutDispatch }} >
            {children}
        </layoutContext.Provider>
    );
}

export const useLayout = () => {
    return useContext(layoutContext);
}
