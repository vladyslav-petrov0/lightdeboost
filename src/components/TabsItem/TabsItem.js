import React from 'react';
import classNames from "classnames";

const TabsItem = ({ children, className }) => {
    const classes = classNames('tabs__item', [`${className}`]);

    return (
        <div className={classes}>
            { children }
        </div>
    );
};

export default TabsItem;