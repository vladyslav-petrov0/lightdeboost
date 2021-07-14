import React from 'react';

const TabsItem = ({ children, className }) => {
    return (
        <div className={`tabs__item ${className}`}>
            { children }
        </div>
    );
};

export default TabsItem;