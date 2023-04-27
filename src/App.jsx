import "./App.scss";
import { ThemeProvider } from "./Context/ThemeContext";

import SmartHeader from "./Components/SmartHeader/SmartHeader";
import BackToTop from "./Components/BackToTop/BackToTop";
import DarkMode from "./Components/DarkMode";
import OguzSection from "./Sections/Oguz";
import MobileNav from "./Components/MobileNav/MobileNav";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <SmartHeader />
        <OguzSection />
        <DarkMode />
        <BackToTop />
        <MobileNav />
      </div>
    </ThemeProvider>
  );
}

export default App;
