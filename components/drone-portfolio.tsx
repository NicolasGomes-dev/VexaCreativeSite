"use client"

import { useEffect, useState } from "react"
import { Maximize2, X } from "lucide-react"

const droneVideos = [
  {
    number: "01",
    title: "Produção Aérea",
    description:
      "Imagens aéreas para apresentação de marcas e espaços.",
    src: "/videos/drone-01.mp4",
  },
  {
    number: "02",
    title: "Perspectiva Aérea",
    description:
      "Captação cinematográfica com drone.",
    src: "/videos/drone-02.mp4",
  },
  {
    number: "03",
    title: "Imagens Cinematográficas",
    description:
      "Produção audiovisual para diferentes segmentos.",
    src: "/videos/drone-03.mp4",
  },
  {
    number: "04",
    title: "Produção Aérea",
    description:
      "Imagens aéreas para apresentação de marcas e espaços.",
    src: "/videos/drone-04.mp4",
  },
]

export function DronePortfolio() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  /* FECHAR COM ESC */
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedVideo(null)
      }
    }

    window.addEventListener("keydown", handleEscape)

    return () => {
      window.removeEventListener("keydown", handleEscape)
    }
  }, [])

  /* BLOQUEAR SCROLL COM MODAL ABERTO */
  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [selectedVideo])

  return (
    <>
      <section
        id="drone"
        className="
          relative
          overflow-hidden
          border-t
          border-white/10
          bg-[#08080B]
          px-6
          py-24
          md:px-10
          md:py-28
          lg:px-16
        "
      >

        {/* BACKGROUND */}

        <div className="pointer-events-none absolute inset-0">

          <div
            className="
              absolute
              left-1/2
              top-[-250px]
              h-[600px]
              w-[600px]
              -translate-x-1/2
              rounded-full
              bg-violet-600/[0.07]
              blur-[180px]
            "
          />

          <div
            className="
              absolute
              -right-40
              bottom-[-150px]
              h-[450px]
              w-[450px]
              rounded-full
              bg-violet-500/[0.05]
              blur-[160px]
            "
          />

        </div>


        {/* CONTEÚDO */}

        <div className="relative mx-auto max-w-7xl">

          {/* CABEÇALHO */}

          <div className="mb-16 max-w-4xl">

            <div className="mb-6 flex items-center gap-3">

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
                Produção aérea
              </span>

            </div>


            <h2
              className="
                font-display
                text-4xl
                font-black
                leading-[0.95]
                tracking-tight
                text-white
                sm:text-5xl
                lg:text-7xl
              "
            >
              Sua marca vista

              <br />

              de{" "}
              <span className="text-violet-400">
                outro ângulo.
              </span>
            </h2>


            <p
              className="
                mt-7
                max-w-2xl
                text-base
                leading-8
                text-zinc-400
                sm:text-lg
              "
            >
              Produções com drone desenvolvidas para apresentar
              empresas, empreendimentos, eventos, propriedades e
              destinos através de uma perspectiva diferenciada.
            </p>

          </div>


          {/* GRID */}

          <div
            className="
              grid
              grid-cols-1
              gap-6
              sm:grid-cols-2
              xl:grid-cols-4
            "
          >

            {droneVideos.map((video) => (

              <article
                key={video.src}
                className="
                  group
                  overflow-hidden
                  rounded-[1.75rem]
                  border
                  border-white/10
                  bg-white/[0.02]
                  shadow-xl
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-violet-500/40
                  hover:shadow-2xl
                  hover:shadow-violet-500/10
                "
              >

                {/* ÁREA DO VÍDEO */}

                <div
                  className="
                    relative
                    aspect-[9/16]
                    overflow-hidden
                    bg-black
                  "
                >

                  {/* VÍDEO */}

                  <video
                    src={video.src}
                    controls
                    controlsList="nofullscreen"
                    playsInline
                    preload="metadata"
                    className="
                      absolute
                      inset-0
                      z-10
                      h-full
                      w-full
                      object-cover
                    "
                  />


                  {/* NÚMERO */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      left-4
                      top-4
                      z-30
                      flex
                      h-8
                      min-w-8
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/20
                      bg-black/70
                      px-2.5
                      text-[10px]
                      font-bold
                      tracking-[0.2em]
                      text-white
                      backdrop-blur-md
                    "
                  >
                    {video.number}
                  </div>


                  {/* =================================================
                      BOTÃO PRÓPRIO DE EXPANSÃO

                      NÃO É O FULLSCREEN DO NAVEGADOR
                  ================================================= */}

                  <div
                    className="
                      absolute
                      right-3
                      top-3
                      z-[100]
                    "
                  >

                    <button
                      type="button"
                      aria-label={`Expandir ${video.title}`}
                      onPointerDown={(event) => {
                        event.preventDefault()
                        event.stopPropagation()
                        setSelectedVideo(video.src)
                      }}
                      onClick={(event) => {
                        event.preventDefault()
                        event.stopPropagation()
                        setSelectedVideo(video.src)
                      }}
                      className="
                        flex
                        h-10
                        w-10
                        cursor-pointer
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/20
                        bg-black/80
                        text-white
                        shadow-xl
                        backdrop-blur-md
                        transition-all
                        duration-300
                        hover:scale-110
                        hover:bg-violet-600
                        active:scale-95
                      "
                    >
                      <Maximize2 className="h-4 w-4" />
                    </button>

                  </div>

                </div>


                {/* INFORMAÇÕES */}

                <div className="p-5">

                  <div className="mb-2 flex items-center gap-2">

                    <span
                      className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-violet-400
                      "
                    />

                    <span
                      className="
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.25em]
                        text-violet-400
                      "
                    >
                      VEXA CREATIVE
                    </span>

                  </div>


                  <h3
                    className="
                      font-display
                      text-lg
                      font-bold
                      text-white
                    "
                  >
                    {video.title}
                  </h3>


                  <p
                    className="
                      mt-2
                      text-xs
                      leading-relaxed
                      text-zinc-500
                    "
                  >
                    {video.description}
                  </p>

                </div>

              </article>

            ))}

          </div>


          {/* RODAPÉ */}

          <div className="mt-10 flex items-center gap-4">

            <span
              className="
                whitespace-nowrap
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-white/25
              "
            >
              VEXA CREATIVE
            </span>

            <div className="h-px flex-1 bg-white/10" />

            <span
              className="
                whitespace-nowrap
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-white/25
              "
            >
              04 produções
            </span>

          </div>

        </div>

      </section>


      {/* =====================================================
          MODAL PRÓPRIO
          SEM FULLSCREEN NATIVO
          SEM ROTAÇÃO
          SEM HORIZONTAL
      ====================================================== */}

      {selectedVideo && (

        <div
          className="
            fixed
            inset-0
            z-[99999]
            flex
            items-center
            justify-center
            bg-black/95
            p-4
            backdrop-blur-md
          "
          onClick={() => setSelectedVideo(null)}
        >

          {/* BOTÃO FECHAR */}

          <button
            type="button"
            aria-label="Fechar vídeo"
            onClick={(event) => {
              event.preventDefault()
              event.stopPropagation()
              setSelectedVideo(null)
            }}
            className="
              fixed
              right-5
              top-5
              z-[100001]
              flex
              h-11
              w-11
              cursor-pointer
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-black/80
              text-white
              shadow-xl
              backdrop-blur-md
              transition-all
              duration-300
              hover:scale-110
              hover:bg-violet-600
            "
          >
            <X className="h-5 w-5" />
          </button>


          {/* =================================================
              CONTAINER DO VÍDEO

              9:16 FIXO
          ================================================= */}

          <div
            className="
              relative
              h-[85vh]
              w-[calc(85vh*9/16)]
              max-h-[850px]
              max-w-[calc(100vw-32px)]
              overflow-hidden
              rounded-2xl
              bg-black
              shadow-2xl
              shadow-violet-500/20
            "
            onClick={(event) => {
              event.stopPropagation()
            }}
          >

            <video
              key={selectedVideo}
              src={selectedVideo}
              controls
              controlsList="nofullscreen"
              autoPlay
              playsInline
              preload="metadata"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-contain
              "
            />

          </div>

        </div>

      )}

    </>
  )
}