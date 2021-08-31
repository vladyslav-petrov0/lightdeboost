import productImg1 from "./img/product1.png";

export const products = [
  {
    id: 1,
    title: "CONQUEST POINTS CAP",
    price: 200,
    img: productImg1,
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
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed ultricies lorem, sed feugiat dolor. Nam hendrerit, erat eu efficitur mattis, velit turpis ultricies est, et hendrerit eros ligula sed dui. Duis at magna in ante consequat porta. Nam a lorem pretium, convallis leo ut, consequat nulla. Pellentesque eu suscipit purus, eget suscipit sapien. Maecenas dui turpis, hendrerit eget ligula non, dapibus semper enim. Sed id libero bibendum, dignissim ipsum et, condimentum diam. Nunc molestie luctus placerat. Nam imperdiet, nisl a hendrerit tincidunt, diam metus ullamcorper mi, sit amet finibus nisl odio at urna. Phasellus quis faucibus sapien. Ut ac nisl vitae arcu tincidunt posuere. Duis odio est, ornare eu pulvinar eu, dignissim non sem. Aliquam lacinia quis risus sed tincidunt.",
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
        options: [
          "1K POINTS CAP",
          "2K POINTS CAP",
          "3K POINTS CAP",
          "4K POINTS CAP",
          "5K POINTS CAP",
        ],
        placeholder: "1K POINTS CAP",
      },
      // {
      //   type: "range",
      //   label: "pointsAmount",
      //   fieldName: "pointsAmount",
      //   options: { min: 0, max: 2100, minDefault: 449, minDistance: 300 },
      // },
    ],
  },
];
