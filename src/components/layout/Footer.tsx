import { Facebook, Mail, MapPin, Phone, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-coconut-brown text-coconut-cream">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-coconut-cream rounded-full flex items-center justify-center">
                <span className="text-coconut-brown font-bold text-sm">NM</span>
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
                <a
                  href="#"
                  className="hover:text-coconut-cream transition-colors"
                >
                  Kẹo Dừa Truyền Thống
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-coconut-cream transition-colors"
                >
                  Kẹo Dừa Sầu Riêng
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-coconut-cream transition-colors"
                >
                  Kẹo Dừa Lá Dứa
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-coconut-cream transition-colors"
                >
                  Kẹo Dừa Chocolate
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-coconut-cream transition-colors"
                >
                  Hộp Quà Tặng
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold">Dịch Vụ</h4>
            <ul className="space-y-2 text-coconut-cream/80">
              <li>
                <a
                  href="#"
                  className="hover:text-coconut-cream transition-colors"
                >
                  Đại Lý Phân Phối
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-coconut-cream transition-colors"
                >
                  Đặt Hàng Online
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-coconut-cream transition-colors"
                >
                  Giao Hàng Toàn Quốc
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-coconut-cream transition-colors"
                >
                  Tư Vấn Sản Phẩm
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-coconut-cream transition-colors"
                >
                  Chăm Sóc Khách Hàng
                </a>
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
                    73B1 Nguyễn Văn Tư, P.7, TP Bến Tre, Việt Nam
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
                <p>info@keodua-ngocmai.vn</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="#"
                className="w-10 h-10 bg-coconut-cream/10 hover:bg-coconut-cream/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-coconut-cream/10 hover:bg-coconut-cream/20 rounded-full flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-coconut-cream/10 hover:bg-coconut-cream/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-coconut-cream/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-coconut-cream/80 text-sm">
              © 2024 Kẹo Dừa Ngọc Mai. Tất cả quyền được bảo lưu.
            </div>
            <div className="flex items-center gap-6 text-sm text-coconut-cream/80">
              <a
                href="#"
                className="hover:text-coconut-cream transition-colors"
              >
                Chính Sách Bảo Mật
              </a>
              <a
                href="#"
                className="hover:text-coconut-cream transition-colors"
              >
                Điều Khoản Sử Dụng
              </a>
              <a
                href="#"
                className="hover:text-coconut-cream transition-colors"
              >
                Chính Sách Đổi Trả
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Contact Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <a
          href="tel:0915888999"
          className="w-14 h-14 bg-nature-green hover:bg-nature-green/90 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
          aria-label="Gọi điện"
        >
          <Phone className="w-6 h-6 text-white" />
        </a>
        <a
          href="https://zalo.me/0915888999"
          className="w-14 h-14 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
          aria-label="Chat Zalo"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </a>
        <a
          href="https://m.me/keodua.ngocmai"
          className="w-14 h-14 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
          aria-label="Chat Facebook"
        >
          <Facebook className="w-6 h-6 text-white" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
