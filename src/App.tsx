import Navbar from "@/scenes/navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from "./shared/types";
import Home from "./scenes/home";
import Benefits from "./scenes/benefits";
import OurClasses from "./scenes/Classes";
import ContactUs from "./scenes/Context";
function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopPage, setIsTopPage] = useState(true);
  
  useEffect(() => {
    const handleScroller = () => {
      if (window.scrollY === 0) {
        setIsTopPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      else setIsTopPage(false);
    };

    window.addEventListener("scroll", handleScroller);
    return () => window.removeEventListener("scroll", handleScroller);
  }, []);

  return (
    <div className="App bg-gray-20">
      <Navbar
        isTopPage={isTopPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage}/>
      <OurClasses setSelectedPage = {setSelectedPage}/>
      <ContactUs setSelectedPage={setSelectedPage}/>
      
    </div>
  );
}

export default App;
