import React from "react";

const Footer = () => {
  const footerData = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <ul>
      {footerData.map(data => (
        <li>{data}</li>
      ))}
    </ul>
  );
};

export default Footer;
