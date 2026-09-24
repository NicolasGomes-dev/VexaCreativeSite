import { SiteHeader } from "@/components/site-header"
import { VideoCarousel } from "@/components/video-carousel"

export default function AudiovisualPage() {
    return (
        <>
            <SiteHeader />

            <main className="min-h-screen bg-[#070707] text-white pt-20">

                <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">

                    {/* =====================================================
                        VOLTAR
                    ====================================================== */}

                    <a
                        href="/#services"
                        className="
                            group
                            inline-flex
                            items-center
                            gap-3
                            rounded-full
                            border
                            border-white/10
                            bg-white/[0.03]
                            px-4
                            py-2.5
                            text-sm
                            font-semibold
                            text-white/80
                            transition-all
                            duration-300
                            hover:border-violet-500/40
                            hover:bg-violet-500/[0.08]
                            hover:text-white
                        "
                    >
                        <span
                            className="
                                text-base
                                text-violet-400
                                transition-transform
                                duration-300
                                group-hover:-translate-x-1
                            "
                        >
                            ←
                        </span>

                        <span>
                            Voltar aos serviços
                        </span>

                        <span
                            className="
                                h-px
                                w-0
                                bg-violet-400
                                transition-all
                                duration-300
                                group-hover:w-5
                            "
                        />
                    </a>


                    {/* =====================================================
                        VÍDEOS
                    ====================================================== */}

                    <div className="mt-12 w-full">
                        <VideoCarousel />
                    </div>


                    {/* =====================================================
                        ESPECIALIDADES
                    ====================================================== */}

                    <section className="mt-12 border-t border-white/10 pt-8">

                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">

                            {/* CAPTAÇÃO */}

                            <div
                                className="
                                    rounded-xl
                                    border
                                    border-white/10
                                    bg-white/[0.02]
                                    px-5
                                    py-4
                                    transition-all
                                    duration-300
                                    hover:border-violet-500/30
                                    hover:bg-violet-500/[0.03]
                                "
                            >
                                <span
                                    className="
                                        text-xs
                                        font-semibold
                                        text-violet-400
                                    "
                                >
                                    01
                                </span>

                                <h3 className="mt-1 font-semibold">
                                    Captação
                                </h3>

                                <p className="mt-1 text-xs text-white/40">
                                    Filmagens profissionais.
                                </p>
                            </div>


                            {/* DRONE */}

                            <div
                                className="
                                    rounded-xl
                                    border
                                    border-white/10
                                    bg-white/[0.02]
                                    px-5
                                    py-4
                                    transition-all
                                    duration-300
                                    hover:border-violet-500/30
                                    hover:bg-violet-500/[0.03]
                                "
                            >
                                <span
                                    className="
                                        text-xs
                                        font-semibold
                                        text-violet-400
                                    "
                                >
                                    02
                                </span>

                                <h3 className="mt-1 font-semibold">
                                    Drone
                                </h3>

                                <p className="mt-1 text-xs text-white/40">
                                    Imagens aéreas.
                                </p>
                            </div>


                            {/* EDIÇÃO */}

                            <div
                                className="
                                    rounded-xl
                                    border
                                    border-white/10
                                    bg-white/[0.02]
                                    px-5
                                    py-4
                                    transition-all
                                    duration-300
                                    hover:border-violet-500/30
                                    hover:bg-violet-500/[0.03]
                                "
                            >
                                <span
                                    className="
                                        text-xs
                                        font-semibold
                                        text-violet-400
                                    "
                                >
                                    03
                                </span>

                                <h3 className="mt-1 font-semibold">
                                    Edição
                                </h3>

                                <p className="mt-1 text-xs text-white/40">
                                    Finalização profissional.
                                </p>
                            </div>

                        </div>

                    </section>

                </div>

            </main>
        </>
    )
}