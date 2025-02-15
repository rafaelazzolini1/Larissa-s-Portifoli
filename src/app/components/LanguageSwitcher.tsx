"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import Image from "next/image";


const languages = [
  { code: "en", name: "English", flag: "/Flags/flag-icons-main/flags/4x3/gb.svg" },
  { code: "fr", name: "Français", flag: "/Flags/flag-icons-main/flags/4x3/fr.svg" },
  { code: "de", name: "German", flag: "/Flags/flag-icons-main/flags/4x3/de.svg" },
  { code: "it", name: "Italian", flag: "/Flags/flag-icons-main/flags/4x3/it.svg" },
  { code: "pt", name: "Português", flag: "/Flags/flag-icons-main/flags/4x3/br.svg" },
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const changeLanguage = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(`/${locale}`, "");
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  return (
    <div className="relative group">
      <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors duration-300">
        <span className="hidden sm:inline">{languages.find((lang) => lang.code === locale)?.name}</span>
        <Image
          src={languages.find((lang) => lang.code === locale)?.flag || "/placeholder.svg"}
          alt={`${languages.find((lang) => lang.code === locale)?.name} flag`}
          width={20}
          height={15}
          className="rounded-sm"
        />
      </button>

      <div className="absolute left-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-20 opacity-0 scale-95 transition-all duration-300 ease-in-out transform origin-top-right group-hover:opacity-100 group-hover:scale-100">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-300 ${
              locale === lang.code ? "bg-gray-100" : ""
            }`}
          >
            <Image
              src={lang.flag || "/placeholder.svg"}
              alt={`${lang.name} flag`}
              width={20}
              height={15}
              className="mr-2 rounded-sm"
            />
            <span>{lang.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}