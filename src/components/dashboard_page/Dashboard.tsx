import React from 'react';
import Overview from './Overview';
import SalesStatistics from './SalesStatistics';
import DashboardProduct from './Dashboard_Product';

const Dashboard = () => {
    return (
        <div className='lg:px-6 px-2'>
            <Overview/>
            <SalesStatistics/>
            <DashboardProduct/>
        </div>
    );
};

export default Dashboard;