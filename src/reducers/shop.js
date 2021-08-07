const initialState = {
  categories: {
    items: [],
    loading: null,
    error: null,
  },
  products: {
    items: [],
    filter: {},
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
    case "SHOP_CLEAN":
      return initialState;

    case "SHOP-CATEGORIES_FETCH_REQUEST":
      return {
        ...shop,
        categories: {
          items: [],
          loading: true,
          error: false,
        },
      };

    case "SHOP-PRODUCTS_FETCH_REQUEST":
      return {
        ...shop,
        products: {
          ...shop.products,
          items: [],
          loading: true,
          error: false,
        },
      };

    case "SHOP-CATEGORIES_FETCH_SUCCESS":
      return {
        ...shop,
        categories: {
          items: action.payload,
          loading: false,
          error: false,
        },
      };

    case "SHOP-PRODUCTS_FETCH_SUCCESS":
      return {
        ...shop,
        products: {
          ...shop.products,
          items: action.payload,
          loading: false,
          error: false,
        },
      };

    case "SHOP-PRODUCTS_FILTER_APPLY":
      return {
        ...shop,
        products: {
          ...shop.products,
          items: [],
          filter: action.payload,
        },
      };

    default:
      return shop;
  }
};

export default shopReducer;
