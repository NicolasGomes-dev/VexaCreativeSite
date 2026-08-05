import Image from "next/image"
import Link from "next/link"

import {
  InstagramIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "@/components/brand-icons"

const socials = [
  {
    icon: InstagramIcon,
    label: "Instagram",
    href: "https://www.instagram.com/vexacreative.br/",
  },
  {
    icon: WhatsappIcon,
    label: "WhatsApp",
    href: "https://wa.me/5562985403863",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nicolasg-dev/",
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-800 bg-[#0A0A0A]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-10 md:flex-row">
        {/* Logo */}

        <Link href="/" className="transition-opacity hover:opacity-80">
          <Image
            src="/logo-vexa.png"
            alt="VEXA Creative"
            width={170}
            height={45}
            className="h-auto w-[170px]"
            priority
          />
        </Link>

        {/* Copyright */}

        <p className="text-center text-sm text-zinc-400">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-white">
            VEXA Creative
          </span>
          . Social Media & Desenvolvimento Web.
        </p>

        {/* Redes */}

        <div className="flex items-center gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-white transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:bg-violet-600"
            >
              <social.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}