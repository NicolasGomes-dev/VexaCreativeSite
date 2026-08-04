import { ArrowUpRight } from "lucide-react"
import { InstagramIcon, LinkedinIcon, WhatsappIcon } from "@/components/brand-icons"

const channels = [
  {
    icon: InstagramIcon,
    label: "Instagram",
    handle: "@nicolasgomes.web",
    description: "Acompanhe meus trabalhos e bastidores.",
    href: "https://www.instagram.com/nicolasgomes.web/",
  },
  {
    icon: WhatsappIcon,
    label: "WhatsApp",
    handle: "(62) 98540-3863",
    description: "Fale comigo direto para um orçamento.",
    href: "https://wa.me/5562985403863?text=Ol%C3%A1%20Nicolas!%20Vi%20seu%20site%20e%20gostaria%20de%20um%20or%C3%A7amento.",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    handle: "nicolasg-dev",
    description: "Conecte-se comigo profissionalmente.",
    href: "https://www.linkedin.com/in/nicolasg-dev/",
  },
]

export function Contact() {
  return (
    <section id="contato">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="overflow-hidden rounded-3xl border border-border bg-primary px-6 py-12 text-primary-foreground sm:px-12 md:py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              Vamos tirar sua ideia do papel?
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-primary-foreground/80">
              Me escolha em qualquer canal abaixo. Respondo rápido e adoro
              entender o desafio de cada projeto.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-start gap-3 rounded-2xl bg-background p-6 text-foreground transition-transform hover:-translate-y-1"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <c.icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="flex items-center gap-1 font-display font-bold">
                    {c.label}
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <p className="text-sm font-medium text-primary">{c.handle}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {c.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
