import "./App.scss";
import { ThemeProvider } from "./Context/ThemeContext";

import BackToTop from "./Components/BackToTop/BackToTop";
import DarkMode from "./Components/DarkMode";
import OguzSection from "./Sections/Oguz";
import {index as OzkanSection} from "./Sections/Ozkan";
function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <OzkanSection />
        <OguzSection />
        <DarkMode />
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
