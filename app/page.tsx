import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Plans } from "@/components/plans"
import { VideoCarousel } from "@/components/video-carousel"
import { DronePortfolio } from "@/components/drone-portfolio"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"
import { FloatingSocial } from "@/components/floating-social"

export default function Page() {
  return (
    <>
      <SiteHeader />

      <Hero />

      <Services />

      <Plans />

      <VideoCarousel />

      <DronePortfolio />

      <Contact />

      <SiteFooter />

      <FloatingSocial />
    </>
  )
}