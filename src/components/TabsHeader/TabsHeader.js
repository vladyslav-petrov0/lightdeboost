import React, { Children, cloneElement } from 'react';
import classNames from "classnames";

const TabsHeader = ({ children, setActiveTab, activeTab, className }) => {
    const classes = classNames('tabs__header', [`${className}`]);

    return (
        <div className={classes} >
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