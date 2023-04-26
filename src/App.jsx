import "./App.scss";
import { ThemeProvider } from "./Context/ThemeContext";

import BackToTop from "./Components/BackToTop/BackToTop";
import DarkMode from "./Components/DarkMode";
import OguzSection from "./Sections/Oguz";
import MobileNav from "./Components/MobileNav/MobileNav";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <OguzSection />
        <DarkMode />
        <BackToTop />
        <MobileNav />
      </div>
    </ThemeProvider>
  );
}

export default App;
