import PostEditor from "@/components/admin/PostEditor";

export default function NewPostPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-heading font-bold text-gray-900 tracking-tight">
          Tạo bài viết mới
        </h1>
        <p className="mt-2 text-gray-600 text-sm">
          Viết và xuất bản bài viết mới cho blog
        </p>
      </div>
      <PostEditor />
    </div>
  );
}
