import React from "react";

const Stats = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "70px",
          background: "#294059",
          borderRadius: "60px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <span>7 days</span>
        <span>1 month</span>
        <span>1 years</span>
      </div>
    </div>
  );
};

export default Stats;
