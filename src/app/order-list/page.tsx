import PageHead from '@/src/components/Admin-panal/PageHead';
import Order from '@/src/components/order_managment/Order';

import React from 'react';

const page = () => {
    return (
        <div>
            <PageHead title="Order Management" />
            <Order/>
        </div>
    );
};

export default page;