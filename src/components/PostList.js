import { useContext } from "react";
import Post from "./Post";
import { PostList as Data} from "../store/Product-list-store";

const PostList  = () => {

    const {postList} = useContext(Data);
    return <>
        {postList.map((post) => <Post key={post.id} post={post}></Post>)}
    </>
}
export default PostList;