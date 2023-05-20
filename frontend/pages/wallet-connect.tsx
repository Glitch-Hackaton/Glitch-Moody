import Image from "next/image";
import React from "react";
import { Button } from "antd";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { recordState } from "../state";

const WalletConnect = ({ wallet }: any) => {
  const router = useRouter();
  const isRecorded = useRecoilValue(recordState);

  const onWalletConnect = () => {
    wallet?.signIn();

    !isRecorded && router.push("/choose");
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        background: "#191D26",
      }}
    >
      <motion.div
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: -100, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Image src={"/logo/로고.png"} alt="logo" width={200} height={36} />
      </motion.div>
      <motion.div
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: 200, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Button
          onClick={onWalletConnect}
          style={{
            background: "#D0FF00",
            color: "#000",
            height: "60px",
            width: "90vw",
            borderRadius: "100px",
            fontSize: "1.25rem",
            fontWeight: 600,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "0px",
          }}
        >
          <Image
            src={"/icon/near-wallet-icon.png"}
            alt="icon"
            width={26}
            height={26}
            style={{ marginRight: "16px" }}
          />
          Connect Wallet
        </Button>
      </motion.div>
    </div>
  );
};

export default WalletConnect;
