import { ArrowUpRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      id="top"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#070707]
        text-white
        pt-24

      "
    >
      {/* =====================================================
          ELEMENTOS DE FUNDO
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Pontos de luz */}
        <div className="absolute left-[12%] top-[28%] h-1.5 w-1.5 rounded-full bg-violet-400/40" />

        <div className="absolute right-[18%] top-[22%] h-1 w-1 rounded-full bg-violet-300/30" />

        <div className="absolute right-[10%] bottom-[20%] h-1.5 w-1.5 rounded-full bg-white/20" />

        {/* Glow roxo */}

        <div
          className="
            absolute
            -right-40
            top-1/4
            h-[500px]
            w-[500px]
            rounded-full
            bg-violet-600/10
            blur-[160px]
          "
        />

        {/* Glow inferior */}

        <div
          className="
            absolute
            -left-40
            bottom-0
            h-[400px]
            w-[400px]
            rounded-full
            bg-violet-500/5
            blur-[140px]
          "
        />

        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
          "
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

      </div>


      {/* =====================================================
          CONTEÚDO PRINCIPAL
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-7xl
          items-center
          px-6
          py-24
          lg:px-8
          lg:py-32
        "
      >

        <div
          className="
            grid
            w-full
            items-center
            gap-14
            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-16
          "
        >

          {/* =================================================
              COLUNA ESQUERDA
          ================================================== */}

          <div className="max-w-2xl">

            {/* TAG */}

            <div
              className="
                mb-7
                inline-flex
                items-center
                gap-2
                border
                border-white/10
                bg-white/[0.03]
                px-4
                py-2
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-white/60
                backdrop-blur-md
              "
            >
              <Sparkles className="h-3.5 w-3.5 text-violet-400" />

              Audiovisual

              <span className="text-white/20">
                •
              </span>

              Tecnologia

              <span className="text-white/20">
                •
              </span>

              Estratégia
            </div>


            {/* TÍTULO */}

            <h1
              className="
                font-display
                text-5xl
                font-extrabold
                leading-[0.9]
                tracking-[-0.055em]
                text-white
                sm:text-6xl
                md:text-7xl
                lg:text-[76px]
                xl:text-[82px]
              "
            >
              Criamos

              <br />

              <span className="text-white">
                presença.
              </span>

              <br />

              <span className="text-violet-400">
                Geramos impacto.
              </span>
            </h1>


            {/* DESCRIÇÃO */}

            <p
              className="
                mt-7
                max-w-xl
                text-base
                leading-7
                text-white/60
                sm:text-lg
              "
            >
              Criamos experiências visuais e digitais para marcas que
              querem ser percebidas, lembradas e gerar novas oportunidades.
            </p>


            {/* BOTÕES */}

            <div
              className="
                mt-9
                flex
                flex-wrap
                items-center
                gap-4
              "
            >

              <a href="#contato">
                <Button
                  size="lg"
                  className="
    group
    h-12
    rounded-xl
    border
    border-violet-400/20
    bg-violet-600
    px-6
    text-sm
    font-semibold
    text-white
    shadow-[0_8px_30px_rgba(124,58,237,0.18)]
    transition-all
    duration-300
    hover:-translate-y-0.5
    hover:bg-violet-500
    hover:shadow-[0_12px_40px_rgba(124,58,237,0.3)]
  "
                >
                  Falar com a VEXA

                  <ArrowUpRight
                    className="
      ml-2
      h-4
      w-4
      transition-transform
      duration-300
      group-hover:translate-x-0.5
      group-hover:-translate-y-0.5
    "
                  />
                </Button>
              </a>


              <a href="#videos">
                <Button
                  size="lg"
                  variant="outline"
                  className="
                    h-12
                    rounded-full
                    border-white/15
                    bg-white/[0.03]
                    px-6
                    text-sm
                    text-white/80
                    transition-all
                    duration-300
                    hover:border-white/30
                    hover:bg-white/10
                    hover:text-white
                  "
                >
                  Ver projetos
                </Button>
              </a>

            </div>


            {/* =================================================
                INFORMAÇÕES
            ================================================== */}

            <div
              className="
                mt-12
                flex
                flex-wrap
                items-center
                gap-x-10
                gap-y-5
                border-t
                border-white/10
                pt-7
              "
            >

              <div>



              </div>


              <div
                className="
                  hidden
                  h-8
                  w-px
                  bg-white/10
                  sm:block
                "
              />


              <div>

                <p
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.25em]
                    text-white/35
                  "
                >
                  Solução
                </p>

                <p
                  className="
                    mt-2
                    text-sm
                    text-white/65
                  "
                >
                  Marketing · Audiovisual · Tecnologia
                </p>

              </div>

            </div>

          </div>


          {/* =================================================
              COLUNA DIREITA — VÍDEO
          ================================================== */}

          <div
            className="
    relative
    mx-auto
    w-full
    max-w-sm
    -translate-y-8
    lg:ml-auto
    xl:max-w-[380px]
    2xl:max-w-[400px]
  "
          >


            {/* =================================================
                CONTAINER DO VÍDEO
            ================================================== */}

            <div
              className="
                relative
                aspect-[4/5]
                overflow-hidden
                rounded-[2rem]
                border
                border-white/10
                bg-neutral-900
                shadow-2xl
                shadow-black/50
              "
            >

              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-105
                "
              >
                <source
                  src="/videos/video-06.mp4"
                  type="video/mp4"
                />
              </video>


              {/* Overlay do vídeo */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/75
                  via-black/10
                  to-transparent
                "
              />


              {/* Glow */}

              <div
                className="
                  absolute
                  -bottom-24
                  -right-24
                  h-72
                  w-72
                  rounded-full
                  bg-violet-600/20
                  blur-[110px]
                "
              />


              {/* Botão Play */}


              {/* =================================================
                  INFORMAÇÕES DO VÍDEO
              ================================================== */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  p-6
                "
              >

                <p
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.3em]
                    text-white/50
                  "
                >
                  VEXA / PRODUÇÃO AUDIOVISUAL
                </p>


                <div
                  className="
                    mt-2
                    flex
                    items-end
                    justify-between
                    gap-4
                  "
                >

                  <p
                    className="
                      text-lg
                      font-medium
                      text-white
                    "
                  >
                    Posicionamento para sua Marca.
                  </p>

                </div>

              </div>

            </div>


            {/* =================================================
                ELEMENTOS DECORATIVOS
            ================================================== */}

            <div
              className="
                absolute
                -bottom-5
                -left-5
                hidden
                h-20
                w-20
                rounded-2xl
                border
                border-white/10
                bg-white/[0.02]
                lg:block
              "
            />

            <div
              className="
                absolute
                -right-3
                -top-3
                h-16
                w-16
                rounded-full
                border
                border-violet-400/20
                bg-violet-500/5
              "
            />

          </div>

        </div>

      </div>


      {/* =====================================================
          ELEMENTO LATERAL
      ====================================================== */}

      <div
        className="
          absolute
          left-6
          top-1/2
          z-20
          hidden
          -translate-y-1/2
          flex-col
          items-center
          gap-5
          lg:flex
        "
      >

        <div className="h-20 w-px bg-white/10" />

        <span
          className="
            [writing-mode:vertical-rl]
            rotate-180
            text-[9px]
            font-medium
            uppercase
            tracking-[0.35em]
            text-white/25
          "
        >
          Vexa Creative
        </span>

        <div className="h-20 w-px bg-violet-500/40" />

      </div>


      {/* =====================================================
          SCROLL
      ====================================================== */}

      <div
        className="
          absolute
          bottom-8
          left-1/2
          z-20
          hidden
          -translate-x-1/2
          items-center
          gap-4
          md:flex
        "
      >

        <span
          className="
            text-[9px]
            uppercase
            tracking-[0.35em]
            text-white/30
          "
        >
          Scroll para explorar
        </span>

        <div className="h-px w-10 bg-white/20" />

        <span
          className="
            text-[9px]
            font-semibold
            tracking-[0.2em]
            text-violet-400/70
          "
        >
          VEXA
        </span>

      </div>

    </section>
  )
}