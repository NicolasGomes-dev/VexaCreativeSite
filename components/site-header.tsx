"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const navLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Planos", href: "#planos" },
  { label: "Vídeos", href: "#videos" },
  { label: "Contato", href: "#contato" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <a href="#top" className="flex items-center">
          <Image
            src="/logo-vexa.png"
            alt="VEXA"
            width={260}
            height={80}
            priority
            className="h-14 w-auto transition-transform duration-300 hover:scale-105"
          />
        </a>

        {/* Menu Desktop */}
        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="
                text-sm
                font-medium
                text-muted-foreground
                transition-all
                duration-300
                hover:text-violet-400
              "
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Botão Desktop */}
        <div className="hidden md:block">
          <a href="#contato">
            <Button
              className="
                bg-violet-600
                hover:bg-violet-500
                text-white
                rounded-xl
                px-6
                h-11
                transition-all
                duration-300
                hover:scale-105
                shadow-lg
                shadow-violet-600/30
              "
            >
              Fale comigo
            </Button>
          </a>
        </div>

        {/* Botão Mobile */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Menu Mobile */}
      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6">

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="
                  rounded-lg
                  px-4
                  py-3
                  text-sm
                  font-medium
                  text-muted-foreground
                  transition-all
                  hover:bg-secondary
                  hover:text-violet-400
                "
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="mt-2"
            >
              <Button
                className="
                  w-full
                  bg-violet-600
                  hover:bg-violet-500
                  text-white
                  rounded-xl
                  h-11
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  shadow-lg
                  shadow-violet-600/30
                "
              >
                Fale comigo
              </Button>
            </a>

          </nav>
        </div>
      )}
    </header>
  )
}