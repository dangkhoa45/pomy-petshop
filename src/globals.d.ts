declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.sass" {
  const content: { [className: string]: string };
  export default content;
}

// Remark and Rehype plugin type declarations
declare module "remark-parse";
declare module "remark-gfm";
declare module "remark-rehype";
declare module "rehype-sanitize";
declare module "rehype-stringify";
declare module "rehype-slug";
declare module "rehype-autolink-headings";
declare module "rehype-prism-plus";
