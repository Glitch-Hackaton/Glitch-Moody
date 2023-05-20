import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { walletState } from "../state";

const Splash = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#191D26",
      }}
    >
      <Image src={"/logo/로고.png"} alt="logo" width={200} height={36} />
    </div>
  );
};

export default Splash;
