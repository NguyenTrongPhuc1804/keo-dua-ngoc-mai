import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import ProcessImage from "/public/image/quy-trinh.webp";
const processSteps = [
  {
    step: "01",
    title: "Chọn Lọc Nguyên Liệu",
    description:
      "Dừa tươi được chọn lọc kỹ lưỡng từ những cây dừa già, có múi dày và ngọt tự nhiên.",
  },
  {
    step: "02",
    title: "Nạo Dừa & Ép Sữa",
    description:
      "Cơm dừa được nạo mịn và ép lấy sữa dừa đậm đà, giữ nguyên hương vị tự nhiên.",
  },
  {
    step: "03",
    title: "Nấu Kẹo Thủ Công",
    description:
      "Sữa dừa được nấu với đường phèn theo tỷ lệ bí quyết, khuấy đều bằng tay trong 3-4 giờ.",
  },
  {
    step: "04",
    title: "Tạo Hình & Bảo Quản",
    description:
      "Kẹo được tạo hình thủ công, gói cẩn thận và bảo quản trong điều kiện tối ưu.",
  },
];

const ProductionProcess = () => {
  return (
    <section
      id="process"
      className="py-20 bg-gradient-to-br from-secondary/20 to-coconut-light/30"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Quy Trình Sản Xuất
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Khám phá quy trình làm kẹo dừa thủ công truyền thống được truyền lại
            qua nhiều thế hệ
          </p>
          <div className="w-24 h-1 bg-coconut-brown rounded-full mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Process Image */}
          <div className="relative">
            <Image
              src={ProcessImage}
              alt="Quy trình sản xuất kẹo dừa"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
              width={600}
              height={600}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coconut-brown/10 to-transparent rounded-2xl"></div>

            {/* Floating cards */}
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg border-2 border-nature-green/20">
              <div className="text-2xl font-bold text-coconut-brown">25+</div>
              <div className="text-sm text-muted-foreground">
                Năm Kinh Nghiệm
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg border-2 border-coconut-brown/20">
              <div className="text-2xl font-bold text-nature-green">100%</div>
              <div className="text-sm text-muted-foreground">Thủ Công</div>
            </div>
          </div>

          {/* Process Steps */}
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-coconut-brown to-coconut-brown/80 text-coconut-cream rounded-full flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-coconut-brown transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quality Assurance */}
        <div className="mt-16 text-center">
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Cam Kết Chất Lượng
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <div className="w-16 h-16 bg-nature-green/20 rounded-full flex items-center justify-center mx-auto">
                  <div className="w-8 h-8 bg-nature-green rounded-full"></div>
                </div>
                <h4 className="font-semibold text-foreground">
                  Nguyên Liệu Tự Nhiên
                </h4>
                <p className="text-sm text-muted-foreground">
                  100% dừa tươi Bến Tre
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-16 h-16 bg-coconut-brown/20 rounded-full flex items-center justify-center mx-auto">
                  <div className="w-8 h-8 bg-coconut-brown rounded-full"></div>
                </div>
                <h4 className="font-semibold text-foreground">
                  Quy Trình Thủ Công
                </h4>
                <p className="text-sm text-muted-foreground">
                  Kỹ thuật truyền thống
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-16 h-16 bg-secondary/50 rounded-full flex items-center justify-center mx-auto">
                  <div className="w-8 h-8 bg-secondary rounded-full"></div>
                </div>
                <h4 className="font-semibold text-foreground">
                  Chứng Nhận ATTP
                </h4>
                <p className="text-sm text-muted-foreground">Đảm bảo an toàn</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductionProcess;
