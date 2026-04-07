import PageHead from '@/src/components/Admin-panal/PageHead';
import Setting from '@/src/components/setting_managment/Setting';
import React from 'react';

const page = () => {
    return (
        <div>
            <PageHead title="Settings" />
            <Setting/>
        </div>
    );
};

export default page;