import React, { useEffect, useState } from "react";

const CustomProfile = ({ id }) => {
  const [customer, setCustomer] = useState({});
  const CUSTOMER_API = "https://cyf-react.glitch.me/customers/";

  useEffect(() => {
    fetch(CUSTOMER_API + id)
      .then(res => res.json())
      .then(json => setCustomer(json));
  }, [id]);

  return (
    <ul>
      <li>ID: {customer.id}</li>
      <li>Email: {customer.email}</li>
      <li>VIP: {customer.vip ? "VIP" : "NO VIP"}</li>
      <li>Phone Number: {customer.phoneNumber}</li>
    </ul>
  );
};

export default CustomProfile;
