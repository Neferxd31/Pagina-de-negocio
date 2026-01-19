import Companies from "../components/Companies";
import Cta from "../components/Cta";
import Hero from "../components/Hero";
import Metrics from "../components/Metrics";
import Process from "../components/Process";
import Team from "../components/Team";

export default function Inicio(){
    return(
        
        <div>
          <Hero/>
          <Companies/>
          <Process/>
          <Metrics/>
          <Team/>
          <Cta/>
        </div>
    );
}