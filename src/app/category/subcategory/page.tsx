import PageHead from '@/src/components/Admin-panal/PageHead';
import SubCategory from '@/src/components/subcategoty_managment/SubCategory';
import React from 'react';

const page = () => {
    return (
        <div>
            <PageHead title="Subcategory List" />
            <SubCategory/>
        </div>
    );
};

export default page;