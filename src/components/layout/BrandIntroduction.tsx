import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import Image from "next/image";

const BrandIntroduction = () => {
  const t = useTranslations("brand");
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
              src="/image/intro-brand.png"
              alt="Vườn dừa Bến Tre"
              className="w-full h-full object-cover rounded-2xl shadow-lg"
              loading="lazy"
              width={500}
              height={500}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coconut-brown/20 to-transparent rounded-2xl"></div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                {t("title")}
                <span className="block text-coconut-brown">{t("name")}</span>
              </h2>
              <div className="w-24 h-1 bg-nature-green rounded-full"></div>
            </div>

            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                {t("description")}
              </p>

              <p className="text-lg leading-relaxed">
                  {t("description2")}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="border-0 bg-white/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-coconut-brown mb-2">
                    25+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {t("experience")}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-coconut-brown mb-2">
                    100%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {t("naturalIngredients")}
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
