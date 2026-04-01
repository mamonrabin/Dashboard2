import React from 'react';
import { CategorySelector } from './CategorySelector';
import { SubCategorySelector } from './SubCategorySelector';
import { BrandSelector } from './BrandSelector';
import { RangeSelector } from './RangeSelector';

const OrderTab = () => {
    return (
        <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-gray-500 md:hidden xl:flex">Order Submit 120</h2>
        <div className="md:flex hidden lg:flex-nowrap flex-wrap items-center gap-2">
          <CategorySelector />
          <SubCategorySelector />
          <BrandSelector />
          <RangeSelector />
        </div>
      </div>
    );
};

export default OrderTab;