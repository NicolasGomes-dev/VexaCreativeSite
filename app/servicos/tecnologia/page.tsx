import { SiteHeader } from "@/components/site-header"

export default function TecnologiaPage() {
    return (
        <>
            <SiteHeader />

            <main className="min-h-screen bg-[#070707] pt-20 text-white">

                <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">

                    {/* VOLTAR */}

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


                    {/* HERO */}

                    <section className="mt-16 max-w-3xl">

                        <span
                            className="
                                text-xs
                                font-semibold
                                uppercase
                                tracking-[0.3em]
                                text-violet-400
                            "
                        >
                            Tecnologia
                        </span>

                        <h1
                            className="
                                mt-3
                                text-4xl
                                font-bold
                                leading-tight
                                sm:text-5xl
                                lg:text-6xl
                            "
                        >
                            Desenvolvimento Web
                        </h1>

                        <p
                            className="
                                mt-5
                                max-w-xl
                                text-base
                                leading-7
                                text-white/50
                                sm:text-lg
                            "
                        >
                            Criamos experiências digitais modernas,
                            rápidas e estratégicas para empresas que
                            querem fortalecer sua presença online.
                        </p>

                        <div className="mt-7 flex flex-wrap gap-3">

                            <a
                                href="#contato"
                                className="
                                    rounded-full
                                    bg-violet-500
                                    px-5
                                    py-2.5
                                    text-sm
                                    font-semibold
                                    transition-all
                                    duration-300
                                    hover:-translate-y-0.5
                                    hover:bg-violet-400
                                "
                            >
                                Solicitar orçamento
                            </a>

                            <a
                                href="#solucoes"
                                className="
                                    rounded-full
                                    border
                                    border-white/10
                                    px-5
                                    py-2.5
                                    text-sm
                                    font-semibold
                                    text-white/70
                                    transition-all
                                    duration-300
                                    hover:border-violet-500/50
                                    hover:text-white
                                "
                            >
                                Conhecer soluções
                            </a>

                        </div>

                    </section>


                    {/* SOLUÇÕES */}

                    <section
                        id="solucoes"
                        className="
                            mt-20
                            scroll-mt-24
                            border-t
                            border-white/10
                            pt-12
                        "
                    >

                        <div className="mb-8">

                            <span
                                className="
                                    text-xs
                                    font-semibold
                                    uppercase
                                    tracking-[0.3em]
                                    text-violet-400
                                "
                            >
                                Soluções
                            </span>

                            <h2
                                className="
                                    mt-3
                                    max-w-2xl
                                    text-3xl
                                    font-bold
                                    leading-tight
                                    sm:text-4xl
                                "
                            >
                                Presença digital
                                <span className="text-violet-400">
                                    {" "}construída para gerar impacto.
                                </span>
                            </h2>

                        </div>


                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

                            {/* SITE INSTITUCIONAL */}

                            <article
                                className="
                                    group
                                    rounded-2xl
                                    border
                                    border-white/10
                                    bg-white/[0.02]
                                    p-6
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:border-violet-500/40
                                    hover:bg-violet-500/[0.04]
                                "
                            >

                                <span className="text-xs font-semibold text-violet-400">
                                    01
                                </span>

                                <h3 className="mt-4 text-lg font-semibold">
                                    Sites Institucionais
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-white/40">
                                    Estruturas profissionais para apresentar
                                    sua empresa, seus serviços e sua marca.
                                </p>

                            </article>


                            {/* LANDING PAGE */}

                            <article
                                className="
                                    group
                                    rounded-2xl
                                    border
                                    border-white/10
                                    bg-white/[0.02]
                                    p-6
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:border-violet-500/40
                                    hover:bg-violet-500/[0.04]
                                "
                            >

                                <span className="text-xs font-semibold text-violet-400">
                                    02
                                </span>

                                <h3 className="mt-4 text-lg font-semibold">
                                    Landing Pages
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-white/40">
                                    Páginas focadas em campanhas, produtos
                                    e geração de oportunidades.
                                </p>

                            </article>


                            {/* APLICAÇÕES WEB */}

                            <article
                                className="
                                    group
                                    rounded-2xl
                                    border
                                    border-white/10
                                    bg-white/[0.02]
                                    p-6
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:border-violet-500/40
                                    hover:bg-violet-500/[0.04]
                                "
                            >

                                <span className="text-xs font-semibold text-violet-400">
                                    03
                                </span>

                                <h3 className="mt-4 text-lg font-semibold">
                                    Aplicações Web
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-white/40">
                                    Experiências e soluções digitais
                                    desenvolvidas de acordo com cada projeto.
                                </p>

                            </article>

                        </div>

                    </section>

                </div>

            </main>
        </>
    )
}