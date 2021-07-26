import React, {useEffect, useState} from "react";
import classNames from "classnames";
import PropTypes from 'prop-types';

import Title from "../Title/Title";
import CardSectionContent from "../CardSectionContent/CardSectionContent";

import './CardSection.scss';
import {makeFlexRequest} from "../../utils";

const CardSection = ({ className, title, children }) => {
    return (
        <section className={className}>
            <div className="container">
                <Title className="card-section__title" size="lg">
                    { title }
                </Title>

                <ul className="card-section__body">
                    { children }
                </ul>
            </div>
        </section>
    );
};

CardSection.propTypes = { children: PropTypes.element.isRequired };

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

    const classes = classNames('card-section', [`${className}`]);

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