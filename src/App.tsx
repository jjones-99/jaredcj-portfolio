import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Cursor from "./components/Cursor/Cursor";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Preloader from "./components/Preloader/Preloader";
import ThreeCanvas from "./components/ThreeCanvas/ThreeCanvas";
import Work from "./components/Work/Work";
import { theme } from "./styles/theme";

function App() {
  const [preloader, setPreloader] = useState(true);

  return (
    <>
      <Cursor />

      {preloader && <Preloader clearPreloader={() => setPreloader(false)} />}
      {!preloader && (
        <div>
          <ThemeProvider theme={theme}>
            {/* <ThreeCanvas /> */}
            <Header />
            <Hero />
            <Work />
            <Footer />
          </ThemeProvider>
        </div>
      )}
    </>
  );
}

export default App;
