import React, {Children, cloneElement, useContext} from 'react';
import classNames from "classnames";

import { FetchTabsContext } from '../context/FetchTabsContext';

const FetchTabs = ({ children, className }) => {
    const { fetchSrc } = useContext(FetchTabsContext);

    const classes = classNames('FetchTabsPanel', [`${className}`]);

    return (
        <div className={classes}>
            { Children.map(children, child => {
                return cloneElement(child, { fetchSrc });
            }) }
        </div>
    );
};

FetchTabs.defaultProps = {
    className: ''
}

export default FetchTabs;