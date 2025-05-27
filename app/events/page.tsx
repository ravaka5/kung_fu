import { Metadata } from 'next';
import Hero from "../components/pages/Events/Hero"
import Page1 from "../components/pages/Events/Page1"
import Page2 from "../components/pages/Events/Page2"
import Page3 from "../components/pages/Events/Page3"
import Page4 from "../components/pages/Events/Page4"

export const metadata: Metadata = {
  title: 'Événements - Kung Fu Hotel',
  description: 'Organisez vos événements spéciaux au Kung Fu Hotel. Mariages, séminaires, conférences et célébrations familiales.',
  keywords: 'événements, mariages, séminaires, conférences, Ampefy, Madagascar',
};

const EventsPage = () => {
    return (
        <main className="min-h-screen">
            <Hero />
            <Page1 />
            <Page2 />
            <Page3 />
            <Page4 />
        </main>
    )
}

export default EventsPage