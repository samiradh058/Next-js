import Posts from "@/components/posts";
import { getPosts } from "@/lib/posts";

// For dynamic metadata
export async function generateMetadata() {
  const posts = await getPosts();
  const numOfPosts = posts.length;
  return {
    title: `Browse all ${numOfPosts} posts`,
    description: "Browse all out posts",
  };
}

export default async function FeedPage() {
  const posts = await getPosts();
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}
