import React from 'react';
import classNames from "classnames";

const TabsItem = ({ children, className }) => {
    const classes = classNames('TabsItem', [`${className}`]);

    return (
        <div className={classes}>
            { children }
        </div>
    );
};

TabsItem.defaultProps = {
    className: ''
}

export default TabsItem;