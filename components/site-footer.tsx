import { InstagramIcon, LinkedinIcon, WhatsappIcon } from "@/components/brand-icons"

const socials = [
  { icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/nicolasgomes.web/" },
  { icon: WhatsappIcon, label: "WhatsApp", href: "https://wa.me/5562985403863" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/nicolasg-dev/" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-10 sm:flex-row sm:justify-between sm:px-6">
        <div className="flex items-center gap-2 font-display font-extrabold tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            NG
          </span>
          <span>Nicolas Gomes</span>
        </div>

        <p className="text-center text-sm text-muted-foreground">
          {`© ${new Date().getFullYear()} Nicolas Gomes. Social Media & Desenvolvimento Web.`}
        </p>

        <div className="flex gap-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
