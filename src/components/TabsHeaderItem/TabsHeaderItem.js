import React from 'react';
import classNames from "classnames";

const TabsHeaderItem = ({ children, setActiveTab, className, isActive, onClick }) => {
    let classes = classNames( 'tabs__header-item', [`${className}`],
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

export default TabsHeaderItem;