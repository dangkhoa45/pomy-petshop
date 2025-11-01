import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { posts } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import PostEditor from "@/components/admin/PostEditor";

interface PageProps {
  params: Promise<{ id: string }>;
}

async function getPost(id: string) {
  const [post] = await db.select().from(posts).where(eq(posts.id, id)).limit(1);

  return post;
}

export default async function EditPostPage({ params }: PageProps) {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-heading font-bold text-gray-900 tracking-tight">
          Chỉnh sửa bài viết
        </h1>
        <p className="mt-2 text-gray-600 text-sm">
          Cập nhật nội dung và cài đặt bài viết
        </p>
      </div>
      <PostEditor
        postId={post.id}
        initialData={{
          title: post.title,
          slug: post.slug,
          excerpt: post.excerpt || undefined,
          contentMarkdown: post.contentMarkdown,
          status: post.status,
          seoTitle: post.seoTitle || undefined,
          seoDescription: post.seoDescription || undefined,
          featuredImage: post.featuredImage || undefined,
        }}
      />
    </div>
  );
}
