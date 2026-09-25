import Link from "next/link"
import {
  Camera,
  Code2,
  Film,
  Monitor,
  Video,
} from "lucide-react"

const services = [
  {
    number: "01",
    icon: Video,
    eyebrow: "AUDIOVISUAL",
    title: "Produção Audiovisual",
    description:
      "Criamos vídeos que apresentam sua marca, valorizam seus projetos e transformam ideias em experiências visuais marcantes.",
    features: [
      "Produção e captação",
      "Filmagem com drone",
      "Edição profissional",
    ],
  },
  {
    number: "02",
    icon: Code2,
    eyebrow: "TECNOLOGIA",
    title: "Desenvolvimento Web",
    description:
      "Desenvolvemos sites modernos e estratégicos para apresentar sua empresa, fortalecer sua presença digital e gerar novas oportunidades.",
    features: [
      "Design responsivo",
      "Performance otimizada",
      "Estrutura preparada para SEO",
    ],
  },
  {
    number: "03",
    icon: Video,
    eyebrow: "AÉREO",
    title: "Produção Aérea",
    description:
      "Imagens aéreas para valorizar marcas, espaços, eventos e projetos através de novas perspectivas.",
    features: [
      "Filmagem com drone",
      "Imagens aéreas",
      "Captação cinematográfica",
    ],
  },
]

const specialties = [
  {
    icon: Camera,
    label: "Captação",
  },
  {
    icon: Film,
    label: "Edição",
  },
  {
    icon: Video,
    label: "Drone",
  },
  {
    icon: Monitor,
    label: "Web Design",
  },
]

export function Services() {
  return (
    <section
      id="services"
      className="relative border-t border-black/[0.06] bg-[#F5F5F7] text-[#08080B]"
    >
      {/* =====================================================
          TRANSIÇÃO SUPERIOR
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-24
          w-[70%]
          -translate-x-1/2
          rounded-full
          bg-violet-500/[0.035]
          blur-[70px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-px
          bg-black/[0.06]
        "
      />

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-8">

        {/* BRILHO VIOLETA SUPERIOR */}

        <div
          className="
            pointer-events-none
            absolute
            left-[15%]
            top-[-180px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-violet-600/[0.07]
            blur-[150px]
          "
        />

        {/* BRILHO VIOLETA INFERIOR */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-[-200px]
            right-[10%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-violet-500/[0.05]
            blur-[160px]
          "
        />

        {/* =====================================================
            CONTEÚDO
        ====================================================== */}

        <div className="relative">

          {/* =====================================================
              HEADER
          ====================================================== */}

          <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">

            <div>

              <div className="mb-7 flex items-center gap-3">

                <span className="h-px w-10 bg-violet-500" />

                <span
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.3em]
                    text-violet-400
                  "
                >
                  Nossas soluções
                </span>

              </div>

              <h2
                className="
                  max-w-4xl
                  text-4xl
                  font-black
                  leading-[0.92]
                  tracking-[-0.04em]
                  sm:text-5xl
                  lg:text-7xl
                "
              >
                Onde criatividade
                <br />
                encontra{" "}
                <span className="text-violet-400">
                  tecnologia.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-black/55 sm:text-lg">
                Unimos audiovisual e tecnologia para criar experiências que fortalecem
                marcas, comunicam ideias e geram novas oportunidades.
              </p>

            </div>

          </div>

          {/* =====================================================
              SERVICES
          ====================================================== */}

          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">

            {services.map((service) => {

              const Icon = service.icon

              return (
                <Link
                  key={service.number}
                  id={
                    service.number === "01"
                      ? "producao-audiovisual"
                      : service.number === "02"
                        ? "desenvolvimento-web"
                        : "producao-aerea"
                  }
                  href={
                    service.number === "01"
                      ? "/servicos/audiovisual"
                      : service.number === "02"
                        ? "/servicos/tecnologia"
                        : "/servicos/aerea"
                  }
                  className="
                    group
                    relative
                    flex
                    min-h-[220px]
                    scroll-mt-24
                    flex-col
                    justify-between
                    overflow-hidden
                    rounded-[1.75rem]
                    border
                    border-black/10
                    bg-white
                    p-7
                    shadow-[0_8px_30px_rgba(0,0,0,0.05)]
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-violet-500/50
                    hover:shadow-[0_16px_40px_rgba(124,58,237,0.12)]
                    sm:p-8
                  "
                >

                  {/* ÍCONE */}

                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-violet-500/30
                      bg-violet-500/[0.04]
                      text-violet-400
                      transition-all
                      duration-300
                      group-hover:scale-105
                      group-hover:border-violet-500/50
                      group-hover:bg-violet-500/[0.08]
                    "
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* TÍTULO + CTA */}

                  <div className="flex items-end justify-between gap-6">

                    <h3
                      className="
                        text-2xl
                        font-semibold
                        tracking-tight
                        text-black
                        transition-all
                        duration-300
                        group-hover:translate-x-1
                        group-hover:text-violet-600
                      "
                    >
                      {service.title}
                    </h3>

                    <div className="flex shrink-0 items-center gap-3">

                      <span
                        className="
                          text-[9px]
                          font-semibold
                          uppercase
                          tracking-[0.25em]
                          text-black/50
                          transition-colors
                          duration-300
                          group-hover:text-violet-500
                        "
                      >
                        Clique aqui
                      </span>

                      <span
                        className="
                          text-lg
                          text-violet-400
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      >
                        →
                      </span>

                    </div>

                  </div>

                </Link>
              )
            })}

          </div>

          {/* =====================================================
              ESPECIALIDADES
          ====================================================== */}

          <div className="mt-6 border-y border-black/10">

            <div className="grid grid-cols-2 lg:grid-cols-4">

              {specialties.map((item, index) => {

                const Icon = item.icon

                return (
                  <div
                    key={item.label}
                    className={`
                      group
                      flex
                      items-center
                      gap-4
                      px-5
                      py-7
                      transition-all
                      duration-300
                      hover:bg-violet-500/[0.04]
                      ${
                        index !== 0
                          ? "border-t border-black/10 lg:border-l lg:border-t-0"
                          : ""
                      }
                    `}
                  >

                    <Icon
                      className="
                        h-5
                        w-5
                        text-violet-400
                        transition-transform
                        duration-300
                        group-hover:scale-110
                      "
                    />

                    <span
                      className="
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-black/50
                      "
                    >
                      {item.label}
                    </span>

                  </div>
                )
              })}

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}