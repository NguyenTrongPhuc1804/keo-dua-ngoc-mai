"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLocale } from "next-intl";
import { usePathname, getPathname, useRouter } from "@/i18n/navigation";
import Image from "next/image";

const languages = [
  { value: "vi", label: "Tiếng Việt", flag: "/image/🇻🇳.png" },
  { value: "en", label: "English", flag: "/image/🇺🇸.png" },
];

const LanguageSelector = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  
  const currentLanguage = languages.find((lang) => lang.value === locale);

  const handleLanguageChange = (newLocale: string) => {
if(newLocale !== locale) {
    router.push(pathname, { locale: newLocale });
    router.refresh();
} else {
  router.push(pathname);
  router.refresh();
}
  };

  return (
    <Select value={locale} onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-[140px] h-9 flex items-center gap-2">
        {currentLanguage && (
          <Image
            src={currentLanguage.flag}
            alt={currentLanguage.label}
            width={20}
            height={20}
            className="rounded-sm"
          />
        )}
        <SelectValue placeholder="Chọn ngôn ngữ" />
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.value} value={lang.value}>
            <div className="flex items-center gap-2 cursor-pointer">
              {/* <Image
                src={lang.flag}
                alt={lang.label}
                width={20}
                height={20}
                className="rounded-sm"
              /> */}
              <span>{lang.label}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LanguageSelector;

