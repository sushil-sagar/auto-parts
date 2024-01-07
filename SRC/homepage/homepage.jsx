import FormPage from "./formpage/formpage";
import Page from "./content/page";
import BenefitsPage from "./benefits/benefits";
import CardsPage from "./Images/images";
import CarouselCards from "./CardCarousels/Cardcarousels";
import PartImage from "../PartImage/PartImage"
import AlignPage from "./formpage/alignPage";
import LogoCarousels from "../carousels/logocarousels";
function Homepage() {
    return (
      <div className="App">
        <AlignPage/>
        <Page/>
        <BenefitsPage/>
        <CardsPage/>
        <CarouselCards/>
        <LogoCarousels/>
        <PartImage/>
      </div>
    );
  }
  
  export default Homepage;