import React from "react";
import Romania from "@react-map/romania";

export const RomaniaMap: React.FC = () => {
  return (
    <div style={{ display: "flex" }}>
      <Romania type="select-single" size={100000} mapColor="green" />
    </div>
  );
};
