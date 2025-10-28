import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";
import rehypeParse from "rehype-parse";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";

/**
 * Convert Markdown to HTML
 */
export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await unified()
    .use(remarkParse) // Parse markdown
    .use(remarkGfm) // Support GitHub Flavored Markdown
    .use(remarkHtml, { sanitize: false }) // Convert to HTML
    .process(markdown);

  // Sanitize and add syntax highlighting
  const sanitized = await unified()
    .use(rehypeParse, { fragment: true })
    .use(rehypeSanitize)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(result.toString());

  return sanitized.toString();
}

/**
 * Generate excerpt from markdown
 */
export function generateExcerpt(
  markdown: string,
  maxLength: number = 160
): string {
  // Remove markdown syntax
  const plainText = markdown
    .replace(/#{1,6}\s/g, "") // Remove headers
    .replace(/\*\*(.+?)\*\*/g, "$1") // Remove bold
    .replace(/\*(.+?)\*/g, "$1") // Remove italic
    .replace(/\[(.+?)\]\(.+?\)/g, "$1") // Remove links
    .replace(/`(.+?)`/g, "$1") // Remove inline code
    .replace(/```[\s\S]*?```/g, "") // Remove code blocks
    .replace(/!\[.*?\]\(.*?\)/g, "") // Remove images
    .replace(/\n+/g, " ") // Replace newlines with spaces
    .trim();

  if (plainText.length <= maxLength) {
    return plainText;
  }

  // Cut at word boundary
  const truncated = plainText.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");

  return truncated.substring(0, lastSpace) + "...";
}

/**
 * Extract first image from markdown
 */
export function extractFirstImage(markdown: string): string | null {
  const imageRegex = /!\[.*?\]\((.*?)\)/;
  const match = markdown.match(imageRegex);
  return match ? match[1] : null;
}

/**
 * Count words in markdown
 */
export function countWords(markdown: string): number {
  const plainText = markdown
    .replace(/```[\s\S]*?```/g, "") // Remove code blocks
    .replace(/`[^`]+`/g, "") // Remove inline code
    .replace(/[#*_~`\[\]()]/g, "") // Remove markdown syntax
    .trim();

  const words = plainText.split(/\s+/).filter((word) => word.length > 0);
  return words.length;
}

/**
 * Estimate reading time (assuming 200 words per minute)
 */
export function estimateReadingTime(markdown: string): number {
  const words = countWords(markdown);
  return Math.ceil(words / 200);
}
