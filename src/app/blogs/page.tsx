import PageHead from '@/src/components/Admin-panal/PageHead';
import Blog from '@/src/components/blog_managment/Blog';
import React from 'react';

const page = () => {
    return (
        <div>
            <PageHead title="Blog List" />
            <Blog/>
        </div>
    );
};

export default page;