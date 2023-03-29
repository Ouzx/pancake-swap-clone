import "./App.scss";
import { ThemeProvider } from "./Context/ThemeContext";

import BackToTop from "./Components/BackToTop/BackToTop";

import OguzSection from "./Sections/Oguz";
function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <OguzSection />
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
