import PageHead from '@/src/components/Admin-panal/PageHead';
import Banner from '@/src/components/banner_managment/Banner';
import React from 'react';

const page = () => {
    return (
        <div>
            <PageHead title="Banner List" />
            <Banner/>
        </div>
    );
};

export default page;