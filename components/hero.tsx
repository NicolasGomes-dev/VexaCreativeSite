import Image from "next/image"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-background"
    >
      {/* Gradiente de fundo */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-180px] h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[180px]" />

        <div className="absolute right-[-150px] top-1/3 h-[350px] w-[350px] rounded-full bg-fuchsia-500/10 blur-[140px]" />

        <div className="absolute left-[-120px] bottom-0 h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 md:grid-cols-2 lg:py-28">

        {/* Texto */}
        <div className="flex flex-col items-start gap-6">

          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-xs font-medium text-muted-foreground backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-violet-400" />
            Estratégia • Design • Tecnologia
          </span>

          <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight lg:text-7xl">
            Sua marca com{" "}
            <span className="text-white">
              conteúdo que
            </span>{" "}
            <span className="text-violet-400">
              engaja
            </span>{" "}
            e um site que{" "}
            <span className="text-violet-400">
              converte.
            </span>
          </h1>

          <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
            A VEXA impulsiona empresas com estratégias de conteúdo,
            vídeos de alto impacto e gestão de redes sociais,
            além de desenvolver sites que transformam visitantes em clientes.
          </p>

          {/* Botões */}
          <div className="flex flex-wrap gap-4">

            <a href="#contato">
              <Button
                size="lg"
                className="
                  bg-violet-600
                  hover:bg-violet-500
                  text-white
                  shadow-lg
                  shadow-violet-600/30
                  transition-all
                  duration-300
                  hover:scale-105
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
                  border-violet-500/40
                  hover:border-violet-500
                  hover:bg-violet-500/10
                  transition-all
                  duration-300
                "
              >
                Ver meus trabalhos
              </Button>
            </a>

          </div>

          {/* Indicadores */}
          <dl className="mt-6 flex flex-wrap gap-10 border-t border-border/60 pt-8">

            <div>
              <dt className="text-3xl font-bold text-violet-400">
                3+
              </dt>
              <dd className="text-sm text-muted-foreground">
                Serviços especializados
              </dd>
            </div>

            <div>
              <dt className="text-3xl font-bold text-violet-400">
                100%
              </dt>
              <dd className="text-sm text-muted-foreground">
                Foco em resultado
              </dd>
            </div>

            <div>
              <dt className="text-3xl font-bold text-violet-400">
                24h
              </dt>
              <dd className="text-sm text-muted-foreground">
                Retorno rápido
              </dd>
            </div>

          </dl>
        </div>

        {/* Imagem */}
        <div className="relative">

          {/* Glow atrás da imagem */}
          <div className="absolute inset-0 -z-10 flex items-center justify-center">
            <div className="h-[420px] w-[420px] rounded-full bg-violet-600/20 blur-[120px]" />
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-violet-600/20">

            <Image
              src="/hero-vexa.png"
              alt="Espaço de trabalho criativo"
              fill
              priority
              className="object-cover transition-transform duration-700 hover:scale-105"
            />

          </div>

          <div className="absolute -bottom-6 -left-6 rounded-2xl border border-white/10 bg-card/80 p-5 backdrop-blur-xl shadow-xl">

            <p className="font-display text-sm font-bold">
              Crescimento Online
            </p>

            <p className="text-xs text-muted-foreground">
              Tudo o que sua empresa precisa.
            </p>

          </div>

        </div>

      </div>
    </section>
  )
}