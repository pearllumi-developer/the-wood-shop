import "./App.css";
import Nav from "./components/Nav/Nav";
import Landing from "./views/Landing/Landing";
import Roots from "./views/Roots/Roots";
import WhatWeDo from "./views/WhatWeDo/WhatWeDo";

function App() {
  return (
    <main className="app-container">
      <Nav />
      <Landing />
      <Roots />
      <WhatWeDo />
    </main>
  );
}

export default App;
