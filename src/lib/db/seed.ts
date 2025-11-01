import { db } from "./index";
import { categories, tags } from "./schema";

async function seed() {
  console.log("🌱 Seeding database...");

  try {
    // Seed categories
    const defaultCategories = [
      {
        name: "Chăm sóc thú cưng",
        slug: "cham-soc-thu-cung",
        description: "Hướng dẫn chăm sóc thú cưng toàn diện",
      },
      {
        name: "Dinh dưỡng",
        slug: "dinh-duong",
        description: "Kiến thức về dinh dưỡng cho thú cưng",
      },
      {
        name: "Sức khỏe",
        slug: "suc-khoe",
        description: "Thông tin về sức khỏe và bệnh tật",
      },
      {
        name: "Huấn luyện",
        slug: "huan-luyen",
        description: "Mẹo và kỹ thuật huấn luyện thú cưng",
      },
      {
        name: "Làm đẹp",
        slug: "lam-dep",
        description: "Dịch vụ spa và làm đẹp cho thú cưng",
      },
    ];

    await db.insert(categories).values(defaultCategories).onConflictDoNothing();
    console.log("✅ Categories seeded");

    // Seed tags
    const defaultTags = [
      { name: "chó", slug: "cho" },
      { name: "mèo", slug: "meo" },
      { name: "thỏ", slug: "tho" },
      { name: "hamster", slug: "hamster" },
      { name: "chăm sóc", slug: "cham-soc" },
      { name: "tắm rửa", slug: "tam-rua" },
      { name: "cắt tỉa", slug: "cat-tia" },
      { name: "khám bệnh", slug: "kham-benh" },
      { name: "tiêm phòng", slug: "tiem-phong" },
      { name: "thức ăn", slug: "thuc-an" },
    ];

    await db.insert(tags).values(defaultTags).onConflictDoNothing();
    console.log("✅ Tags seeded");

    console.log("🎉 Seeding completed successfully!");
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    throw error;
  }

  process.exit(0);
}

seed();
