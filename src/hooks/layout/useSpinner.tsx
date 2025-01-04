import { SHOW_LOADING, useLayout } from "./LayoutContext";

const useSpinner = () => {
    const { layoutState, layoutDispatch } = useLayout();

    const setLoading = (show: boolean) => {
        if (layoutState.showLoading !== show) {
            layoutDispatch({ type: SHOW_LOADING, payload: show });
        }
    }

    return {
        setLoading
    }
}

export default useSpinner;