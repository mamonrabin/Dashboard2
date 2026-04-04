import PageHead from '@/src/components/Admin-panal/PageHead';
import Campaign from '@/src/components/campaign_managment/Campaign';
import React from 'react';

const page = () => {
    return (
        <div>
            <PageHead title="Campaign List" />
            <Campaign/>
        </div>
    );
};

export default page;