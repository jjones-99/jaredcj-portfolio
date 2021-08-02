import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { ScreenOverlay } from "./styles/AppStyles";
import Cursor from "./components/Cursor/Cursor";
import FloatingObjects from "./components/FloatingObjects/FloatingObjects";
import { Bar } from "./components/FloatingObjects/FloatingObjectsStyles";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Playground from "./components/Playground/Playground";
import Preloader from "./components/Preloader/Preloader";
import Work from "./components/Work/Work";
import { BARS, theme } from "./styles/theme";
import ParticleBackground from "./components/Particles/ParticleBackground";

function App() {
  const [preloader, setPreloader] = useState(false);

  return (
    <>
      <Cursor />

      {preloader && <Preloader clearPreloader={() => setPreloader(false)} />}
      {!preloader && (
        <ThemeProvider theme={theme}>
          <ScreenOverlay id="mainOverlay" />
          <ParticleBackground />
          {/* <FloatingObjects>
            {BARS.map(({ color, size }, index) => (
              <Bar width={size} color={color} key={index} />
            ))}
          </FloatingObjects> */}
          {/* <ThreeCanvas /> */}
          <Header />
          <Hero />
          <Work />
          <Playground />
          <Footer />
        </ThemeProvider>
      )}
    </>
  );
}

export default App;
