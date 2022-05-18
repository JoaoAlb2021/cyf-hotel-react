import React from "react";

const Heading = () => {
  const hotelImage = "https://cdn-icons-png.flaticon.com/512/201/201426.png";
  return (
    <header className="App-header">
      <img
        src={hotelImage}
        alt="Hotel logo"
        width={25}
        style={{ margin: "0 15px" }}
      />
      CYF Hotel
    </header>
  );
};

export default Heading;
