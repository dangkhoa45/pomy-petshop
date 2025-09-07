// Business Information Constants
export const BUSINESS_INFO = {
  name: "POMY PETSHOP",
  phone: "070 803 9333",
  email: "tust3000@gmail.com",
  address: "31 Phú Lợi, Phường 2, Sóc Trăng, TP Sóc Trăng, Việt Nam",
  facebook: "https://www.facebook.com/PetshopPomy",
  mapsUrl: "https://maps.app.goo.gl/g8ENXpPKNb9vrRET9",
  tagline: "Cắt Tỉa, Vệ Sinh, Khách Sạn Thú Cưng",
  logo: "/images/pomy-petshop-logo.jpg",
} as const;

// Navigation Links
export const NAV_LINKS = [
  { path: "/", label: "Trang chủ" },
  { path: "/about", label: "Giới thiệu" },
  { path: "/services", label: "Dịch vụ" },
  { path: "/contact", label: "Liên hệ" },
] as const;

// Statistics Data
export const STATISTICS = [
  { 
    key: "petsCared", 
    value: 1000, 
    label: "Thú cưng đã chăm sóc",
    icon: "PetsCared"
  },
  { 
    key: "happyClients", 
    value: 800, 
    label: "Số lượng đánh giá 5 sao",
    icon: "StartIcon"
  },
  { 
    key: "dailyBookings", 
    value: 100, 
    label: "Đặt lịch hàng ngày",
    icon: "CalendarIcon"
  },
  { 
    key: "hotelRooms", 
    value: 500, 
    label: "Sự kiện cho thú cưng",
    icon: "EventIcon"
  },
] as const;

// Services List
export const SERVICES = [
  "Cắt tỉa lông",
  "Vệ sinh toàn thân", 
  "Khách sạn thú cưng",
] as const;

// Social Media
export const SOCIAL_MEDIA = {
  facebook: {
    url: "https://www.facebook.com/PetshopPomy",
    name: "Fanpage: Pomy Petshop"
  }
} as const;
