import Header from "../../comman/header";
import AboutCompany from "./aboutcompany";
import Feature from "./feature";
import Slider from "./slider";
import Number from "./number";
import Event from "./event";
import Testimonial from "./testimonial";
import Footer from "../../comman/footer";
import Team from "./team";
import Project from "./project";

function Home () {
    return(
        <>
        <Header />
        <Slider />
        <AboutCompany />
        <Feature />
        <Project />
        <Number />
        <Event />
        <Testimonial />
        <Team />
        <Footer />
        </>
    );
}

export default Home ;