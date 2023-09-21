import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Introduction from "./components/Introduction";
import Rules from "./components/Rules";
import Criteria from "./components/Criteria";
import FAQ from "./components/FAQ";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
import Prize from "./components/Prize";
import Partners from "./components/Partners";
function App() {
  
  return (
    <div className="App ">
      <Navbar/>
      <HeroSection/>
      <Introduction/>
      <Rules/>
      <Criteria/>
      <FAQ/>
      <Timeline/> 
      <Prize/>
      <Partners/>
      <Footer/>
     
    </div>
  );
}

export default App;
