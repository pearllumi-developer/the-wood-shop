import { useState, useEffect } from "react";
import Nav from "./components/Nav/Nav";
import Landing from "./views/Landing/Landing";
import Roots from "./views/Roots/Roots";
import TheCrew from "./views/TheCrew/TheCrew";
import TheProof from "./views/TheProof/TheProof";
import WhatWeDo from "./views/WhatWeDo/WhatWeDo";
import WhereWeAre from "./views/WhereWeAre/WhereWeAre";
import Footer from "./components/Footer/Footer";
import MobileNav from "./components/MobileNav/MobileNav";
import "./App.css";

function App() {
  const [screen, setScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 769) {
        setScreen(true);
      } else {
        setScreen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <main className="app-container">
      {screen ? <MobileNav /> : <Nav />}
      <Landing />
      <Roots />
      <WhatWeDo />
      <WhereWeAre />
      <TheCrew />
      <TheProof />
      <Footer />
    </main>
  );
}

export default App;
