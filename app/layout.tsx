import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import ScrollToTop from "./components/ui/ScrollToTop"


export const metadata: Metadata = {
  title: 'Kung Fu Hotel - Séjour, Détente et Gastronomie à Ampefy',
  description: 'Bienvenue au Kung Fu Hotel à Ampefy, Madagascar. Découvrez un lieu unique alliant confort, cuisine raffinée, paysages magnifiques et activités pour toute la famille.',
  keywords: 'hôtel Ampefy, Kung Fu Hotel, Madagascar, hébergement, restaurant, tourisme, détente, vacances Madagascar, chambres, spécialités malgaches, cuisine asiatique, activités nature',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <Navbar />
          <ScrollToTop />
        </header>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
