import React, { Children, cloneElement, useState} from 'react';
import classNames from "classnames";

const FetchTabsHeader = ({ children, className}) => {
    const [ activeTab, setActiveTab ] = useState(0);

    const classes = classNames('fetch-tabs__header', [`${className}`]);

    return (
        <div className={classes}>
            { Children.map(children, (child, idx) => {
                return cloneElement(child, {
                    onToggleStatus: () => setActiveTab(idx),
                    isActive: idx === activeTab
                })
            })}
        </div>
    );
};

export default FetchTabsHeader;