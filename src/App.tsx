import React from "react";
import { ThemeProvider } from "styled-components";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Work from "./components/work/Work";
import { theme } from "./styles/theme";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header />
        <Hero />
        <Work />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
