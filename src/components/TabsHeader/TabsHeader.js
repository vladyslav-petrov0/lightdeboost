import React, { Children, cloneElement } from 'react';

const TabsHeader = ({ children, setActiveTab, activeTab, className }) => {
    return (
        <div className={`tabs__header ${className}`} >
            { Children.map(children, (child, idx) => {
                const props = {
                    setActiveTab: () => setActiveTab(idx),
                    isActive: idx === activeTab,
                };

                return cloneElement(child, props);
            }) }
        </div>
    );
};

export default TabsHeader;