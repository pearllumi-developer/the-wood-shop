import "./App.css";
import Nav from "./components/Nav/Nav";
import Landing from "./views/Landing/Landing";
import Roots from "./views/Roots/Roots";

function App() {
  return (
    <main className="app-container">
      <Nav />
      <Landing />
      <Roots />
    </main>
  );
}

export default App;
