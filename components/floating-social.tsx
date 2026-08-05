"use client"

import { FaWhatsapp } from "react-icons/fa"

export function FloatingSocial() {
  return (
    <a
      href="https://wa.me/5562985403863?text=Olá,%20gostaria%20de%20fazer%20um%20orçamento."
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-8
        right-8
        z-50
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-full
        bg-[#25D366]
        text-white
        shadow-[0_0_30px_rgba(37,211,102,0.45)]
        transition-all
        duration-300
        hover:scale-110
        hover:bg-[#20BD5A]
        hover:shadow-[0_0_40px_rgba(37,211,102,0.65)]
      "
      aria-label="Conversar no WhatsApp"
    >
      <FaWhatsapp size={34} />
    </a>
  )
}