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
import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";

export interface IAppContext {
  setRenderContactForm?: (renderContactForm: boolean) => void;
}

export const AppContext = React.createContext<IAppContext>({});

function App() {
  const [preloader, setPreloader] = useState(false);
  const [renderContactForm, setRenderContactForm] = useState(false);

  const defaultContext = {
    setRenderContactForm,
  };

  return (
    <AppContext.Provider value={defaultContext}>
      <Cursor />

      {preloader && <Preloader clearPreloader={() => setPreloader(false)} />}
      {!preloader && (
        <ThemeProvider theme={theme}>
          <ScreenOverlay id="mainOverlay" />
          <Contact renderContactForm={renderContactForm} />
          <ParticleBackground />
          <Header />
          <Hero />
          <AboutMe />
          <Work />
          <Playground />
          <Footer />
        </ThemeProvider>
      )}
    </AppContext.Provider>
  );
}

export default App;
