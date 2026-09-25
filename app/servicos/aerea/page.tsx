import { SiteHeader } from "@/components/site-header"
import { AerialPortfolio } from "@/components/aerial-portfolio"

export default function AereaPage() {
    return (
        <>
            <SiteHeader />

            <main className="min-h-screen bg-[#070707] pt-20 text-white">
                <AerialPortfolio />
            </main>
        </>
    )
}