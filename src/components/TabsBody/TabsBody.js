import React, { Children } from 'react';

const TabsBody = ({ children, activeTab }) => {
    return (
        <div className="tabs__body">
            { Children.map(children, (child, idx) => {
                return idx == activeTab ? child : null;
            }) }
        </div>
    );
};

export default TabsBody;