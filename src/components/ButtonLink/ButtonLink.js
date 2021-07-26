import React from 'react';
import PropTypes from 'prop-types';

import {Link} from "react-router-dom";
import BaseButton from "../BaseButton/BaseButton";

const ButtonLink = ({ children, href, ...otherProps }) => {
    return (
        <BaseButton {...otherProps}>
            <Link to={href}>
                { children }
            </Link>
        </BaseButton>
    )
};

ButtonLink.propTypes = {
    href: PropTypes.string.isRequired,
};

export default ButtonLink;