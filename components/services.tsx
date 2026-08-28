import {
  ArrowUpRight,
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
    label: "Web",
  },
]

export function Services() {
  return (
    <section
      id="servicos"
      className="relative overflow-hidden bg-[#08080B] text-white"
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0">

        <div
          className="
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

        <div
          className="
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

        <div
          className="
            absolute
            inset-x-0
            top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-violet-500/30
            to-transparent
          "
        />

      </div>


      {/* Container */}

      <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-8">


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
                leading-[0.95]
                tracking-tight
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

          </div>


          <p
            className="
              max-w-lg
              text-base
              leading-8
              text-white/45
              lg:justify-self-end
            "
          >
            Unimos audiovisual e desenvolvimento web para
            construir experiências que fortalecem marcas e
            criam novas oportunidades.
          </p>

        </div>


        {/* =====================================================
            SERVICES
        ====================================================== */}

        <div className="mt-20 grid gap-5 lg:grid-cols-2">

          {services.map((service) => {

            const Icon = service.icon

            return (
              <article
                key={service.number}
                className="
                  group
                  relative
                  min-h-[520px]
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-white/10
                  bg-white/[0.025]
                  p-8
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-violet-500/30
                  hover:bg-white/[0.045]
                  hover:shadow-2xl
                  hover:shadow-violet-500/10
                  sm:p-10
                  lg:p-12
                "
              >

                {/* Número gigante */}

                <span
                  className="
                    pointer-events-none
                    absolute
                    -right-3
                    -top-8
                    text-[180px]
                    font-black
                    leading-none
                    tracking-tighter
                    text-white/[0.025]
                    transition-all
                    duration-500
                    group-hover:text-violet-500/[0.08]
                  "
                >
                  {service.number}
                </span>


                {/* Glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-72
                    w-72
                    rounded-full
                    bg-violet-500/10
                    blur-[100px]
                    opacity-0
                    transition-opacity
                    duration-700
                    group-hover:opacity-100
                  "
                />


                <div className="relative z-10 flex h-full flex-col">


                  {/* Topo */}

                  <div className="flex items-start justify-between">

                    <div
                      className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-violet-500/20
                        bg-violet-500/10
                        transition-all
                        duration-500
                        group-hover:scale-110
                        group-hover:border-violet-500/40
                        group-hover:bg-violet-500/20
                      "
                    >
                      <Icon
                        className="
                          h-6
                          w-6
                          text-violet-400
                          transition-transform
                          duration-500
                          group-hover:rotate-6
                        "
                      />
                    </div>


                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/10
                        text-white/30
                        transition-all
                        duration-500
                        group-hover:border-violet-500/40
                        group-hover:bg-violet-500
                        group-hover:text-white
                      "
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </div>

                  </div>


                  {/* Categoria */}

                  <span
                    className="
                      mt-12
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.25em]
                      text-violet-400
                    "
                  >
                    {service.eyebrow}
                  </span>


                  {/* Título */}

                  <h3
                    className="
                      mt-4
                      max-w-lg
                      text-3xl
                      font-bold
                      leading-tight
                      tracking-tight
                      text-white
                      sm:text-4xl
                    "
                  >
                    {service.title}
                  </h3>


                  {/* Descrição */}

                  <p
                    className="
                      mt-6
                      max-w-xl
                      text-base
                      leading-8
                      text-white/45
                    "
                  >
                    {service.description}
                  </p>


                  {/* Linha */}

                  <div className="mt-auto pt-10">

                    <div className="mb-6 h-px w-full bg-white/10" />


                    {/* Features */}

                    <div className="grid gap-3">

                      {service.features.map((feature) => (

                        <div
                          key={feature}
                          className="flex items-center gap-3"
                        >

                          <span
                            className="
                              h-1.5
                              w-1.5
                              rounded-full
                              bg-violet-400
                              shadow-lg
                              shadow-violet-500/50
                            "
                          />

                          <span className="text-sm text-white/65">
                            {feature}
                          </span>

                        </div>

                      ))}

                    </div>

                  </div>

                </div>

              </article>
            )
          })}

        </div>


        {/* =====================================================
            ESPECIALIDADES
        ====================================================== */}

        <div className="mt-6 border-y border-white/10">

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
                        ? "border-t border-white/10 lg:border-l lg:border-t-0"
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
                      text-white/55
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

    </section>
  )
}