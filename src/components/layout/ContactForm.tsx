"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  MessageCircle,
} from "lucide-react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "../ui/form";

const formSchema = z.object({
  name: z
    .string()
    .nonempty("Họ tên là bắt buộc")
    .min(1, "Họ và tên là bắt buộc"),
  email: z.string().nonempty("Email là bắt buộc").email("Email không hợp lệ"),
  message: z.string().min(1, "Nội dung là bắt buộc"),
  phone: z.string().min(9, "Số điện thoại phải có ít nhất 9 chữ số"),
});

const ContactForm = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   phone: "",
  //   email: "",
  //   product: "",
  //   quantity: "",
  //   message: "",
  // });

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Simulate form submission
  //   toast.success("Đơn hàng đã được gửi!", {
  //     description:
  //       "Chúng tôi sẽ liên hệ với bạn trong vòng 24h. Cảm ơn bạn đã quan tâm đến sản phẩm Ngọc Mai!",
  //   });
  //   setFormData({
  //     name: "",
  //     phone: "",
  //     email: "",
  //     product: "",
  //     quantity: "",
  //     message: "",
  //   });
  // };

  // const handleInputChange = (field: string, value: string) => {
  //   setFormData((prev) => ({
  //     ...prev,
  //     [field]: value,
  //   }));
  // };

  //---------------------------------------------------
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      phone: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        throw new Error("Gửi email thất bại");
      }

      toast.success(
        "Gửi liên hệ thành công! Chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất."
      );
      form.reset();
    } catch (error) {
      console.error("Client error:", error);
      toast.error("Gửi liên hệ thất bại! Vui lòng thử lại sau.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="py-20 bg-[#FFCB61]"
      style={{
        backgroundImage:
          "radial-gradient(circle 232px at 10% 20%, rgba(251,238,115,0.74) 0%, rgba(241,195,87,0.74) 90%)",
      }}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Liên Hệ Đặt Hàng
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hãy để lại thông tin để được tư vấn và báo giá tốt nhất cho sản phẩm
            kẹo dừa Ngọc Mai
          </p>
          <div className="w-24 h-1 bg-coconut-brown rounded-full mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">
                Thông Tin Đặt Hàng
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">
                          Họ và tên
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Nhập họ và tên" {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium">
                              Họ và tên
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="Nhập họ và tên" {...field} />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="space-y-2">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium">
                              Họ và tên
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Nhập số điện thoại"
                                {...field}
                              />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium">
                            Họ và tên
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Nhập email" {...field} />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="product">Sản Phẩm Quan Tâm</Label>
                    <Select
                      value={formData.product}
                      onValueChange={(value) =>
                        handleInputChange("product", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Chọn sản phẩm" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="traditional">
                          Kẹo Dừa Truyền Thống
                        </SelectItem>
                        <SelectItem value="durian">
                          Kẹo Dừa Sầu Riêng
                        </SelectItem>
                        <SelectItem value="pandan">Kẹo Dừa Lá Dứa</SelectItem>
                        <SelectItem value="chocolate">
                          Kẹo Dừa Chocolate
                        </SelectItem>
                        <SelectItem value="mixed">Hộp Kẹo Tổng Hợp</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="quantity">Số Lượng</Label>
                    <Input
                      id="quantity"
                      value={formData.quantity}
                      onChange={(e) =>
                        handleInputChange("quantity", e.target.value)
                      }
                      placeholder="Số lượng cần đặt"
                    />
                  </div>
                </div> */}

                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium">
                            Họ và tên
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Nhập ghi chú hoặc yêu cầu đặc biệt..."
                              {...field}
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                  >
                    {isSubmitting ? "Đang gửi..." : "Gửi tin nhắn"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Main Contact */}
            <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  Thông Tin Liên Hệ
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-coconut-brown/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-coconut-brown" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Địa Chỉ
                    </h4>
                    <p className="text-muted-foreground">
                      73B1 Nguyễn Văn Tư, P.Bến Tre, Vĩnh Long
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-nature-green/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-nature-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Điện Thoại
                    </h4>
                    <p className="text-muted-foreground">0939.38.7070</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary/50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Email
                    </h4>
                    <p className="text-muted-foreground">
                      info@keodua-ngocmai.vn
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-coconut-light/50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-coconut-brown" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Giờ Làm Việc
                    </h4>
                    <p className="text-muted-foreground">
                      Thứ 2 - CN: 8:00 - 17:30
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">
                  Kết Nối Với Chúng Tôi
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    className="h-14 flex items-center gap-3"
                  >
                    <Facebook className="w-5 h-5 text-blue-600" />
                    <div className="text-left">
                      <div className="text-sm font-medium">Facebook</div>
                      <div className="text-xs text-muted-foreground">
                        Kẹo Dừa Ngọc Mai
                      </div>
                    </div>
                  </Button>

                  <Button
                    variant="outline"
                    className="h-14 flex items-center gap-3"
                  >
                    <MessageCircle className="w-5 h-5 text-green-600" />
                    <div className="text-left">
                      <div className="text-sm font-medium">Zalo</div>
                      <div className="text-xs text-muted-foreground">
                        0915.888.999
                      </div>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className=" relative border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="h-64 bg-gradient-to-br from-coconut-light/30 to-nature-green/10 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.420507408437!2d106.35166277508114!3d10.227628989889705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310aa8711332b453%3A0xe616e91a60e497e!2zNzMgxJAuIE5ndXnhu4VuIFbEg24gVMawLCBQaMaw4budbmcgNywgQuG6v24gVHJlLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1753257359578!5m2!1sen!2s"
                      width="600"
                      height="450"
                      // style="border:0;"
                      // allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full rounded-lg absolute inset-0"
                    ></iframe>
                    <MapPin className="z-50 w-12 h-12 text-coconut-brown mx-auto mb-2" />
                    <p className="text-muted-foreground">Bản đồ Google Maps</p>
                    <p className="text-sm text-muted-foreground">
                      Nhấp để xem vị trí chi tiết
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
