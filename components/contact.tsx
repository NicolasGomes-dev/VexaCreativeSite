import { ArrowRight, ArrowUpRight } from "lucide-react"
import {
  InstagramIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "@/components/brand-icons"

const channels = [
  {
    icon: InstagramIcon,
    label: "Instagram",
    handle: "@vexacreative.br",
    description: "Acompanhe nossos projetos, bastidores e novidades.",
    href: "https://www.instagram.com/vexacreative.br/",
  },
  {
    icon: WhatsappIcon,
    label: "WhatsApp",
    handle: "(62) 98540-3863",
    description: "Vamos conversar sobre seu projeto.",
    href: "https://wa.me/5562985403863?text=Olá%20Nicolas!%20Vi%20seu%20site%20e%20gostaria%20de%20um%20orçamento.",
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    handle: "@br.dronefilms",
    description: "Acompanhe nossos trabalhos e produções aéreas.",
    href: "https://www.instagram.com/br.dronefilms/",
  },
]

export function Contact() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-[#0A0A0A] py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1 text-sm font-medium text-violet-400">
            ENTRE EM CONTATO
          </span>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-white">
            Vamos criar algo que as pessoas não esqueçam.
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Conte sua ideia. Eu cuido da estratégia, produção e desenvolvimento
            para transformar visitantes em clientes.
          </p>

          <a
            href="https://wa.me/5562985403863?text=Olá%20Nicolas!%20Gostaria%20de%20um%20orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-violet-600 px-8 py-4 font-semibold text-white transition-all hover:bg-violet-500"
          >
            Solicitar orçamento
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {channels.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl border border-zinc-800 bg-zinc-950 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-900">
                <channel.icon className="h-6 w-6 text-violet-400" />
              </div>

              <h3 className="mt-6 flex items-center gap-2 text-2xl font-bold text-white">
                {channel.label}
                <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </h3>

              <p className="mt-2 font-medium text-violet-400">
                {channel.handle}
              </p>

              <p className="mt-4 leading-7 text-zinc-400">
                {channel.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}