import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { postId } = useParams();
  return <h2>Displaying Blog Post {postId}</h2>;
};

export default BlogPost;
