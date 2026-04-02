import PageHead from '@/src/components/Admin-panal/PageHead';
import Product from '@/src/components/product-management/Product';
import React from 'react';

const page = () => {
    return (
        <div>
            <PageHead title="Product List" />
            <Product/>
        </div>
    );
};

export default page;