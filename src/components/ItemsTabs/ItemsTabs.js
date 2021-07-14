import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";

import Tabs from '../Tabs/Tabs.js';
import TabsHeader from '../TabsHeader/TabsHeader.js';
import TabsHeaderItem from '../TabsHeaderItem/TabsHeaderItem.js';
import TabsItem from '../TabsItem/TabsItem.js';
import TabsBody from '../TabsBody/TabsBody.js';
import ShopCardMini from "../ShopCardMini/ShopCardMini.js";

import withServiceContext from "../hoc/withServiceContext";
import { fetchItemsTabsHeaders, fetchItemsTabsContent } from '../../actions/index.js';

import './ItemsTabs.scss';

const ItemsTabs = ({ headerItems, bodyItems }) => {
    return (
        <div className="container">
            <Tabs className="items-tabs">
                <TabsHeader className="items-tabs__header">
                    { headerItems }
                </TabsHeader>

                <TabsBody>
                    { bodyItems }
                </TabsBody>
            </Tabs>
        </div>
    );
}

const ItemsTabsContainer = ({ headers = [], fetchHeaders, itemList = [], updateItemList }) => {
    // const [ loading, setLoading ] = useState(true);
    // const [ headers, setHeaders ] = useState([]);
    // const [ itemList, setItemList ] = useState([]);

    useEffect(() => {
        fetchHeaders();
        updateItemList(0, 1, headers.length);
    }, []);

    const headerItems = headers.map((el, idx) => {
        return (
            <TabsHeaderItem
            key={el.id}
            className="items-tabs__title"
            onClick={() => {
                updateItemList(idx, el.id, headers.length)
            }}>
                { el.label }
            </TabsHeaderItem>
        );
    });

    const bodyItems = itemList.map(el => {
        return (
            <TabsItem key={el.id}
            className="items-tabs__item">
            {
                el.map(itm => {
                    return <ShopCardMini {...itm} key={el.id}/>;
                })
            }
            </TabsItem>
        );
    });

    return (
        <ItemsTabs
        headerItems={headerItems}
        bodyItems={bodyItems} />
    );
};

const mapStateToProps = ({ itemsTabs: { tabsHeaders, itemList } }) => {
    return {
        headers: tabsHeaders,
        itemList,
    }
};

const mapDispatchToProps = (dispatch, { service }) => {
    return {
        fetchHeaders: () => fetchItemsTabsHeaders(service, dispatch),
        updateItemList: (idx, itemId, length) => {
            fetchItemsTabsContent(service, dispatch, idx, itemId, length)
        }
    }
};

export default withServiceContext(
    connect(mapStateToProps, mapDispatchToProps)(ItemsTabsContainer)
);