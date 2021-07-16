import React, { Children } from 'react';

const TabsBody = ({ children, activeTab, className }) => {
    return (
        <div className={`tabs__body ${className}`}>
            { Children.map(children, (child, idx) => {
                return idx == activeTab ? child : null;
            }) }
        </div>
    );
};

export default TabsBody;