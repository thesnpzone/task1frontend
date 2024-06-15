import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Header_img from "./Components/Header_img/Header_img";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Insights from "./Components/Insights/Insights";
import Inquiries from "./Components/Inquiries/Inquiries";
import Action from "./Components/Action/Action";
import Cat from "./Components/CAT/Cat";
import Testimonial from "./Components/Testimonial/Testimonial";
import Testimonialssss from "./Components/Testimonial/Testimonialssss";
import Accordin from "./Components/Accordin/Accordin";
import Contact from "./Components/Contact/Contact";
import Foooter from "./Components/Foooter/Foooter";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Header_img />
      <About />
      <Services />
      <Insights />
      <Inquiries />
      <Action />
      <Cat />
      <Testimonialssss />
      <Accordin
        heading="3. How does Osumare measure campaign success?"
        content="We believe in measurable results. Our data-driven approach means that every campaign's performance is tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics, giving you clear insights into how our strategies are driving growth for your brand."
      />
      <Contact/>
      <Foooter/>
    </>
  );
}

export default App;
