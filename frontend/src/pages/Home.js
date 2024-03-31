import React from "react";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Footer from "../components/Footer";
import StyleComponent from "../components/StyleComponent";
import Counter from "../components/Counter";

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <Intro />
      <StyleComponent />
      <hr></hr>
      <Counter />
      <Footer />
      
    </div>
  );
}
