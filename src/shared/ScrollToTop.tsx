import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const location: any = useLocation();
    const { pathname } = location;

    useEffect(() => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }, [pathname]);

    return null;
};

export default ScrollToTop;