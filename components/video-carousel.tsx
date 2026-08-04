"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function VideoCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current
    if (!el) return

    const amount = el.clientWidth * 0.8

    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    })
  }

  return (
    <section
      id="videos"
      className="border-t border-border/60 bg-secondary/40"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">

        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Portfólio
            </span>

            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Vídeos criados por mim
            </h2>

            <p className="mt-4 text-muted-foreground">
              Uma seleção de conteúdos produzidos para diferentes marcas e nichos.
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="flex h-11 w-11 items-center justify-center rounded-full border"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={() => scroll("right")}
              className="flex h-11 w-11 items-center justify-center rounded-full border"
            >
              <ChevronRight />
            </button>
          </div>

        </div>

        <div
          ref={scrollRef}
          className="mt-10 flex gap-6 overflow-x-auto pb-4"
        >

          <video
            src="/videos/video-01.mp4"
            controls
            autoPlay
            muted
            loop
            playsInline
            className="w-[320px] rounded-2xl"
          />

          <video
            src="/videos/video-02.mp4"
            controls
            autoPlay
            muted
            loop
            playsInline
            className="w-[320px] rounded-2xl"
          />

          <video
            src="/videos/video-03.mp4"
            controls
            autoPlay
            muted
            loop
            playsInline
            className="w-[320px] rounded-2xl"
          />

          <video
            src="/videos/video-04.mp4"
            controls
            autoPlay
            muted
            loop
            playsInline
            className="w-[320px] rounded-2xl"
          />

          <video
            src="/videos/video-05.mp4"
            controls
            autoPlay
            muted
            loop
            playsInline
            className="w-[320px] rounded-2xl"
          />

        </div>

      </div>
    </section>
  )
}