export function AerialPortfolio() {
    return (
        <section className="relative overflow-hidden bg-[#070707] text-white">

            <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">

                {/* BOTÃO VOLTAR */}

                <a
                    href="/#services"
                    className="
                        group
                        mb-10
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


                {/* HEADER DA PRODUÇÃO AÉREA */}

                <div className="max-w-3xl">

                    <div className="mb-4 flex items-center gap-3">
                        <span className="h-px w-8 bg-violet-500" />

                        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-violet-400">
                            Produção Aérea
                        </span>
                    </div>

                    <h2 className="text-4xl font-bold leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
                        Sua marca vista
                        <br />
                        de{" "}
                        <span className="text-violet-400">
                            outro ângulo.
                        </span>
                    </h2>

                    <p className="mt-5 max-w-2xl text-sm leading-6 text-white/50 sm:text-base">
                        Produções com drone desenvolvidas para apresentar empresas,
                        empreendimentos, eventos, propriedades e destinos através de
                        uma perspectiva diferenciada.
                    </p>

                </div>


                {/* VÍDEOS */}

                <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">

                    {/* VÍDEO 01 */}

                    <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">

                        <div className="aspect-[9/16] overflow-hidden bg-black">
                            <video
                                src="/videos/drone-01.mp4"
                                controls
                                playsInline
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <div className="p-4">

                            <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-violet-400">
                                VEXA CREATIVE
                            </span>

                            <h3 className="mt-2 text-sm font-semibold">
                                Produção Aérea
                            </h3>

                            <p className="mt-1 text-xs leading-5 text-white/40">
                                Imagens aéreas para apresentação de marcas e espaços.
                            </p>

                        </div>

                    </article>


                    {/* VÍDEO 02 */}

                    <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">

                        <div className="aspect-[9/16] overflow-hidden bg-black">
                            <video
                                src="/videos/drone-02.mp4"
                                controls
                                playsInline
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <div className="p-4">

                            <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-violet-400">
                                VEXA CREATIVE
                            </span>

                            <h3 className="mt-2 text-sm font-semibold">
                                Perspectiva Aérea
                            </h3>

                            <p className="mt-1 text-xs leading-5 text-white/40">
                                Captação cinematográfica com drone.
                            </p>

                        </div>

                    </article>


                    {/* VÍDEO 03 */}

                    <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">

                        <div className="aspect-[9/16] overflow-hidden bg-black">
                            <video
                                src="/videos/drone-03.mp4"
                                controls
                                playsInline
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <div className="p-4">

                            <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-violet-400">
                                VEXA CREATIVE
                            </span>

                            <h3 className="mt-2 text-sm font-semibold">
                                Imagens Cinematográficas
                            </h3>

                            <p className="mt-1 text-xs leading-5 text-white/40">
                                Produção audiovisual para diferentes ângulos.
                            </p>

                        </div>

                    </article>


                    {/* VÍDEO 04 */}

                    <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">

                        <div className="aspect-[9/16] overflow-hidden bg-black">
                            <video
                                src="/videos/drone-04.mp4"
                                controls
                                playsInline
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <div className="p-4">

                            <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-violet-400">
                                VEXA CREATIVE
                            </span>

                            <h3 className="mt-2 text-sm font-semibold">
                                Produção Aérea
                            </h3>

                            <p className="mt-1 text-xs leading-5 text-white/40">
                                Imagens aéreas para apresentação de marcas e espaços.
                            </p>

                        </div>

                    </article>

                </div>


                {/* RODAPÉ DA SESSÃO */}

                <div className="mt-6 flex items-center gap-4">

                    <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/30">
                        VEXA CREATIVE
                    </span>

                    <div className="h-px flex-1 bg-white/10" />

                    <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/30">
                        04 PRODUÇÕES
                    </span>

                </div>

            </div>

        </section>
    )
}