import { useEffect, useState } from "react";
import Footer from "./assets/Components/Footer/Footer";
import Hero from "./assets/Components/Hero/Hero";
import Main from "./assets/Components/Main-content/Main";
import Navbar from "./assets/Components/Navbar/Navbar";


function App() {
  const [bids, setBids] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBids(data));
  }, []);
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Main bids={bids}></Main>
      <Footer></Footer>
    </>
  );
}

export default App;

