"use client";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const navigationItems = [
  { id: "hero", label: "Trang Chủ" },
  { id: "brand", label: "Giới Thiệu" },
  { id: "products", label: "Sản Phẩm" },
  // { id: "process", label: "Quy Trình" },
  { id: "testimonials", label: "Đánh Giá" },
  { id: "contact", label: "Liên Hệ" },
];

const NavigationHeader = () => {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-coconut-brown/10 shadow-sm ">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 cursor-pointer ">
          {/* Logo */}
          <div
            className="flex items-center gap-3"
            onClick={() => router.push("/")}
          >
            <Image
              src="/image/logo.png"
              alt="Kẹo Dừa Ngọc Mai"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-xl font-bold text-coconut-brown">
              Kẹo Dừa Ngọc Mai
            </span>
          </div>

          {/* Desktop Navigation */}
          <ScrollArea className="hidden md:flex flex-1 max-w-lg mx-8">
            <nav className="flex items-center gap-1">
              {navigationItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  size="sm"
                  onClick={() => router.push(`/#${item.id}`)}
                  className="text-muted-foreground hover:text-coconut-brown hover:bg-coconut-brown/5 whitespace-nowrap"
                >
                  {item.label}
                </Button>
              ))}
            </nav>
          </ScrollArea>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navigationItems.map((item) => (
                  <Button
                    key={item.id}
                    variant="ghost"
                    size="lg"
                    onClick={() => router.push(`/#${item.id}`)}
                    className="justify-start text-left hover:text-coconut-brown hover:bg-coconut-brown/5"
                  >
                    {item.label}
                  </Button>
                ))}
                {/* <Button
                  onClick={() => router.push("/#contact")}
                  variant="hero"
                  size="lg"
                  className="mt-4 "
                >
                  Đặt Hàng Ngay
                </Button> */}
              </nav>
            </SheetContent>
          </Sheet>

          {/* Desktop CTA Button */}
          {/* <Button
            onClick={() => router.push("/#contact")}
            variant="hero"
            size="sm"
            className="hidden md:flex "
          >
            Đặt Hàng Ngay
          </Button> */}
        </div>
      </div>
    </header>
  );
};

export default NavigationHeader;
