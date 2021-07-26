import React, { useState, Children, cloneElement } from 'react';
import classNames from "classnames";

const Tabs = ({ children, className }) => {
    const [ activeTab, setActiveTab ] = useState(0);

    const classes = classNames('tabs', [`${className}`]);
    
    return (
        <div className={classes}>
            { Children.map(children, child => {
                let props = { activeTab };
                if (child.type.name === 'TabsHeader') {
                    props.setActiveTab = setActiveTab;
                }
                return cloneElement(child, props);
            }) }
        </div>
    );
};

export default Tabs;