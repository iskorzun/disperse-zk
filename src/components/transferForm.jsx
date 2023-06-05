import React, { useState } from "react";
import { parseText } from "../utils/index";

const TransferForm = () => {
  const [addresses, setAddresses] = useState("");

  const handleChange = (event) => {
    setAddresses(event.target.value);
  };

  const handleSubmit = () => {
    const lines = addresses.split("\n");
    const parsedAddresses = lines.map((line) => {
      const [address, amount] = line.split(" ");
      return { address, amount: parseFloat(amount) };
    });

    console.log(parsedAddresses);
  };

  return (
    <div>
      <textarea
        rows="10"
        cols="50"
        style={{
          width: "50%",
          height: "100%",
          background: "aquamarine",
          color: "black",
        }}
        value={addresses}
        onChange={handleChange}
        placeholder="0x0061e7958aA1f6bbDA7fFdB4D079fa2d413263dd 0.1 &#10;0x8E5d1Ef824E54648cE19f7f0CC0853DF345c91cF 0.2"
      ></textarea>
      <button onClick={handleSubmit}>Confirm</button>
    </div>
  );
};

export default TransferForm;
