import React, { useState } from 'react';
import classNames from "classnames";

import { FetchTabsContext } from "../context/FetchTabsContext";

const FetchTabs = ({ children, className}) => {
    const [ fetchSrc, setFetchSrc ] = useState([]);

    const classes = classNames('FetchTabs', [`${className}`]);

    return (
        <FetchTabsContext.Provider value={ {fetchSrc, setFetchSrc} }>
            <div className={classes}>
                { children }
            </div>
        </FetchTabsContext.Provider>
    );
};

FetchTabs.defaultProps = { className: '' };

export default FetchTabs;