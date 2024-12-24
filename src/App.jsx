import BankFeatures from "./components/BankFeatures";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LatestArticles from "./components/LatestArticles";
import Footer from "./components/Footer";
import Attribute from "./components/Attribute";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BankFeatures />
        <LatestArticles />
      </main>
      <Footer />
      <Attribute />
    </>
  );
};

export default App;
