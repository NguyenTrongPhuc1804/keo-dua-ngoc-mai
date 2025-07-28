import { Facebook, Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-coconut-brown text-coconut-cream">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-coconut-cream rounded-full flex items-center justify-center">
                <Image
                  src="/image/logo.png"
                  alt="Ngọc Mai"
                  width={32}
                  height={32}
                  loading="lazy"
                  className="w-8 h-8 rounded-full   "
                />
              </div>
              <h3 className="text-2xl font-bold">Ngọc Mai</h3>
            </div>
            <p className="text-coconut-cream/80 leading-relaxed">
              Thương hiệu kẹo dừa hàng đầu Bến Tre với hơn 25 năm kinh nghiệm,
              mang đến hương vị truyền thống đậm đà từ xứ sở dừa.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-nature-green rounded-full"></div>
              <span className="text-sm">100% Nguyên liệu tự nhiên</span>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold">Sản Phẩm</h4>
            <ul className="space-y-2 text-coconut-cream/80">
              <li>
                <Link
                  href="/#products"
                  className="hover:text-coconut-cream transition-colors"
                >
                  Kẹo Dừa Truyền Thống
                </Link>
              </li>
              <li>
                <Link
                  href="/#products"
                  className="hover:text-coconut-cream transition-colors"
                >
                  Kẹo Dừa Sầu Riêng
                </Link>
              </li>
              <li>
                <Link
                  href="/#products"
                  className="hover:text-coconut-cream transition-colors"
                >
                  Kẹo Dừa Lá Dứa
                </Link>
              </li>
              <li>
                <Link
                  href="/#products"
                  className="hover:text-coconut-cream transition-colors"
                >
                  Kẹo Dừa Chuối
                </Link>
              </li>
              <li>
                <Link
                  href="/#products"
                  className="hover:text-coconut-cream transition-colors"
                >
                  Hộp Quà Tặng
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold">Dịch Vụ</h4>
            <ul className="space-y-2 text-coconut-cream/80">
              <li>
                <Link
                  href="#"
                  className="hover:text-coconut-cream transition-colors"
                >
                  Đại Lý Phân Phối
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-coconut-cream transition-colors"
                >
                  Đặt Hàng Online
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-coconut-cream transition-colors"
                >
                  Giao Hàng Toàn Quốc
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-coconut-cream transition-colors"
                >
                  Tư Vấn Sản Phẩm
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-coconut-cream transition-colors"
                >
                  Chăm Sóc Khách Hàng
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold">Liên Hệ</h4>
            <div className="space-y-3 text-coconut-cream/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Văn Phòng Chính</p>
                  <p className="text-sm">
                    73B1 Nguyễn Văn Tư, P.Bến Tre, Vĩnh Long
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <div>
                  <p> 0939.38.7070</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <p>keoduangocmaibentre@gmail.com</p>
              </div>
            </div>

            {/* Social Media */}
            {/* <div className="flex items-center gap-4 pt-4">
              <Link
                href="#"
                className="w-10 h-10 bg-coconut-cream/10 hover:bg-coconut-cream/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-coconut-cream/10 hover:bg-coconut-cream/20 rounded-full flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-coconut-cream/10 hover:bg-coconut-cream/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div> */}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-coconut-cream/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-coconut-cream/80 text-sm">
              © 2024 Kẹo Dừa Ngọc Mai. Tất cả quyền được bảo lưu.
            </div>
            <div className="flex items-center gap-6 text-sm text-coconut-cream/80">
              <Link
                href="#"
                className="hover:text-coconut-cream transition-colors"
              >
                Chính Sách Bảo Mật
              </Link>
              <Link
                href="#"
                className="hover:text-coconut-cream transition-colors"
              >
                Điều Khoản Sử Dụng
              </Link>
              <Link
                href="#"
                className="hover:text-coconut-cream transition-colors"
              >
                Chính Sách Đổi Trả
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Contact Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <Link
          href="tel:0939387070"
          className="w-14 h-14 bg-nature-green hover:bg-nature-green/90 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
          aria-label="Gọi điện"
        >
          <Phone className="w-6 h-6 text-white" />
        </Link>
        <Link
          href="https://zalo.me/0939387070"
          className="w-14 h-14 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
          aria-label="Chat Zalo"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
