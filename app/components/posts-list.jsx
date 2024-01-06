import Post from "./post";
import propTypes from "prop-types";

const PostList = ({ posts }) => {
  return (
    <>
      <h2 className="heading">Blog</h2>
      <div className="blog">
        {posts.map((post) => (
          <Post key={post.id} post={post.attributes} />
        ))}
      </div>
    </>
  );
};

PostList.propTypes = {
  posts: propTypes.array.isRequired,
};

export default PostList;
