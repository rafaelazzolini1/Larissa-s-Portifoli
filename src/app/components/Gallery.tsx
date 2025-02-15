"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const images = [
  { src: "/tattoo1.jpg", alt: "Floral sleeve tattoo" },
  { src: "/tattoo2.jpg", alt: "Geometric back tattoo" },
  { src: "/tattoo3.jpg", alt: "Watercolor bird tattoo" },
  { src: "/tattoo4.jpg", alt: "Realistic portrait tattoo" },
  { src: "/tattoo5.jpg", alt: "Mandala hand tattoo" },
  { src: "/tattoo6.jpg", alt: "Japanese-style dragon tattoo" },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="gallery" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={400}
                height={400}
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <Image
            src={selectedImage || "/placeholder.svg"}
            alt="Selected tattoo"
            width={800}
            height={800}
            objectFit="contain"
          />
        </div>
      )}
    </section>
  )
}

