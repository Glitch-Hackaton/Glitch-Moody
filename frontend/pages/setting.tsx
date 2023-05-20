import { Button } from "antd";
import React from "react";

const Setting = ({ wallet, contract }: any) => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", color: "#798397" }}
    >
      <p
        onClick={() => {
          wallet.signOut();
        }}
      >
        Sign Out
      </p>

      <p>{wallet.accountId}</p>
      {/* <button onClick={() => addRecord()}>add</button> */}
    </div>
  );
};

export default Setting;
