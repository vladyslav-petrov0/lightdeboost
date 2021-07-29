import React, {useContext, useEffect} from 'react';
import classNames from "classnames";

import { FetchTabsContext } from '../context/FetchTabsContext';

const FetchTabsHeaderItem = ({ onToggleStatus, isActive, fetchSrc, ...otherProps }) => {
    const { setFetchSrc } = useContext(FetchTabsContext);
    const { children, className } = otherProps;

    const classes = classNames('FetchTabsHeaderItem', [`${className}`], {
        'active': isActive,
    });

    const onClick = () => {
        if (!isActive) {
            onToggleStatus();
            setFetchSrc(fetchSrc);
        };
    };

    useEffect(() => isActive && setFetchSrc(fetchSrc), [])

    return (
        <div className={classes}
        onClick={onClick}>
            { children }
        </div>
    );
};

export default FetchTabsHeaderItem;
