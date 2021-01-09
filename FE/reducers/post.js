export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "정민",
      },
      content: "일찍 출근해서 너무나 졸리다",
      Images: [
        {
          src:
            "https://pds.joins.com/news/component/htmlphoto_mmdata/201403/28/htm_2014032804056a010a011.jpg",
        },
        {
          src:
            "https://image-cdn.hypb.st/https%3A%2F%2Fkr.hypebeast.com%2Ffiles%2F2018%2F04%2Fphoto-editor-app-recommendation-01.jpg?q=75&w=800&cbr=1&fit=max",
        },
        {
          src:
            "https://www.bloter.net/wp-content/uploads/2016/08/%EC%8A%A4%EB%A7%88%ED%8A%B8%ED%8F%B0-%EC%82%AC%EC%A7%84.jpg",
        },
      ],

      Comments: [
        {
          User: {
            nickname: "banana",
          },
          content: "빠른퇴근",
        },
        {
          User: {
            nickname: "mango",
          },
          content: "덕질하고싶다",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = "ADD_POST";
export const addPost = {
  type: ADD_POST,
};
const dummyPost = {
  id: 2,
  content: "더미데이터입니다",
  User: {
    id: 1,
    nickname: "melon",
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
