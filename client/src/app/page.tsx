import Landing from "./LandingPage/Landing";
import Faq from "./LandingPage/FAQ";
import Footer from "./components/Footer";
import ContintentSlider from "./LandingPage/ContinentSlider/ContinentSlider";
import TopOffers from "./LandingPage/TopOffers";

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
