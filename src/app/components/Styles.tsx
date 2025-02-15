"use client"

import { useTranslations } from "next-intl";

export default function Styles() {
  const t = useTranslations();

  return (
    <section id="styles" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl tracking-[0.3em] mb-12 text-center animate-fade-in-up font-Andreas uppercase">
          {t("Styles.style")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Fine line */}
          <div className="relative animate-fade-in-up animation-delay-200">
            <div className="relative z-10 bg-white/90 backdrop-blur-md p-8 rounded-sm hover-lift h-full">
              <h3 className="text-xl tracking-[0.2em] font-Andreas uppercase">
                {t("Styles.fine_line")}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t("Styles.fine_line_description")}
              </p>
            </div>
          </div>
          {/* Micro Realism */}
          <div className="relative animate-fade-in-up animation-delay-400">
            <div className="relative z-10 bg-white/90 backdrop-blur-md p-8 rounded-sm hover-lift h-full">
              <h3 className="text-xl tracking-[0.2em] font-Andreas uppercase">
                {t("Styles.micro_realism")}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t("Styles.micro_realism_description")}
              </p>
            </div>
          </div>
          {/* Floral */}
          <div className="relative animate-fade-in-up animation-delay-600">
            <div className="relative z-10 bg-white/90 backdrop-blur-md p-8 rounded-sm hover-lift h-full">
              <h3 className="text-xl tracking-[0.2em] font-Andreas uppercase">
                {t("Styles.floral")}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t("Styles.floral_description")}
              </p>
            </div>
          </div>
          {/* Ornamental */}
          <div className="relative animate-fade-in-up animation-delay-800">
            <div className="relative z-10 bg-white/90 backdrop-blur-md p-8 rounded-sm hover-lift h-full">
              <h3 className="text-xl tracking-[0.2em] font-Andreas uppercase">
                {t("Styles.ornamental")}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t("Styles.ornamental_description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}