import { Check, Video, Globe } from "lucide-react"
import { InstagramIcon } from "@/components/brand-icons"
import { Button } from "@/components/ui/button"

const plans = [
  {
    icon: Video,
    name: "Freelancer Vídeo",
    category: "CONTEÚDO AUDIOVISUAL",
    tagline: "Produção profissional para empresas.",
    description:
      "Vídeos profissionais para empresas que precisam de qualidade e agilidade.",
    features: [
      "Reels e Shorts",
      "YouTube",
      "Legendas profissionais",
      "Entrega rápida",
    ],
    featured: false,
  },
  {
    icon: InstagramIcon,
    name: "Gestão de Redes Sociais",
    category: "GESTÃO DE MARCA",
    tagline: "Autoridade e crescimento digital.",
    description:
      "Cuidamos da presença digital da sua empresa para gerar autoridade e vendas.",
    features: [
      "Planejamento mensal",
      "Criação de conteúdo",
      "Stories",
      "Relatórios",
    ],
    featured: true,
  },
  {
    icon: Globe,
    name: "Desenvolvimento de Site",
    category: "DESENVOLVIMENTO WEB",
    tagline: "Sites que transformam visitantes em clientes.",
    description:
      "Sites modernos desenvolvidos para transformar visitantes em clientes.",
    features: [
      "Design exclusivo",
      "SEO",
      "Alta velocidade",
      "Responsivo",
    ],
    featured: false,
  },
]
export function Plans() {
  return (
    <section
      id="planos"
      className="relative overflow-hidden border-t border-white/5 bg-[#09090B]"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        {/* Glow Central */}
        <div className="absolute left-1/2 top-40 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[220px]" />

        {/* Glow Esquerdo */}
        <div className="absolute -left-32 top-72 h-[320px] w-[320px] rounded-full bg-fuchsia-500/10 blur-[160px]" />

        {/* Glow Direito */}
        <div className="absolute -right-24 bottom-20 h-[360px] w-[360px] rounded-full bg-blue-500/10 blur-[170px]" />

      </div>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] text-violet-400">
            Planos & Serviços
          </span>
          <h2 className="mt-4 text-balance font-display text-5xl font-black tracking-tight text-white">
            Escolha a solução ideal
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Soluções flexíveis, do vídeo avulso à presença digital completa.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}

              className={`group relative overflow-hidden rounded-3xl border transition-all duration-500 hover:-translate-y-3 ${plan.featured
                ? "scale-[1.03] border-violet-500/50 bg-gradient-to-b from-violet-500/10 to-white/[0.03] shadow-[0_0_50px_rgba(139,92,246,.25)]"
                : "border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-violet-500/30 hover:shadow-xl hover:shadow-violet-500/10"
                }`}
            >
              {plan.featured && (
                <div className="absolute right-5 top-5 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-4 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-lg">
                  ⭐ MAIS ESCOLHIDO
                </div>
              )}

              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -right-10 -top-10 h-80 w-80 rounded-full bg-violet-500/30 blur-[120px]" />
              </div>

              <div className="relative flex min-h-[540px] flex-col p-8">

                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-600 via-purple-500 to-fuchsia-500 shadow-2xl shadow-violet-500/40">
                  <plan.icon className="h-10 w-10 text-white" />
                </div>

                <span className="mt-8 text-xs font-bold uppercase tracking-[0.20em] text-violet-400">
                  {plan.category}
                </span>

                <h3 className="mt-6 text-[32px] font-black leading-tight tracking-tight text-white">
                  {plan.name}
                </h3>

                <p className="mt-3 text-sm font-medium tracking-wide text-violet-300">
                  {plan.tagline}
                </p>

                <p className="mt-5 leading-7 text-gray-400">
                  {plan.description}
                </p>

                <ul className="mt-8 flex-1 space-y-4 border-t border-white/10 pt-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a href="#contato">
                  <Button
                    className={`mt-8 w-full rounded-xl py-5 font-semibold text-white transition-all duration-300 ${plan.featured
                      ? "bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-violet-500/40"
                      : "bg-gradient-to-r from-violet-700 to-purple-600 hover:from-violet-600 hover:to-fuchsia-500 hover:scale-[1.02] hover:shadow-lg hover:shadow-violet-500/30"
                      }`}
                  >
                    Quero este serviço →
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

