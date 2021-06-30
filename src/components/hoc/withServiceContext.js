import React from 'react';
import { ServiceConsumer } from '../ServiceContext/ServiceContext.js';

const withServiceContext = (RenderElem) => (props) => {
    return (
        <ServiceConsumer>
            {(value) => {
                return <RenderElem {...props} service={value} />
            }}
        </ServiceConsumer>
    );
};

export default withServiceContext;
