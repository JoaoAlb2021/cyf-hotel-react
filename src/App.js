import React from "react";

import Bookings from "./components/Bookings";
import Heading from "./components/Heading";
import TouristInfoCard from "./components/TouristInfoCard";
import Footer from "./components/Footer";
import "./App.css";

const footerData = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];
const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCard />
      <Bookings />
      <Footer footerData={footerData} />
    </div>
  );
};

export default App;
