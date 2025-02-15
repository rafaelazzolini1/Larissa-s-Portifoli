"use client"

import Image from "next/image"
import { useTranslations } from "next-intl";


export default function Hero() {
  const t = useTranslations();

  return (
    <section className="pt-40 pb-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center text-center">
          <div className="relative w-72 h-72 mb-8 animate-scale-in">
            <Image
              src="/Larissa.jpg"
              alt="Larissa Azzolini"
              fill
              className="rounded-full object-cover"
              priority
            />
          </div>

          <div className="space-y-4 text-center">
            <div className="space-y-4">
              <p className="text-xl tracking-[0.15em] animate-fade-in-up ">
                {t("Hero.role")}
              </p>
              <p className="text-xl tracking-[0.15em] animate-fade-in-up animation-delay-100">
                {t("Hero.co_role")}
              </p>
              <p className="text-xl tracking-[0.15em] animate-fade-in-up animation-delay-200">
                {t("Hero.nacionality")}
              </p>
              <p className="text-xl tracking-[0.15em] animate-fade-in-up animation-delay-300">
                {t("Hero.age")}
              </p>
              <p className="text-xl tracking-[0.15em] animate-fade-in-up animation-delay-400">
                {t("Hero.locale")}
              </p>
              <p className="text-xl tracking-[0.15em] animate-fade-in-up animation-delay-500">
                {t("Hero.title")}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

