import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import ChatAI from "./chatai/ChatAI";
import MedicationReminder from "./components/ai/MedicationReminder";
import MedicineRecommendation from "./components/ai/MedicineRecommendation";
import MedicineSearch from "./components/MedicineSearch";
import ContactUs from "./components/ContactUs";
import HealthAssistant from "./components/ai/HealthAssistant";
import Doctors from "./components/Doctors";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <>
            <div id="home">
              <Home />
            </div>
            <div id="about">
              <About />
            </div>
            <div id="services">
              <Services />
            </div>
            <div id="doctors">
              <Doctors />
            </div>
            <div id="blog">
              <Blogs />
            </div>
          </>
        );
      case "medicines":
        return <MedicineSearch />;
      case "contact":
        return <ContactUs />;
      default:
        return (
          <>
            <div id="home">
              <Home />
            </div>
            <div id="about">
              <About />
            </div>
            <div id="services">
              <Services />
            </div>
            <div id="doctors">
              <Doctors />
            </div>
            <div id="blog">
              <Blogs />
            </div>
          </>
        );
    }
  };

  return (
    <div className="bg-[#dedbda]">
      <Navbar setCurrentPage={setCurrentPage} currentPage={currentPage} />

      <main>
        {renderPage()}
      </main>

      <Footer />
      <ChatAI />
      <MedicationReminder />
      <MedicineRecommendation />
      <HealthAssistant />
    </div>
  );
};

export default App;

