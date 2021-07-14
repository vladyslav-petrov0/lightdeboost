import React from 'react';

const TabsHeaderItem = ({ children, setActiveTab, className, isActive, onClick }) => {
    let classNames = `tabs__header-item ${className}`;
    if (isActive) {
        classNames += ' active';
    };

    return (
        <button onClick={() => {
            onClick();
            setActiveTab();
        }}
        className={classNames}>
            { children }
        </button>
    );
};

export default TabsHeaderItem;