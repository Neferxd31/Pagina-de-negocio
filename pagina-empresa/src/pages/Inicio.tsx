
import Cta from "../components/Cta";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Process from "../components/Process";
import Team from "../components/Team";
import Portfolio from "../components/Portfolio";
import Burble from "../components/Burble";


export default function Inicio(){
    return(
        
        <div>
          <Hero/>
          <Process/>
          <Services/>
          <Portfolio/>
          <Team/>
          <Cta/>
          <Burble/>
        </div>
    );
}