import { ArrowRight, ChevronDown, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-black"
    >

      {/* =========================
          VÍDEO DE BACKGROUND
      ========================== */}
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
          scale-105
          animate-[heroZoom_18s_ease-in-out_infinite_alternate]
        "
      >
        <source src="/videos/drone.mp4" type="video/mp4" />
      </video>


      {/* =========================
          OVERLAY ESCURO
      ========================== */}
      <div
        className="
          absolute
          inset-0
          bg-black/55
        "
      />


      {/* =========================
          GRADIENTE CINEMATOGRÁFICO
      ========================== */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black
          via-black/65
          to-black/20
        "
      />


      {/* =========================
          GRADIENTE ROXO DA VEXA
      ========================== */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_75%_50%,rgba(139,92,246,0.18),transparent_40%)]
        "
      />


      {/* =========================
          CONTEÚDO
      ========================== */}
      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
          px-6
          py-32
          lg:px-8
        "
      >

        <div className="max-w-4xl">


          {/* =========================
              BADGE
          ========================== */}
          <div
            className="
              mb-8
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/15
              bg-white/5
              px-4
              py-2
              text-xs
              font-medium
              uppercase
              tracking-[0.2em]
              text-white/80
              backdrop-blur-md
            "
          >
            <Sparkles className="h-3.5 w-3.5 text-violet-400" />

            Estratégia • Design • Tecnologia
          </div>


          {/* =========================
              TÍTULO
          ========================== */}
          <h1
            className="
              font-display
              text-5xl
              font-extrabold
              leading-[0.95]
              tracking-tight
              text-white
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
            "
          >

            Criamos presença.
            <br />

            <span className="text-violet-400">
              Geramos impacto.
            </span>

          </h1>


          {/* =========================
              DESCRIÇÃO
          ========================== */}
          <p
            className="
              mt-8
              max-w-2xl
              text-base
              leading-relaxed
              text-white/70
              sm:text-lg
              md:text-xl
            "
          >
            Transformamos marcas em experiências digitais
            que conectam, envolvem e geram resultados.
          </p>


          {/* =========================
              BOTÕES
          ========================== */}
          <div className="mt-10 flex flex-wrap gap-4">

            <a href="#contato">
              <Button
                size="lg"
                className="
                  h-12
                  bg-violet-600
                  px-7
                  text-white
                  shadow-xl
                  shadow-violet-600/20
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:bg-violet-500
                "
              >
                Solicitar orçamento

                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>


            <a href="#videos">
              <Button
                size="lg"
                variant="outline"
                className="
                  h-12
                  border-white/20
                  bg-white/5
                  px-7
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:border-violet-400
                  hover:bg-violet-500/10
                  hover:text-white
                "
              >
                Ver nossos projetos
              </Button>
            </a>

          </div>


          {/* =========================
              INDICADORES
          ========================== */}
          <div
            className="
              mt-14
              flex
              flex-wrap
              gap-8
              border-t
              border-white/10
              pt-7
              sm:gap-14
            "
          >

            <div>
              <p className="text-2xl font-bold text-white">
                3+
              </p>

              <p className="mt-1 text-xs text-white/50">
                Serviços especializados
              </p>
            </div>


            <div>
              <p className="text-2xl font-bold text-white">
                100%
              </p>

              <p className="mt-1 text-xs text-white/50">
                Foco em resultado
              </p>
            </div>


            <div>
              <p className="text-2xl font-bold text-white">
                24h
              </p>

              <p className="mt-1 text-xs text-white/50">
                Retorno rápido
              </p>
            </div>

          </div>

        </div>

      </div>


      {/* =========================
          INDICADOR DE SCROLL
      ========================== */}
      <a
        href="#servicos"
        className="
          absolute
          bottom-8
          left-1/2
          z-10
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          text-[10px]
          uppercase
          tracking-[0.3em]
          text-white/40
          transition-colors
          hover:text-white/70
          md:flex
        "
      >

        <span>
          Scroll para explorar
        </span>

        <ChevronDown className="h-4 w-4 animate-bounce" />

      </a>

    </section>
  )
}