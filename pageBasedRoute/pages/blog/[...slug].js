import { useRouter } from "next/router";

export default function BlogPostsPage() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>This is catch all route Blog Post</h1>
    </div>
  );
}
