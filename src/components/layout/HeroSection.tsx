import { Button } from "@/components/ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-[#FFCB61] via-coconut-cream to-nature-green/20 overflow-hidden"
    >
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-coconut-brown rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-nature-green rounded-full blur-3xl"></div>
      </div> */}

      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Kẹo Dừa
                <span className="block text-coconut-brown">Ngọc Mai</span>
              </h1>
              <p className="text-2xl lg:text-3xl text-muted-foreground font-medium">
                Hương vị ngọt ngào từ xứ Dừa
              </p>
              <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0">
                Thưởng thức tinh hoa ẩm thực miền Tây với kẹo dừa Bến Tre được
                chế biến thủ công từ những nguyên liệu tươi ngon nhất.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="hero"
                size="lg"
                className="text-lg px-8 py-6 cursor-pointer"
              >
                <a href="#contact">Mua Ngay</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 cursor-pointer"
              >
                <a href="#products">Tìm Hiểu Thêm Sản Phẩm</a>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-nature-green rounded-full"></div>
                <span>100% Nguyên Liệu Tự Nhiên</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-coconut-brown rounded-full"></div>
                <span>Thủ Công Truyền Thống</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-secondary rounded-full"></div>
                <span>Chứng Nhận ATTP</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src={"/image/hero-banner.jpg"}
                alt="Kẹo Dừa Ngọc Mai"
                width={600}
                height={600}
                className="w-full h-96 rounded-3xl shadow-2xl object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-coconut-brown/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-nature-green/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
