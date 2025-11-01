"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import Image from "next/image";
import type { Components } from "react-markdown";

interface BlogContentProps {
  content: string;
}

/**
 * BlogContent Component
 * Renders markdown content with professional typography and syntax highlighting
 * Supports GFM (GitHub Flavored Markdown) including tables, strikethrough, task lists
 */
export default function BlogContent({
  content,
}: BlogContentProps): React.JSX.Element {
  // Custom renderers for markdown elements with Next.js optimizations
  const components: Components = {
    // Headings with proper hierarchy and styling
    h1: ({ children, ...props }) => (
      <h1
        className="text-4xl font-heading font-bold text-gray-900 mt-12 mb-6 leading-tight first:mt-0"
        {...props}
      >
        {children}
      </h1>
    ),
    h2: ({ children, ...props }) => (
      <h2
        className="text-3xl font-heading font-bold text-gray-900 mt-10 mb-5 leading-tight"
        {...props}
      >
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3
        className="text-2xl font-heading font-semibold text-gray-900 mt-8 mb-4 leading-snug"
        {...props}
      >
        {children}
      </h3>
    ),
    h4: ({ children, ...props }) => (
      <h4
        className="text-xl font-heading font-semibold text-gray-900 mt-6 mb-3 leading-snug"
        {...props}
      >
        {children}
      </h4>
    ),
    h5: ({ children, ...props }) => (
      <h5
        className="text-lg font-heading font-semibold text-gray-900 mt-5 mb-2.5 leading-normal"
        {...props}
      >
        {children}
      </h5>
    ),
    h6: ({ children, ...props }) => (
      <h6
        className="text-base font-heading font-semibold text-gray-900 mt-4 mb-2 leading-normal"
        {...props}
      >
        {children}
      </h6>
    ),

    // Paragraphs with comfortable line height
    p: ({ children, ...props }) => (
      <p className="text-gray-700 leading-relaxed mb-6 text-base" {...props}>
        {children}
      </p>
    ),

    // Links with external link handling
    a: ({ href, children, ...props }) => {
      const isExternal = href?.startsWith("http");
      return (
        <a
          href={href}
          className="text-pink-600 font-medium no-underline hover:underline hover:text-pink-700 transition-colors duration-200"
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          {...props}
        >
          {children}
        </a>
      );
    },

    // Strong text
    strong: ({ children, ...props }) => (
      <strong className="font-semibold text-gray-900" {...props}>
        {children}
      </strong>
    ),

    // Emphasis
    em: ({ children, ...props }) => (
      <em className="italic text-gray-700" {...props}>
        {children}
      </em>
    ),

    // Inline code
    code: ({
      inline,
      className,
      children,
      ...props
    }: {
      inline?: boolean;
      className?: string;
      children?: React.ReactNode;
    }) => {
      if (inline) {
        return (
          <code
            className="bg-pink-50 text-pink-600 px-2 py-0.5 rounded text-sm font-mono"
            {...props}
          >
            {children}
          </code>
        );
      }
      // Block code is handled by pre
      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },

    // Code blocks with syntax highlighting
    pre: ({ children, ...props }) => (
      <pre
        className="bg-gray-900 text-gray-100 rounded-xl p-6 overflow-x-auto mb-6 shadow-lg border border-gray-700"
        {...props}
      >
        {children}
      </pre>
    ),

    // Blockquotes
    blockquote: ({ children, ...props }) => (
      <blockquote
        className="border-l-4 border-pink-500 pl-6 pr-4 py-3 my-6 bg-pink-50 rounded-r-lg italic text-gray-700"
        {...props}
      >
        {children}
      </blockquote>
    ),

    // Unordered lists
    ul: ({ children, ...props }) => (
      <ul className="list-disc pl-6 mb-6 space-y-2" {...props}>
        {children}
      </ul>
    ),

    // Ordered lists
    ol: ({ children, ...props }) => (
      <ol className="list-decimal pl-6 mb-6 space-y-2" {...props}>
        {children}
      </ol>
    ),

    // List items
    li: ({ children, ...props }) => (
      <li className="text-gray-700 leading-relaxed" {...props}>
        {children}
      </li>
    ),

    // Images with Next.js Image optimization for internal images
    img: ({ src, alt, ...props }) => {
      if (!src) return null;

      const isExternal = src.startsWith("http");

      if (isExternal) {
        // Use standard <img> for external images to avoid additional processing/costs
        // External images are lazy-loaded with proper attributes for performance
        return (
          <span className="block my-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt || ""}
              loading="lazy"
              decoding="async"
              className="rounded-2xl shadow-lg w-full h-auto"
              {...props}
            />
          </span>
        );
      }

      // For internal images, use Next.js Image
      return (
        <span className="block my-8 relative w-full">
          <Image
            src={src}
            alt={alt || ""}
            width={1200}
            height={675}
            className="rounded-2xl shadow-lg w-full h-auto"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          />
        </span>
      );
    },

    // Tables with responsive wrapper
    table: ({ children, ...props }) => (
      <div className="overflow-x-auto my-8 rounded-lg border border-gray-200 shadow-sm">
        <table
          className="min-w-full divide-y divide-gray-200 text-sm"
          {...props}
        >
          {children}
        </table>
      </div>
    ),

    // Table header
    thead: ({ children, ...props }) => (
      <thead className="bg-gray-50" {...props}>
        {children}
      </thead>
    ),

    // Table body
    tbody: ({ children, ...props }) => (
      <tbody className="bg-white divide-y divide-gray-200" {...props}>
        {children}
      </tbody>
    ),

    // Table row
    tr: ({ children, ...props }) => (
      <tr className="hover:bg-gray-50 transition-colors" {...props}>
        {children}
      </tr>
    ),

    // Table header cell
    th: ({ children, ...props }) => (
      <th
        className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
        {...props}
      >
        {children}
      </th>
    ),

    // Table data cell
    td: ({ children, ...props }) => (
      <td className="px-6 py-4 text-gray-700" {...props}>
        {children}
      </td>
    ),

    // Horizontal rule
    hr: (props) => (
      <hr className="my-8 border-t-2 border-gray-200" {...props} />
    ),
  };

  return (
    <div className="blog-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[
          rehypeSanitize,
          rehypeHighlight,
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: "wrap" }],
        ]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
