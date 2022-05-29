import React from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div className="restaurant-style">
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="Pizzas" />
        <Order orderType="Chocolate cake" />
        <Order orderType="Salads" />
      </ul>
    </div>
  );
};

export default Restaurant;
