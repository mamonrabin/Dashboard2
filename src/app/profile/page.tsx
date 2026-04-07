import PageHead from '@/src/components/Admin-panal/PageHead';
import Profile from '@/src/components/profile_managment/Profile';
import React from 'react';

const page = () => {
    return (
        <div>
            <PageHead title="Profile" />
            <Profile/>
        </div>
    );
};

export default page;