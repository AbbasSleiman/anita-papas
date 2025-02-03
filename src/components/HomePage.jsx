import FirstSection from "./Sections/FirstSection";
import FourthSection from "./Sections/FourthSection";
import SecondSection from "./Sections/SecondSection";
import ThirdSection from "./Sections/ThirdSection";
import FifthSection from "./Sections/FifthSection";
import Footer from "./ui/Footer";
import QuoteContainer from "./QuoteContainer";
import BooksSlider from "./BooksSlider";

const HomePage = () => {
  return (
    <main className="space-y-14 md:space-y-24 lg:space-y-48 w-screen">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <QuoteContainer />
      <FifthSection />
      <div className="bg-third">
        <BooksSlider />
      </div>
      <Footer />
    </main>
  );
};

export default HomePage;
