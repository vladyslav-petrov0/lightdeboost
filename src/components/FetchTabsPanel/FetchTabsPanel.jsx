import React, {Children, cloneElement, useContext} from 'react';
import classNames from "classnames";

import { FetchTabsContext } from '../context/FetchTabsContext';

const FetchTabs = ({ children, className}) => {
    const { fetchSrc } = useContext(FetchTabsContext);

    const classes = classNames('fetch-tabs__panel', [`${className}`]);

    return (
        <div className={classes}>
            { Children.map(children, child => {
                return cloneElement(child, { fetchSrc });
            }) }
        </div>
    );
};

export default FetchTabs;