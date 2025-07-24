import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Chị Minh Châu",
    location: "TP. Hồ Chí Minh",
    rating: 5,
    comment:
      "Kẹo dừa Ngọc Mai có vị rất thơm ngon, giống như hương vị thời thơ ấu. Tôi đã giới thiệu cho nhiều người bạn và mọi người đều khen ngợi.",
    avatar: "MC",
  },
  {
    name: "Anh Văn Thành",
    location: "Hà Nội",
    rating: 5,
    comment:
      "Mua về làm quà biếu gia đình ở quê, ai cũng khen ngon. Đóng gói đẹp, giao hàng nhanh. Sẽ tiếp tục ủng hộ thương hiệu.",
    avatar: "VT",
  },
  {
    name: "Cô Thanh Hương",
    location: "Đà Nẵng",
    rating: 5,
    comment:
      "Kẹo dừa Ngọc Mai thực sự làm tôi hài lòng. Kẹo đa dạng nhân viên thân thiện nhiệt tình, đúng chuẩn vị truyền thống.",
    avatar: "TH",
  },
];

// const certifications = [
//   {
//     title: "Chứng nhận ATTP",
//     description: "Đạt tiêu chuẩn an toàn thực phẩm Việt Nam",
//     icon: "🏆",
//   },
//   {
//     title: "ISO 22000",
//     description: "Hệ thống quản lý an toàn thực phẩm quốc tế",
//     icon: "⭐",
//   },
//   {
//     title: "HACCP",
//     description: "Chứng nhận quy trình sản xuất an toàn",
//     icon: "✅",
//   },
//   {
//     title: "Thương hiệu Việt",
//     description: "Được công nhận là thương hiệu Việt Nam",
//     icon: "🇻🇳",
//   },
// ];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-20 bg-[#FFCB61] "
      // style={{
      //   backgroundImage:
      //     "radial-gradient(circle 232px at 10% 20%, rgba(251,238,115,0.74) 0%, rgba(241,195,87,0.74) 90%)",
      // }}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Đánh Giá Khách Hàng
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hàng ngàn khách hàng tin tưởng và yêu thích sản phẩm kẹo dừa Ngọc
            Mai
          </p>
          <div className="w-24 h-1 bg-coconut-brown rounded-full mx-auto mt-6"></div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Stars */}
                  <div className="flex items-center gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-muted-foreground leading-relaxed">
                    &ldquo;{testimonial.comment}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t">
                    <div className="w-12 h-12 bg-gradient-to-br from-coconut-brown to-coconut-brown/80 text-coconut-cream rounded-full flex items-center justify-center font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        {/* <div className="bg-gradient-to-br from-coconut-light/30 to-secondary/20 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Chứng Nhận & Giải Thưởng
            </h3>
            <p className="text-muted-foreground">
              Những chứng nhận uy tín khẳng định chất lượng sản phẩm Ngọc Mai
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="border-0 bg-white/70 backdrop-blur-sm hover:bg-white transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{cert.icon}</div>
                  <h4 className="font-bold text-foreground mb-2">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {cert.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-coconut-brown mb-2">
              10,000+
            </div>
            <div className="text-muted-foreground">Khách Hàng Hài Lòng</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-coconut-brown mb-2">
              25+
            </div>
            <div className="text-muted-foreground">Năm Kinh Nghiệm</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-coconut-brown mb-2">
              50+
            </div>
            <div className="text-muted-foreground">Tỉnh Thành Phủ Sóng</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-coconut-brown mb-2">
              4.9/5
            </div>
            <div className="text-muted-foreground">Đánh Giá Trung Bình</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
