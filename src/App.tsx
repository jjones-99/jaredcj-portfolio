import React from "react";
import { ThemeProvider } from "styled-components";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import ThreeCanvas from "./components/three-canvas/ThreeCanvas";
import Work from "./components/work/Work";
import { theme } from "./styles/theme";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <ThreeCanvas />
        <Header />
        <Hero />
        <Work />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
