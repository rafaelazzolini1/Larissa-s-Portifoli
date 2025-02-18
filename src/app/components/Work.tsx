"use client"

import { useTranslations } from "next-intl"
import Image from "next/image"
import { useState, useEffect } from "react"
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"

const works = [
  { src: "/Tattos/IMG_9152.jpeg", title: "Fine Line Floral Gratitude" },
  { src: "/Tattos/IMG_1912.jpeg", title: "Fine Line Floral Hummingbird" },
  { src: "/Tattos/IMG_9565.jpeg", title: "Minimalist Portrait Clock" },
  { src: "/Tattos/IMG_7452.jpeg", title: "Minimalist Flower" },
  { src: "/Tattos/IMG_8649.jpeg", title: "Minimalist Sun Flower" },
  { src: "/Tattos/IMG_9331.jpeg", title: "Minimalist Owl" },
  { src: "/Tattos/IMG_6212.jpeg", title: "Minimalist dragon-fly" },
  { src: "/Tattos/IMG_4665.jpeg", title: "Geometric Atom" },
  { src: "/Tattos/Dagger.jpeg", title: "Minimalist Self Love" },
  { src: "/Tattos/1aab072d-8b41-49e5-8f69-c0750e4c7311.jpeg", title: "Minimalist Futbol" },
  { src: "/Tattos/Portrait.jpeg", title: "Minimalist Portrait" },
  { src: "/Tattos/Mandala.jpeg", title: "Minimalist Mandala" },
  { src: "/Tattos/Marip.jpeg", title: "Minimalist Moth" },
  { src: "/Tattos/Anna.jpeg", title: "Minimalist Anna" },
  { src: "/Tattos/IMG_3532.jpeg", title: "Minimalist Bo" },
  { src: "/Tattos/Butterfly.jpeg", title: "Minimalist Butterfly" },
]

export default function Work() {
  const [selectedWork, setSelectedWork] = useState<{ src: string; title: string } | null>(null)
  const t = useTranslations()

  useEffect(() => {
    if (selectedWork) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }
  }, [selectedWork])

  const handleImageClick = (work: { src: string; title: string }) => {
    setSelectedWork(work)
  }

  const closeModal = () => {
    setSelectedWork(null)
  }

  return (
    <section id="work" className="py-20 px-6 bg-white-100">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl tracking-[0.3em] mb-12 text-center animate-fade-in-up font-Andreas uppercase">
          {t("Work.samples")}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {works.map((work, index) => (
            <div
              key={work.title}
              className={`animate-fade-in-up animation-delay-${(index + 1) * 100}`}
              onClick={() => handleImageClick(work)}
            >
              <div className="relative aspect-square hover-lift group cursor-pointer overflow-hidden rounded-lg shadow-md">
                <Image
                  src={work.src || "/placeholder.svg"}
                  alt={work.title}
                  fill
                  className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedWork && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white p-6 rounded-lg max-w-3xl max-h-[90vh] overflow-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={closeModal} className="absolute top-2 right-2 text-gray-700 hover:text-gray-900 text-2xl">
              &times;
            </button>

            <Zoom>
              <Image
                src={selectedWork.src || "/placeholder.svg"}
                alt={selectedWork.title}
                width={600}
                height={600}
                className="object-cover"
              />
            </Zoom>
          </div>
        </div>
      )}
    </section>
  )
}

