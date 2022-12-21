import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "./PriceCard.css";
import Datepicker from "react-tailwindcss-datepicker";

const PriceCard = () => {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  return (
    <div className="price-card">
      <div className="price-nav">
        <h2>$24,000 night</h2>
        <p>4 reviews</p>
      </div>

      <div className="calender-picker">
        <Datepicker value={value} onChange={handleValueChange} />
      </div>

      <div className="reserve-btn">
        <Button variant="outlined">Reserve</Button>
        <p>You won't be charged yet</p>
      </div>
    </div>
  );
};

export default PriceCard;
