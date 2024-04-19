import Landing from '@/src/app/pages/landing-page/Landing';
import Faq from '@/src/app/pages/landing-page//FAQ';
import Footer from './components/Footer';
import ContintentSlider from '@/src/app/pages/landing-page//ContinentSlider/ContinentSlider';
import TopOffers from '@/src/app/pages/landing-page//TopOffers';

export default function HomePage() {
  return (
    <>
      <main>
        <Landing />
        <TopOffers />
        <ContintentSlider />
        <Faq />
        <Footer />
      </main>
    </>
  );
}
