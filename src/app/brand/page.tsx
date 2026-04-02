import PageHead from '@/src/components/Admin-panal/PageHead';
import Brand from '@/src/components/brand_managment/Brand';
import React from 'react';

const page = () => {
    return (
        <div>
            <PageHead title="Brand List" />
            <Brand/>
        </div>
    );
};

export default page;