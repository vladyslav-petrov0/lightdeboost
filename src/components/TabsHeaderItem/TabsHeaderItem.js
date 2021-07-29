import React from 'react';
import classNames from "classnames";

const TabsHeaderItem = ({ children, setActiveTab, className, isActive, onClick }) => {
    let classes = classNames( 'TabsHeaderItem', [`${className}`],
        { 'active': isActive });

    const handleButton = () => {
        onClick();
        setActiveTab();
    }

    return (
        <button onClick={handleButton}
        className={classes}>
            { children }
        </button>
    );
};

TabsHeaderItem.defaultProps = {
    className: ''
}

export default TabsHeaderItem;