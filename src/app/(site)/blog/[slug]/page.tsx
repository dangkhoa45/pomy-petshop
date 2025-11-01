import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogContent } from "@/components/blog";

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  contentHtml: string;
  featuredImage: string | null;
  publishedAt: string | null;
  viewCount: number;
  readingTime: number;
  category?: string | null;
  seoTitle?: string | null;
  seoDescription?: string | null;
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

async function getPost(
  slug: string
): Promise<{ post: Post; relatedPosts: Post[] } | null> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    const response = await fetch(`${baseUrl}/api/blog/posts/${slug}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}

function formatDate(date: string | null) {
  if (!date) return "";
  return new Date(date).toLocaleDateString("vi-VN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const data = await getPost(slug);

  if (!data || !data.post) {
    notFound();
  }

  const { post, relatedPosts } = data;

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 to-pink-200">
      <article className="blog-root max-w-5xl mx-auto px-6 py-12">
        {/* Main Content Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Featured Image */}
          {post.featuredImage && (
            <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          )}

          {/* Header */}
          <div className="px-6 md:px-12 pt-8 pb-6">
            <header>
              {/* Category Badge */}
              {post.category && (
                <span className="inline-block text-sm font-medium text-pink-600 bg-pink-50 px-4 py-1.5 rounded-full mb-4">
                  {post.category}
                </span>
              )}

              {/* Title */}
              <h1 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-4 leading-tight">
                {post.title}
              </h1>

              {/* Excerpt */}
              {post.excerpt && (
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
              )}

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 pb-6 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <time dateTime={post.publishedAt || undefined}>
                    {formatDate(post.publishedAt)}
                  </time>
                </div>
                <span>•</span>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{post.readingTime} phút đọc</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  <span>{post.viewCount} lượt xem</span>
                </div>
              </div>
            </header>

            {/* Content */}
            <div className="mt-8">
              <BlogContent content={post.content || post.contentHtml} />
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-3xl font-heading font-bold text-gray-800 mb-8">
              Bài viết liên quan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.slice(0, 3).map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  {relatedPost.featuredImage && (
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={relatedPost.featuredImage}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  )}
                  <div className="p-5">
                    <h3 className="font-heading font-semibold text-gray-900 group-hover:text-pink-600 transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    {relatedPost.excerpt && (
                      <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl shadow-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Cần tư vấn về chăm sóc thú cưng? 🐾
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Liên hệ với chúng tôi để được hỗ trợ tận tình và nhận những lời
            khuyên chuyên nghiệp cho người bạn bốn chân của bạn.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-pink-600 font-semibold rounded-full hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Liên hệ ngay
            </Link>
            <Link
              href="/blog"
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-pink-600 transition-all duration-300 transform hover:scale-105"
            >
              Xem thêm bài viết
            </Link>
          </div>
        </div>
      </article>

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt || undefined,
            image: post.featuredImage || undefined,
            datePublished: post.publishedAt,
            author: {
              "@type": "Organization",
              name: "POMY PETSHOP",
            },
            publisher: {
              "@type": "Organization",
              name: "POMY PETSHOP",
              logo: {
                "@type": "ImageObject",
                url: `${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`,
              },
            },
          }),
        }}
      />
    </div>
  );
}
