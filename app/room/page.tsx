import { Metadata } from "next"
import Hero from "@/app/components/pages/Room/Hero"
import Page1 from "@/app/components/pages/Room/Page1"
import Page2 from "@/app/components/pages/Room/Page2"
import Page3 from "@/app/components/pages/Room/Page3"
import Page4 from "@/app/components/pages/Room/Page4"

export const metadata: Metadata = {
    title: 'Chambres - Kung Fu Hotel',
    description: 'Séjournez dans l’une des chambres confortables du Kung Fu Hotel à Ampefy. Vue imprenable sur le lac, ambiance paisible et prestations de qualité pour un séjour inoubliable à Madagascar.',
    keywords: 'chambres, hébergement, hôtel Ampefy, Kung Fu Hotel, séjour, confort, vue sur lac, Ampefy, Madagascar, nuitée, détente, tourisme Ampefy',
};


const page = () => {
    return (
        <>
            <Hero />
            <Page1 />
            <Page2 />
            <Page3 />
            <Page4 />
        </>
    )
}

export default page