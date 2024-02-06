import { useContext, useRef } from "react";
import { PostList } from "../store/Product-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const IdElement = useRef(2);
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleForm = (e) => {
    e.preventDefault();
    const userId = userIdElement.current.value;
    const Id = IdElement.current + 1;
    const title = postTitleElement.current.value;
    const body = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");
    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";
    
    addPost(userId,Id,title,body,reactions,tags);
  };
  return (
    <form className="add" onSubmit={handleForm}>
      <div className="mb-3">
        <label for="exampleInputId" className="form-label">
          userid
        </label>
        <input
          className="form-control"
          id="exampleInputId"
          aria-describedby="emailHelp"
          ref={userIdElement}
        />
      </div>
      <div className="mb-3">
        <label for="exampleInputTitle" className="form-label">
          Title
        </label>
        <input
          className="form-control"
          id="exampleInputTitle"
          aria-describedby="emailHelp"
          ref={postTitleElement}
        />
      </div>
      <div className="mb-3">
        <label for="exampleInputBody" className="form-label">
          How are you feeling today...
        </label>
        <textarea
          rows="4"
          className="form-control"
          id="exampleInputBody"
          aria-describedby="emailHelp"
          ref={postBodyElement}
        />
      </div>
      <div className="mb-3">
        <label for="exampleInputRea" className="form-label">
          Reactions
        </label>
        <input
          className="form-control"
          id="exampleInputRea"
          aria-describedby="emailHelp"
          ref={reactionsElement}
        />
      </div>
      <div className="mb-3">
        <label for="exampleInputTags" className="form-label">
          Tags
        </label>
        <input
          className="form-control"
          id="exampleInputTags"
          aria-describedby="emailHelp"
          ref={tagsElement}
        />
      </div>

      <button type="submit" className="btn btn-primary" onClick={handleForm}>
        Post
      </button>
    </form>
  );
};

export default CreatePost;
