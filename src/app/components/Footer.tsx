"use client"

import { useTranslations } from "next-intl";


export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="py-6">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Azzo Tattoo. {t("Footer.rights")}</p>

      </div>
    </footer>
  )
}



