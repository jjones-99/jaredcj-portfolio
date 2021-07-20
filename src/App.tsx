import React from "react";
import { ThemeProvider } from "styled-components";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import ThreeCanvas from "./components/ThreeCanvas/ThreeCanvas";
import Work from "./components/Work/Work";
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
