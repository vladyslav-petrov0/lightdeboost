const filterItems = (arr, filterObj) => {
  const params = Object.entries(filterObj);

  return arr.filter((el) =>
    params.every(([category, value]) => {
      if (category === "title") {
        const elTitle = el.title.toLowerCase().trim();
        return elTitle.includes(value);
      }

      return el[category] == value || value == "all";
    })
  );
};

const initialState = {
  categories: {
    immutable: [],
    loading: null,
    error: null,
  },
  products: {
    immutable: [],
    current: [],
    filterObj: {},
    loading: null,
    error: null,
  },
};

const shopReducer = (state, action) => {
  if (state === undefined) {
    return initialState;
  }

  const { shop } = state;

  switch (action.type) {
    case "SHOP-CATEGORIES_FETCH_REQUEST":
      return {
        ...shop,
        categories: {
          immutable: [],
          loading: true,
          error: false,
        },
      };

    case "SHOP-PRODUCTS_FETCH_REQUEST":
      return {
        ...shop,
        products: {
          immutable: [],
          current: [],
          filterObj: {},
          loading: true,
          error: false,
        },
      };

    case "SHOP-CATEGORIES_FETCH_SUCCESS":
      return {
        ...shop,
        categories: {
          immutable: action.payload,
          loading: false,
          error: false,
        },
      };

    case "SHOP-PRODUCTS_FETCH_SUCCESS":
      return {
        ...shop,
        products: {
          immutable: action.payload,
          current: action.payload,
          filterObj: {},
          loading: false,
          error: false,
        },
      };

    case "SHOP-PRODUCTS_FILTER_APPLY":
      const { sortCategory, sortValue } = action.payload;
      const filterObj = { ...shop.products.filterObj };
      filterObj[sortCategory] = sortValue;

      return {
        ...shop,
        products: {
          ...shop.products,
          current: filterItems(shop.products.immutable, filterObj),
          filterObj,
        },
      };

    default:
      return shop;
  }
};

export default shopReducer;
