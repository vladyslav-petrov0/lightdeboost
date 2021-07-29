import React, { Children } from 'react';
import classNames from "classnames";

const TabsBody = ({ children, activeTab, className }) => {
    const classes = classNames('TabsBody', [`${className}`]);

    return (
        <div className={classes}>
            { Children.map(children, (child, idx) => {
                return idx == activeTab ? child : null;
            }) }
        </div>
    );
};

export default TabsBody;