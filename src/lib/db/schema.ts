import {
  pgTable,
  uuid,
  varchar,
  text,
  timestamp,
  pgEnum,
  integer,
  boolean,
  index,
  unique,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// Enums
export const roleEnum = pgEnum("role", ["admin", "editor", "author", "viewer"]);
export const postStatusEnum = pgEnum("post_status", [
  "draft",
  "published",
  "archived",
]);

// Profiles table - liên kết với Supabase Auth
export const profiles = pgTable(
  "profiles",
  {
    id: uuid("id").primaryKey().notNull(), // Supabase user id
    email: varchar("email", { length: 255 }).notNull().unique(),
    fullName: varchar("full_name", { length: 255 }),
    avatarUrl: text("avatar_url"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (table) => ({
    emailIdx: index("profiles_email_idx").on(table.email),
  })
);

// Members table - quản lý role và permissions
export const members = pgTable(
  "members",
  {
    id: uuid("id").defaultRandom().primaryKey().notNull(),
    profileId: uuid("profile_id")
      .references(() => profiles.id, { onDelete: "cascade" })
      .notNull(),
    role: roleEnum("role").default("author").notNull(),
    bio: text("bio"),
    isActive: boolean("is_active").default(true).notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (table) => ({
    profileIdIdx: index("members_profile_id_idx").on(table.profileId),
    roleIdx: index("members_role_idx").on(table.role),
    uniqueProfile: unique("members_profile_id_unique").on(table.profileId),
  })
);

// Categories table
export const categories = pgTable(
  "categories",
  {
    id: uuid("id").defaultRandom().primaryKey().notNull(),
    name: varchar("name", { length: 100 }).notNull(),
    slug: varchar("slug", { length: 100 }).notNull().unique(),
    description: text("description"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (table) => ({
    slugIdx: index("categories_slug_idx").on(table.slug),
  })
);

// Tags table
export const tags = pgTable(
  "tags",
  {
    id: uuid("id").defaultRandom().primaryKey().notNull(),
    name: varchar("name", { length: 50 }).notNull(),
    slug: varchar("slug", { length: 50 }).notNull().unique(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => ({
    slugIdx: index("tags_slug_idx").on(table.slug),
  })
);

// Posts table
export const posts = pgTable(
  "posts",
  {
    id: uuid("id").defaultRandom().primaryKey().notNull(),
    title: varchar("title", { length: 255 }).notNull(),
    slug: varchar("slug", { length: 255 }).notNull().unique(),
    excerpt: text("excerpt"),
    contentMarkdown: text("content_markdown").notNull(),
    contentHtml: text("content_html"), // Cache HTML rendered từ markdown
    featuredImage: text("featured_image"),
    status: postStatusEnum("status").default("draft").notNull(),
    publishedAt: timestamp("published_at"),

    // SEO fields
    seoTitle: varchar("seo_title", { length: 60 }),
    seoDescription: varchar("seo_description", { length: 160 }),
    ogImage: text("og_image"),

    // Author
    authorId: uuid("author_id").references(() => profiles.id, {
      onDelete: "set null",
    }),

    // Stats
    viewCount: integer("view_count").default(0).notNull(),

    // Timestamps
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (table) => ({
    slugIdx: index("posts_slug_idx").on(table.slug),
    statusIdx: index("posts_status_idx").on(table.status),
    authorIdx: index("posts_author_id_idx").on(table.authorId),
    publishedAtIdx: index("posts_published_at_idx").on(table.publishedAt),
  })
);

// Post Categories junction table
export const postCategories = pgTable(
  "post_categories",
  {
    id: uuid("id").defaultRandom().primaryKey().notNull(),
    postId: uuid("post_id")
      .references(() => posts.id, { onDelete: "cascade" })
      .notNull(),
    categoryId: uuid("category_id")
      .references(() => categories.id, { onDelete: "cascade" })
      .notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => ({
    postIdIdx: index("post_categories_post_id_idx").on(table.postId),
    categoryIdIdx: index("post_categories_category_id_idx").on(
      table.categoryId
    ),
    uniquePostCategory: unique("post_categories_unique").on(
      table.postId,
      table.categoryId
    ),
  })
);

// Post Tags junction table
export const postTags = pgTable(
  "post_tags",
  {
    id: uuid("id").defaultRandom().primaryKey().notNull(),
    postId: uuid("post_id")
      .references(() => posts.id, { onDelete: "cascade" })
      .notNull(),
    tagId: uuid("tag_id")
      .references(() => tags.id, { onDelete: "cascade" })
      .notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => ({
    postIdIdx: index("post_tags_post_id_idx").on(table.postId),
    tagIdIdx: index("post_tags_tag_id_idx").on(table.tagId),
    uniquePostTag: unique("post_tags_unique").on(table.postId, table.tagId),
  })
);

// Post Revisions table - lưu lịch sử chỉnh sửa
export const postRevisions = pgTable(
  "post_revisions",
  {
    id: uuid("id").defaultRandom().primaryKey().notNull(),
    postId: uuid("post_id")
      .references(() => posts.id, { onDelete: "cascade" })
      .notNull(),
    title: varchar("title", { length: 255 }).notNull(),
    contentMarkdown: text("content_markdown").notNull(),
    createdBy: uuid("created_by").references(() => profiles.id, {
      onDelete: "set null",
    }),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => ({
    postIdIdx: index("post_revisions_post_id_idx").on(table.postId),
    createdAtIdx: index("post_revisions_created_at_idx").on(table.createdAt),
  })
);

// Relations
export const profilesRelations = relations(profiles, ({ one, many }) => ({
  member: one(members, {
    fields: [profiles.id],
    references: [members.profileId],
  }),
  posts: many(posts),
  revisions: many(postRevisions),
}));

export const membersRelations = relations(members, ({ one }) => ({
  profile: one(profiles, {
    fields: [members.profileId],
    references: [profiles.id],
  }),
}));

export const postsRelations = relations(posts, ({ one, many }) => ({
  author: one(profiles, {
    fields: [posts.authorId],
    references: [profiles.id],
  }),
  postCategories: many(postCategories),
  postTags: many(postTags),
  revisions: many(postRevisions),
}));

export const categoriesRelations = relations(categories, ({ many }) => ({
  postCategories: many(postCategories),
}));

export const tagsRelations = relations(tags, ({ many }) => ({
  postTags: many(postTags),
}));

export const postCategoriesRelations = relations(postCategories, ({ one }) => ({
  post: one(posts, {
    fields: [postCategories.postId],
    references: [posts.id],
  }),
  category: one(categories, {
    fields: [postCategories.categoryId],
    references: [categories.id],
  }),
}));

export const postTagsRelations = relations(postTags, ({ one }) => ({
  post: one(posts, {
    fields: [postTags.postId],
    references: [posts.id],
  }),
  tag: one(tags, {
    fields: [postTags.tagId],
    references: [tags.id],
  }),
}));

export const postRevisionsRelations = relations(postRevisions, ({ one }) => ({
  post: one(posts, {
    fields: [postRevisions.postId],
    references: [posts.id],
  }),
  creator: one(profiles, {
    fields: [postRevisions.createdBy],
    references: [profiles.id],
  }),
}));

// Types
export type Profile = typeof profiles.$inferSelect;
export type InsertProfile = typeof profiles.$inferInsert;

export type Member = typeof members.$inferSelect;
export type InsertMember = typeof members.$inferInsert;

export type Post = typeof posts.$inferSelect;
export type InsertPost = typeof posts.$inferInsert;

export type Category = typeof categories.$inferSelect;
export type InsertCategory = typeof categories.$inferInsert;

export type Tag = typeof tags.$inferSelect;
export type InsertTag = typeof tags.$inferInsert;

export type PostCategory = typeof postCategories.$inferSelect;
export type InsertPostCategory = typeof postCategories.$inferInsert;

export type PostTag = typeof postTags.$inferSelect;
export type InsertPostTag = typeof postTags.$inferInsert;

export type PostRevision = typeof postRevisions.$inferSelect;
export type InsertPostRevision = typeof postRevisions.$inferInsert;
