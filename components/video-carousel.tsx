"use client"

import { useEffect, useRef, useState } from "react"
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
} from "lucide-react"

const videos = [
  {
    number: "01",
    title: "Produção Audiovisual",
    src: "/videos/video-01.mp4",
  },
  {
    number: "02",
    title: "Conteúdo para Marcas",
    src: "/videos/video-02.mp4",
  },
  {
    number: "03",
    title: "Produção de Conteúdo",
    src: "/videos/video-03.mp4",
  },
  {
    number: "04",
    title: "Conteúdo que Impacta",
    src: "/videos/video-05.mp4",
  },
]

export function VideoCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  const scroll = (direction: "left" | "right") => {
    const element = scrollRef.current

    if (!element) return

    const amount = element.clientWidth * 0.75

    element.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedVideo(null)
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = selectedVideo ? "hidden" : ""

    return () => {
      document.body.style.overflow = ""
    }
  }, [selectedVideo])

  return (
    <>
      <section
        id="videos"
        className="
          relative
          overflow-hidden
          border-t
          border-white/10
          bg-[#08080B]
        "
      >
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
              bg-violet-600/[0.08]
              blur-[180px]
            "
          />

          <div
            className="
              absolute
              -left-40
              bottom-[-200px]
              h-[450px]
              w-[450px]
              rounded-full
              bg-violet-500/[0.05]
              blur-[160px]
            "
          />

          <div
            className="
              absolute
              -right-40
              top-1/2
              h-[400px]
              w-[400px]
              rounded-full
              bg-fuchsia-500/[0.04]
              blur-[160px]
            "
          />
        </div>

        <div
          className="
            relative
            mx-auto
            max-w-7xl
            px-6
            py-24
            md:px-10
            md:py-28
            lg:px-16
          "
        >
          <div
            className="
              flex
              flex-col
              gap-10
              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >
            <div className="max-w-3xl">
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
                  Portfólio audiovisual
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
                Conteúdo que
                <br />
                <span className="text-violet-400">
                  chama atenção.
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
                Produções audiovisuais pensadas para valorizar marcas,
                produtos e experiências através de imagens que geram
                impacto.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-3">
              <button
                type="button"
                onClick={() => scroll("left")}
                aria-label="Ver vídeos anteriores"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  text-white
                  transition-all
                  duration-300
                  hover:border-violet-500/40
                  hover:bg-violet-500/10
                  hover:text-violet-400
                "
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={() => scroll("right")}
                aria-label="Ver próximos vídeos"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  text-white
                  transition-all
                  duration-300
                  hover:border-violet-500/40
                  hover:bg-violet-500/10
                  hover:text-violet-400
                "
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="
              mt-14
              flex
              gap-6
              overflow-x-auto
              scroll-smooth
              pb-6
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {videos.map((video) => (
              <article
                key={video.src}
                className="
                  group
                  relative
                  min-w-[260px]
                  max-w-[260px]
                  overflow-hidden
                  rounded-[1.75rem]
                  border
                  border-white/10
                  bg-white/[0.02]
                  shadow-2xl
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-violet-500/40
                  hover:shadow-violet-500/10
                  sm:min-w-[300px]
                  sm:max-w-[300px]
                "
              >
                <div
                  className="
                    relative
                    aspect-[9/16]
                    overflow-hidden
                    bg-black
                  "
                >
                  <video
                    src={video.src}
                    controls
                    controlsList="nofullscreen"
                    playsInline
                    preload="metadata"
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                    "
                  />

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

                  <button
                    type="button"
                    aria-label={`Expandir ${video.title}`}
                    onClick={(event) => {
                      event.preventDefault()
                      event.stopPropagation()
                      setSelectedVideo(video.src)
                    }}
                    className="
                      absolute
                      right-4
                      top-4
                      z-50
                      flex
                      h-11
                      w-11
                      cursor-pointer
                      items-center
                      justify-center
                      rounded-full
                      bg-black/85
                      text-white
                      shadow-lg
                      backdrop-blur-sm
                      transition-all
                      duration-300
                      hover:scale-110
                      hover:bg-black
                    "
                  >
                    <Maximize2 className="h-4 w-4" />
                  </button>
                </div>

                <div className="p-5">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />

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
                    Produção audiovisual profissional para marcas.
                  </p>
                </div>
              </article>
            ))}
          </div>

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

          <div
            className="
              relative
              h-[88vh]
              max-h-[900px]
              aspect-[9/16]
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
              autoPlay
              controls
              controlsList="nofullscreen"
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