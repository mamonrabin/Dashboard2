import PageHead from '@/src/components/Admin-panal/PageHead';
import Category from '@/src/components/categoty_managment/Category';
import React from 'react';

const page = () => {
    return (
        <div>
            <PageHead title="Category List" />
            <Category/>
        </div>
    );
};

export default page;