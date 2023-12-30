import Landing from "./LandingPage/Landing";
import Faq from "./LandingPage/FAQ";
import Footer from "./LandingPage/Footer";
import ContintentSlider from "./LandingPage/ContinentSlider/ContinentSlider";

export default function HomePage() {
  return (
    <>
      <Landing />
      <ContintentSlider />
      <Faq />
      <Footer />
    </>
  );
}
