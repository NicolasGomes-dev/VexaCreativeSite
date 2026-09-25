import { ArrowRight, ArrowUpRight } from "lucide-react"
import {
  InstagramIcon,
  WhatsappIcon,
} from "@/components/brand-icons"

const channels = [
  {
    icon: InstagramIcon,
    label: "Instagram",
    handle: "@vexacreative.br",
    description: "Projetos, bastidores e novidades.",
    href: "https://www.instagram.com/vexacreative.br/",
  },
  {
    icon: WhatsappIcon,
    label: "WhatsApp",
    handle: "(62) 98540-3863",
    description: "Fale diretamente com a VEXA.",
    href: "https://wa.me/5562985403863?text=Olá%20Nicolas!%20Vi%20seu%20site%20e%20gostaria%20de%20um%20orçamento.",
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    handle: "@br.dronefilms",
    description: "Trabalhos e produções aéreas.",
    href: "https://www.instagram.com/br.dronefilms/",
  },
]

export function Contact() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-[#F5F5F7] py-20 text-[#08080B]"
    >

      {/* BACKGROUND */}

      <div className="pointer-events-none absolute inset-0">

        <div
          className="
            absolute
            left-[15%]
            top-[-180px]
            h-[450px]
            w-[450px]
            rounded-full
            bg-violet-500/[0.06]
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            bottom-[-180px]
            right-[10%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-violet-500/[0.05]
            blur-[140px]
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


      {/* CONTAINER */}

      <div className="relative mx-auto max-w-5xl px-6">


        {/* CTA PRINCIPAL */}

        <div className="mx-auto max-w-2xl text-center">

          <span
            className="
              inline-flex
              rounded-full
              border
              border-violet-500/30
              bg-violet-500/[0.06]
              px-3
              py-1
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.25em]
              text-violet-600
            "
          >
            Entre em contato
          </span>


          <h2
            className="
              mt-5
              text-3xl
              font-bold
              leading-[1.05]
              tracking-tight
              text-[#08080B]
              sm:text-4xl
              lg:text-5xl
            "
          >
            Vamos transformar sua
            <br />

            <span className="text-violet-500">
              ideia em realidade.
            </span>
          </h2>


          <p
            className="
              mx-auto
              mt-4
              max-w-lg
              text-sm
              leading-6
              text-black/50
            "
          >
            Conte sua ideia. A VEXA transforma estratégia, criatividade e
            tecnologia em soluções para sua marca.
          </p>


          {/* CTA */}

          <a
            href="https://wa.me/5562985403863?text=Olá%20Nicolas!%20Gostaria%20de%20um%20orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-7
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-violet-600
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              shadow-[0_10px_30px_rgba(124,58,237,0.20)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-violet-500
            "
          >
            Solicitar orçamento

            <ArrowRight className="h-4 w-4" />
          </a>

        </div>


        {/* CANAIS */}

        <div className="mt-10 grid gap-4 md:grid-cols-3">

          {channels.map((channel) => (
            <a
              key={channel.handle}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                rounded-2xl
                border
                border-black/10
                bg-white
                p-5
                shadow-[0_8px_30px_rgba(0,0,0,0.04)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-violet-500/40
                hover:shadow-[0_12px_35px_rgba(124,58,237,0.10)]
              "
            >

              {/* ÍCONE + SETA */}

              <div className="flex items-center justify-between">

                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-violet-500/20
                    bg-violet-500/[0.05]
                  "
                >
                  <channel.icon className="h-4 w-4 text-violet-500" />
                </div>


                <ArrowUpRight
                  className="
                    h-4
                    w-4
                    text-black/25
                    transition-all
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                    group-hover:text-violet-500
                  "
                />

              </div>


              {/* TÍTULO */}

              <h3
                className="
                  mt-4
                  text-base
                  font-semibold
                  text-[#08080B]
                "
              >
                {channel.label}
              </h3>


              {/* HANDLE */}

              <p className="mt-1 text-xs font-medium text-violet-500">
                {channel.handle}
              </p>


              {/* DESCRIÇÃO */}

              <p className="mt-2 text-xs leading-5 text-black/45">
                {channel.description}
              </p>

            </a>
          ))}

        </div>


        {/* LINHA INFERIOR */}

        <div className="mt-10 border-t border-black/10" />

      </div>

    </section>
  )
}