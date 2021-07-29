import React, { Children, cloneElement } from 'react';
import classNames from "classnames";

const TabsHeader = ({ children, setActiveTab, activeTab, className }) => {
    const classes = classNames('TabsHeader', [`${className}`]);

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

TabsHeader.defaultProps = {
    className: ''
}

export default TabsHeader;