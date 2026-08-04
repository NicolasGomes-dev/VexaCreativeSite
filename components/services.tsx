import {
  Megaphone,
  Code2,
  Video,
  TrendingUp,
  Smartphone,
  Search,
} from "lucide-react"

const services = [
  {
    icon: Megaphone,
    title: "Social Media",
    description:
      "Estratégia, criação e gestão de conteúdo para transformar suas redes sociais em uma máquina de engajamento e vendas.",
    features: [
      "Planejamento de conteúdo",
      "Design de posts",
      "Análise de métricas",
    ],
  },
  {
    icon: Code2,
    title: "Desenvolvimento Web",
    description:
      "Sites e landing pages modernos, rápidos e responsivos, construídos com as melhores tecnologias do mercado.",
    features: [
      "Design responsivo",
      "Performance otimizada",
      "SEO na base",
    ],
  },
]

const highlights = [
  { icon: Video, label: "Edição de vídeo" },
  { icon: TrendingUp, label: "Crescimento orgânico" },
  { icon: Smartphone, label: "Mobile First" },
  { icon: Search, label: "SEO" },
]

export function Services() {
  return (
    <section
      id="servicos"
      className="relative overflow-hidden border-t border-border/60 bg-[#0B0B0E]"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[180px]" />
        <div className="absolute -left-32 top-72 h-[320px] w-[320px] rounded-full bg-fuchsia-500/10 blur-[150px]" />
        <div className="absolute -right-24 bottom-20 h-[360px] w-[360px] rounded-full bg-blue-500/10 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-24">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
            O QUE EU FAÇO
          </span>
          <h2 className="mt-4 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Conteúdo que{" "}
            <span className="text-violet-400">conecta.</span>

            <br />

            Sites que{" "}
            <span className="text-violet-400">vendem.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-400">
            Conteúdo estratégico e desenvolvimento web trabalhando juntos para
            transformar visitantes em clientes.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-8
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-violet-500/40
                hover:shadow-2xl
                hover:shadow-violet-500/20
              "
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-violet-500/10 blur-3xl" />
              </div>

              <div className="relative z-10">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/15 transition-all duration-500 group-hover:scale-110 group-hover:bg-violet-500/25">
                  <service.icon className="h-8 w-8 text-violet-400" />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-400">
                  {service.description}
                </p>

                <ul className="mt-8 space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-gray-200"
                    >
                      <span className="h-2 w-2 rounded-full bg-violet-500 shadow-lg shadow-violet-500/50" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="
                group
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                p-6
                text-center
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-violet-500/40
                hover:bg-white/[0.05]
                hover:shadow-xl
                hover:shadow-violet-500/10
              "
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/15 transition-all duration-300 group-hover:scale-110">
                <item.icon className="h-6 w-6 text-violet-400" />
              </div>

              <span className="text-sm font-semibold text-white">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}