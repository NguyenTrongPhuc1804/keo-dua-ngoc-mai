import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const BrandIntroduction = () => {
  return (
    <section
      id="brand"
      className="py-20 bg-[#FFCB61]"
      // style={{
      //   backgroundImage:
      //     "radial-gradient(circle 232px at 10% 20%, rgba(251,238,115,0.74) 0%, rgba(241,195,87,0.74) 90%)",
      // }}
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <Image
              src="/image/intro-brand.jpg"
              alt="Vườn dừa Bến Tre"
              className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
              width={500}
              height={500}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coconut-brown/20 to-transparent rounded-2xl"></div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                Thương Hiệu Kẹo dừa
                <span className="block text-coconut-brown">Ngọc Mai</span>
              </h2>
              <div className="w-24 h-1 bg-nature-green rounded-full"></div>
            </div>

            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Được thành lập từ năm 1995 tại Bến Tre - xứ sở của những cây dừa
                xanh mướt, Ngọc Mai tự hào là thương hiệu kẹo dừa hàng đầu miền
                Tây.
              </p>

              <p className="text-lg leading-relaxed">
                Với hơn 25 năm kinh nghiệm, chúng tôi luôn giữ gìn bí quyết làm
                kẹo truyền thống được truyền lại từ thế hệ cha ông, kết hợp với
                công nghệ hiện đại để tạo ra những sản phẩm chất lượng cao.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="border-0 bg-white/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-coconut-brown mb-2">
                    25+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Năm Kinh Nghiệm
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-coconut-brown mb-2">
                    100%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Nguyên Liệu Tự Nhiên
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandIntroduction;
