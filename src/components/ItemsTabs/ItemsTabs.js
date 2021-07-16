import React, { useEffect, useState } from 'react';

import Tabs from '../Tabs/Tabs.js';
import TabsHeader from '../TabsHeader/TabsHeader.js';
import TabsHeaderItem from '../TabsHeaderItem/TabsHeaderItem.js';
import TabsBody from "../TabsBody/TabsBody";
import TabsItem from "../TabsItem/TabsItem";
import ItemsTabsBodyItem from "../ItemsTabsBodyItem/ItemsTabsBodyItem";

import withServiceContext from "../hoc/withServiceContext";
import './ItemsTabs.scss';

const ItemsTabs = ({ headerItems, bodyItems }) => {
    return (
        <div className="container">
            <Tabs className="items-tabs">
                <TabsHeader className="items-tabs__header">
                    { headerItems }
                </TabsHeader>

                <TabsBody className="items-tabs__body">
                    { bodyItems }
                </TabsBody>
            </Tabs>
        </div>
    );
}

const ItemsTabsContainer = ({ service }) => {
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(false);
    const [ headers, setHeaders ] = useState([]);
    const [ itemList, setItemList ] = useState([{ id: null }]);

    const fetchHeaders = () => {
        service.getItemTabsHeaders()
            .then(setHeaders)
            .catch(setError);
    };

    const updateItemList = (idx, id) => {
        setLoading(true);

        const createEmptyItemList = (length) => {
            const arr = [];
            for (let i = 0; i < length; i++) {
                arr.push({ id: `content_${i + 1}` });
            }

            return arr;
        }

        const insertItemsIntoItemList = async (arr) => {
            return new Promise(resolve => {
                service.getItemTabsContent(id)
                    .then(data => {
                        arr[idx] = { ...arr[idx], ...data };
                        resolve(arr);
                    });
            });
        };

        const arr = createEmptyItemList(headers.length);

        insertItemsIntoItemList(arr)
            .then(items => {
                setItemList(items);
                setLoading(false);
            });
    };

    useEffect(fetchHeaders, []);

    useEffect(() => {
        if (headers.length) {
            updateItemList(0, 1)
        };
    }, [ headers ]);

    const headerItems = headers.map((el, idx) => {
        const onClick = () => updateItemList(idx, el.id);

        return (
            <TabsHeaderItem key={el.id}
            className="items-tabs__title"
            onClick={onClick}>
                { el.label }
            </TabsHeaderItem>
        );
    });

    const bodyItems = itemList.map(el => {
        return (
            <TabsItem className="items-tabs__item"
            key={el.id}>
                <ItemsTabsBodyItem
                elem={el}
                loading={loading}
                error={error} />
            </TabsItem>
        );
    });

    return (
        <ItemsTabs
        headerItems={headerItems}
        bodyItems={bodyItems} />
    );
};

export default withServiceContext(ItemsTabsContainer);