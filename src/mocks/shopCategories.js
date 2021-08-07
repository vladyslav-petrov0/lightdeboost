export const shopCategories = [
  {
    id: 1,
    title: "Game version",
    subcategories: [
      {
        label: "All",
        filterParams: {
          category: "gameVersion",
          value: "all",
        },
        id: "subcategory_1",
      },
      {
        label: "shadowlands",
        filterParams: {
          category: "gameVersion",
          value: "shadowlands",
        },
        id: "subcategory_2",
      },
      {
        label: "legion",
        filterParams: {
          category: "gameVersion",
          value: "legion",
        },
        id: "subcategory_3",
      },
    ],
  },
  {
    id: 2,
    title: "Services",
    subcategories: [
      {
        label: "All",
        filterParams: {
          category: "service",
          value: "all",
        },
        id: "subcategory_4",
      },
      {
        label: "gold",
        filterParams: {
          category: "service",
          value: "gold",
        },
        id: "subcategory_5",
      },
      {
        label: "boost",
        filterParams: {
          category: "service",
          value: "boost",
        },
        id: "subcategory_6",
      },
    ],
  },
];
