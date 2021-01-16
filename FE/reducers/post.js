import shortId from 'shortid';

export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: '정민',
      },
      content: '일찍 출근해서 너무나 졸리다 #react #연습중',
      Images: [
        {
          src:
            'https://pds.joins.com/news/component/htmlphoto_mmdata/201403/28/htm_2014032804056a010a011.jpg',
        },
        {
          src:
            'https://image-cdn.hypb.st/https%3A%2F%2Fkr.hypebeast.com%2Ffiles%2F2018%2F04%2Fphoto-editor-app-recommendation-01.jpg?q=75&w=800&cbr=1&fit=max',
        },
        {
          src:
            'https://www.bloter.net/wp-content/uploads/2016/08/%EC%8A%A4%EB%A7%88%ED%8A%B8%ED%8F%B0-%EC%82%AC%EC%A7%84.jpg',
        },
      ],
      Comments: [
        {
          User: {
            nickname: 'banana',
          },
          content: '빠른퇴근',
        },
        {
          User: {
            nickname: 'mango',
          },
          content: '덕질하고싶다',
        },
      ],
    },
  ],
  imagePaths: [],
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
};

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const addPost = (data) => ({
  type: ADD_POST_REQUEST,
  data,
});

export const addComment = (data) => ({
  type: ADD_COMMENT_REQUEST,
  data,
});

const dummyPost = (data) => ({
  id: shortId.generate(),
  content: data,
  User: {
    id: 1,
    nickname: 'melon',
  },
  Images: [],
  Comments: [],
});

const dummyComment = (data) => ({
  id: shortId.generate(),
  content: data,
  User: {
    id: 1,
    nickname: 'melon',
  },
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      return {
        ...state,
        addPostLoading: true,
        addPostDone: false,
        addPostError: null,
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        mainPosts: [dummyPost(action.data), ...state.mainPosts],
        addPostLoading: false,
        addPostDone: true,
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        addPostLoading: false,
        addPostError: action.error,
      };
    case ADD_COMMENT_REQUEST:
      return {
        ...state,
        addCommentLoading: true,
        addCommentDone: false,
        addCommentError: null,
      };
    case ADD_COMMENT_SUCCESS: {
      console.log('ADD_COMMENT_SUCCESS');
      // 전체 포스트 중에 코멘트를 단 포스트를 찾아서 인덱스 뽑아냄
      const postIndex = state.mainPosts.findIndex((post) => post.id === action.data.postId);
      console.log(postIndex);
      // 뽑아낸 인덱스로 코멘트 단 인덱스 특정
      const post = { ...state.mainPosts[postIndex] };
      console.log(post);
      // 새로 추가된 코멘트를 넣어서 post의 코멘트 배열 재정의
      post.Comments = [dummyComment(action.data.content), ...post.Comments];
      // mainPosts도 새 객체로 만들어줌
      const mainPosts = [...state.mainPosts];
      console.log(mainPosts);
      // 코멘트 단 포스트의 코멘트를 업데이트
      mainPosts[postIndex] = post;
      console.log(mainPosts);
      return {
        ...state,
        mainPosts,
        addCommentLoading: false,
        addCommentDone: true,
      };
    }
    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        addCommentLoading: false,
        addCommentError: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
