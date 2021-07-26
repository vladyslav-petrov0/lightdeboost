import React, {useEffect, useState} from 'react';

import FetchTabs from "../FetchTabs/FetchTabs";
import FetchTabsHeader from "../FetchTabsHeader/FetchTabsHeader";
import FetchTabsPanel from "../FetchTabsPanel/FetchTabsPanel";
import FetchTabsHeaderItem from "../FetchTabsHeaderItem/FetchTabsHeaderItem";
import ItemsTabsContent from "../ItemsTabsContent/ItemsTabsContent";

import withServiceContext from "../hoc/withServiceContext";
import { makeFlexRequest } from "../../utils";
import './ItemsTabs.scss';

const ItemsTabs = ({ children }) => {
    return (
        <div className="items-tabs">
            <div className="container">
                <FetchTabs>
                    <FetchTabsHeader className="items-tabs__header">
                        { children }
                    </FetchTabsHeader>

                    <FetchTabsPanel className="items-tabs__panel">
                        <ItemsTabsContent />
                    </FetchTabsPanel>
                </FetchTabs>
            </div>
        </div>
    );
};

const ItemsTabsContainer = ({ service }) => {
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(false);
    const [ headers, setHeaders ] = useState([]);

    useEffect(() => makeFlexRequest(
        service.getItemsTabsHeaders,
        setHeaders, setError
    ), []);

    return (
        <ItemsTabs>
        {
            headers.map(el => {
                return (
                    <FetchTabsHeaderItem className="items-tabs__header-item"
                    key={el.id} fetchSrc={el.contentId}>
                        { el.label }
                    </FetchTabsHeaderItem>
                );
            })
        }
        </ItemsTabs>
    );
};

export default withServiceContext(ItemsTabsContainer);
