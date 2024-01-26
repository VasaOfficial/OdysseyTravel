import Landing from "./LandingPage/Landing";
import Faq from "./LandingPage/FAQ";
import Footer from "./components/Footer";
import ContintentSlider from "./LandingPage/ContinentSlider/ContinentSlider";

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
