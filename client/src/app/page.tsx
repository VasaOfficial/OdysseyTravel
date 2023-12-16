import Landing from "./Components/PageSections/Landing";
import Faq from "./Components/PageSections/FAQ";
import Footer from "./Components/PageSections/Footer";
import ContintentSlider from "./Components/PageSections/ContinentSlider";

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
