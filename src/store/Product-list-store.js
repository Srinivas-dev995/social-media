import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostList,action)=>{
   let newPostList = currentPostList;
   if (action.type === "DELETE"){
        newPostList = currentPostList.filter((post) => post.id !== action.payload.postId);
   }else if (action.type === "ADD"){
        newPostList =  [
            action.payload,...currentPostList
        ]
   }
   return newPostList;
};

const PostListProvider = ({ children }) => {

  const [postList, dispatchPostList] = useReducer(postListReducer,DEFAULT_POST_LIST);

    const addPost = (userId,Id,title,body,reactions,tags) => {

        dispatchPostList(
            {
                type:"ADD",
                payload : {
                    userId,
                    Id,
                    title,
                    body,
                    reactions,
                    tags
                }
            }
        )
    };
    const deletePost = (postId) => {

        dispatchPostList(
            {
                type:"DELETE",
                payload : {
                    postId
                }
            }
        )
    };


  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [

    {
        id:"1",
        title:"Going to Mumbai",
        body:"Hi Friends, Today Im going to mumbai for my friends who is with me from my childhood",
        reactions:"10",
        userId:"user-9",
        tags:["mumbai","vacation","city"]
    },
    {
        id:"2",
        title:"Event in Hyd",
        body:"Hi Friends, Today Im going I'm conducting the most useful event for students and those who are seeking jobs",
        reactions:"112",
        userId:"user-12",
        tags:["jobs","unemployment","students"]
    }
];


export default PostListProvider;
