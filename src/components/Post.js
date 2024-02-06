import { useContext } from "react";
import { PostList} from "../store/Product-list-store";
const Post = ({ post }) => {

  const {deletePost} = useContext(PostList);

  return (
    <div className="card post-card">
      <div className="card-body">
        <h5 className="card-title post-title">{post.title}</h5>
        <p className="card-text post-body">{post.body}</p>
        {post.tags.map((b) => (
          <span class="post-tags badge text-bg-primary">{b}</span>
        ))}

        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => deletePost(post.id)}
        >
          Delete
        </span>
      </div>
    </div>
  );
};

export default Post;
