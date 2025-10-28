import PostEditor from "@/components/admin/PostEditor";

export default function NewPostPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Tạo bài viết mới</h1>
      </div>
      <PostEditor />
    </div>
  );
}
