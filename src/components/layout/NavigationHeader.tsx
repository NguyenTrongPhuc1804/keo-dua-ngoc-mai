"use client";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "@/i18n/navigation";
import LanguageSelector from "./LanguageSelector";


const NavigationHeader = () => {
  const router = useRouter();
  const t = useTranslations("header");
  const navigationItems = [
    { id: "hero", label: t("home") },
    { id: "brand", label: t("intro") },
    { id: "products", label: t("product") },
    // { id: "process", label: "Quy Trình" },
    { id: "testimonials", label: t("rating") },
    { id: "contact", label: t("contact") },
  ];

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
              loading="lazy"
              // src="/image/logo.png"
              src="/logo-MN.png"
              alt={t("name")}
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-xl font-bold text-coconut-brown">
              {t("name")}
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

          {/* Language Selector - Desktop */}
          <div className="hidden md:flex">
            <LanguageSelector />
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="h-5 w-5" aria-label="Menu" />
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
                {/* Language Selector - Mobile */}
                <div className="mt-4">
                  <LanguageSelector />
                </div>
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
