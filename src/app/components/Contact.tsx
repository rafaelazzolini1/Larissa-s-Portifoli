"use client"

import { useTranslations } from "next-intl";
import { FaInstagram } from "react-icons/fa";




export default function Contact() {
  const t = useTranslations();

  const contactItems = [
    {
      title: t("Contact.title1"),
      content: [
        t("Contact.content1"),
        t("Contact.content2"),
        t("Contact.content3"),
        t("Contact.content4"),
      ],
    },
    {
      title: t("Contact.title2"),
      content: [
        t("Contact.content5"),
        t("Contact.content6"),
        t("Contact.content7"),
        t("Contact.content8"),
        t("Contact.content9"),
        t("Contact.content10"),
      ],
    },
    {
      title: t("Contact.title3"),
      content: [
        t("Contact.content11"),
        t("Contact.content12"),
      ],
    },
  ]

  return (
    <section id="contact" className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl tracking-[0.3em] mb-16 text-center animate-fade-in-up font-Andreas uppercase">
          {t("Contact.service")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {contactItems.slice(0, 2).map((item, index) => (
            <div key={index} className={`relative animate-fade-in-up animation-delay-${(index + 1) * 200}`}>
              <div className="relative z-10 bg-white/90 backdrop-blur-md p-8 rounded-sm hover-lift h-full">
                <h3 className="text-2xl tracking-[0.2em] mb-6 font-Andreas uppercase">{item.title}</h3>
                <div className="text-gray-600 leading-relaxed tracking-wider">
                  {item.content.map((paragraph, i) => (
                    <p key={i} className={`mb-4 ${paragraph.startsWith("•") ? "pl-4" : ""}`}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="animate-fade-in-up animation-delay-500">
          <div className="relative z-10 bg-white/90 backdrop-blur-md p-8 rounded-sm hover-lift">
            <h3 className="text-2xl tracking-[0.2em] mb-6 font-Andreas uppercase">{contactItems[2].title}</h3>
            <div className="text-gray-600 leading-relaxed tracking-wider">
              {contactItems[2].content.map((paragraph, i) => (
                <p key={i} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center animate-fade-in-up animation-delay-100">
          <div className="inline-block hover-scale">
            <a
              href="https://wa.me/5515996692154"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-sm bg-white px-8 py-4 inline-block 
                 animate-pulse hover:animate-none transition-all duration-200 
                 shadow-lg hover:shadow-xl"
            >
              <span className="relative z-10 text-lg tracking-[0.2em] group-hover:text-white transition-colors duration-100">
                {t("Contact.send_message")}
              </span>
              <div className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </a>
          </div>

          <div className="mt-12 space-y-4 animate-fade-in-up animation-delay-600">
            <div className="hover-scale inline-block">
              <a
                href="https://www.instagram.com/azzo.tattoo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg tracking-[0.15em] hover:text-gray-600 transition-colors inline-flex items-center gap-2"
              >
                <FaInstagram className="text-xl" />
                azzo.tattoo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
