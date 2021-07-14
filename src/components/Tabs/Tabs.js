import React, { useState, Children, cloneElement } from 'react';

const Tabs = ({ children, className }) => {
    const [ activeTab, setActiveTab ] = useState(0);
    
    return (
        <div className={`tabs ${className}`}>
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