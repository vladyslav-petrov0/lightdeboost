import React, {useEffect, useState} from "react";
import {makeFlexRequest} from "../../utils";
import classNames from "classnames";
import PropTypes from "prop-types";

import CardSectionContent from "../CardSectionContent/CardSectionContent";
import CardSection from "./CardSection";

const CardSectionContainer = ({ fetchItems, title, className }) => {
    const [ items, setItems ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => makeFlexRequest(
        fetchItems,
        (data) => {
            setItems(data);
            setLoading(false);
        },
    ), []);

    const classes = classNames('CardSection', [`${className}`]);

    return (
        <CardSection title={title} className={classes}>
            <CardSectionContent loading={loading} items={items} />
        </CardSection>
    );
};

CardSectionContainer.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    fetchItems: PropTypes.func.isRequired
}

export default CardSectionContainer;