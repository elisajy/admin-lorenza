import { SHOW_NOTIFICATION, useLayout } from "./LayoutContext";

const useNotification = () => {
    const { layoutState, layoutDispatch } = useLayout();

    const setSuccessNotification = (description: string, message?: string) => {
        if (layoutState.showNotification.description !== description) {
            layoutDispatch({ type: SHOW_NOTIFICATION, payload: { type: 'success', message: message || 'Successful', description}});
        }
    }

    const setErrorNotification = (description: string, message?: string) => {
        if (layoutState.showNotification.description !== description) {
            layoutDispatch({ type: SHOW_NOTIFICATION, payload: { type: 'error', message: message || 'Error', description}});
        }
    }

    return {
        setSuccessNotification, setErrorNotification
    }
}

export default useNotification;