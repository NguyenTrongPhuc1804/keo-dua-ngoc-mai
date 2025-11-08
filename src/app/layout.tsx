// Root layout tối thiểu
// Layout chính với html/body nằm trong [locale]/layout.tsx
// Root layout này chỉ để Next.js không báo lỗi khi truy cập root path
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kẹo Dừa Ngọc Mai",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Vì page.tsx sẽ redirect ngay, nên không cần render gì ở đây
  // Nhưng Next.js yêu cầu return children
  return children;
}

