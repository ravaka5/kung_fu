import { Metadata } from "next"
import Hero from "../components/pages/Restaurant/Hero"
import Page1 from "../components/pages/Restaurant/Page1"
import Page2 from "../components/pages/Restaurant/Page2"
import Page3 from "../components/pages/Restaurant/Page3"
import Page4 from "../components/pages/Restaurant/Page4"

export const metadata: Metadata = {
    title: 'Restaurant - Kung Fu Hotel',
    description: 'Découvrez le restaurant du Kung Fu Hotel à Ampefy. Dégustez une cuisine raffinée mêlant spécialités malgaches et inspirations asiatiques dans un cadre chaleureux et authentique.',
    keywords: 'restaurant, gastronomie, spécialités malgaches, cuisine asiatique, Ampefy, Madagascar, Kung Fu Hotel, plats traditionnels, ambiance conviviale',
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