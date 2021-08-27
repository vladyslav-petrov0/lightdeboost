export const products = [
  {
    id: 1,
    title: "CONQUEST POINTS CAP",
    price: 200,
    img: "https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/cat_1280p_0.jpg?itok=6F0T3mFp",
    information: [
      {
        id: 1,
        title: "Information",
        text: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio",
        ],
      },
      {
        id: 2,
        title: "Information",
        text: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio",
        ],
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Vasya Pupkin",
        userImg: "https://html5css.ru/w3css/img_avatar3.png",
        comment: "Very good, very best :D",
        rating: 5,
      },
      {
        id: 2,
        author: "Mats Krasicki",
        userImg: "https://html5css.ru/w3css/img_avatar3.png",
        comment: "It is ok",
        rating: 4,
      },
    ],
    options: [
      {
        type: "radio",
        label: "Select Region:",
        fieldName: "region",
        options: ["EN", "US"],
      },
      {
        type: "radio",
        label: "Boosting Type:",
        fieldName: "boostingType",
        options: ["Self play", "Piloted"],
      },
      {
        type: "clue",
        label: "OUR BOOSTER WILL EARN 10K POINTS CAP FOR YOU",
      },
      {
        type: "select",
        label: "CAP TYPE",
        fieldName: "capType",
        options: ["1K POINTS CAP", "2K POINTS CAP", "3K POINTS CAP"],
        placeholder: "1K POINTS CAP",
      },
    ],
  },
];
