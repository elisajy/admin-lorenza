import './Dashboard.less';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/auth/AuthContext';
import { useEffect, useState } from 'react';
import { endOfDay, format, startOfDay, subMonths } from 'date-fns';
import { Spin } from 'antd';

const Dashboard = () => {
    const { authState } = useAuth();
    const location = useLocation();
    const userName = authState.userProfile && authState.userProfile?.userName ? authState.userProfile?.userName : '';
    const [filters, setFilters] = useState({
        startDate: format(startOfDay(subMonths(new Date(), 1)), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),
        endDate: format(endOfDay(new Date()), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Spin className="spinner" spinning={loading} />
            <div
                style={{
                    padding: 24,
                    minHeight: 360,
                    background: 'white',
                }}
            >
                Bill is a cat.
            </div>
        </>
    );
}

export default Dashboard;