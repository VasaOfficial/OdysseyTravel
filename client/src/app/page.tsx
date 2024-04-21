import Landing from '@/src/app/pages/landing-page/Landing';
import Faq from '@/src/app/pages/landing-page//FAQ';
import Footer from './components/Footer';
import ContintentSlider from '@/src/app/pages/landing-page//ContinentSlider/ContinentSlider';

export default function HomePage() {
  return (
    <>
      <main>
        <Landing />
        <ContintentSlider />
        <Faq />
        <Footer />
      </main>
    </>
  );
}
