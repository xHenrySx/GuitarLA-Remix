import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/post.server";
import PostList from "~/components/posts-list";

export async function loader() {
  const posts = await getPosts();
  return posts;
}

const Blog = () => {
  const posts = useLoaderData();
  return <PostList posts={posts} />;
};

export default Blog;
