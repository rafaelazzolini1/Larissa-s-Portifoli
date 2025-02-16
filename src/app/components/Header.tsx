"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import LanguageSwitcher from "./LanguageSwitcher"


export default function Header() {

  return (
    <header className="fixed w-full z-50 bg-[#fafafa]/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <LanguageSwitcher />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col text-center"
        >
          <h1 className="text-3xl tracking-[0.3em] font-Andreas">LARISSA</h1>
          <h1 className="text-3xl tracking-[0.3em] font-Andreas">AZZOLINI</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-20 h-20 flex items-center justify-center"
        >
          <Image
            src="/Logo_S_Fundo.png"
            alt="Logo"
            width={80}
            height={80}
            className="object-contain rounded-full"
          />
        </motion.div>
      </div>
    </header>
  )
}

