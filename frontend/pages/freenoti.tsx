import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { motion } from "framer-motion";

const Freenoti = () => {
  const router = useRouter();
  const onNextBtn = () => {
    router.push("/");
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        color: "#fff",
      }}
    >
      <motion.span
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "linear" }}
        style={{
          padding: "16px",
          fontSize: "36px",
          fontWeight: 600,
          zIndex: 1,
        }}
      >
        You can use it
        <br /> for free
        <br /> for one week
      </motion.span>
      <motion.span
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6, ease: "linear" }}
        style={{ padding: "16px", zIndex: 1 }}
      >
        Try it free for one week. Unlimited weather and weather gratitude
        journals!
      </motion.span>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6, ease: "linear" }}
        style={{ padding: "16px", zIndex: 1, overflow: "hidden" }}
      >
        <Image
          src={"/icon/shape.png"}
          alt=""
          fill
          style={{
            objectFit: "contain",
            bottom: 0,
            position: "absolute",
            transform: "translateY(10%)",
          }}
        />
      </motion.div>
      <div
        onClick={() => onNextBtn()}
        style={{
          height: "108px",
          width: "100%",
          bottom: 0,
          alignItems: "center",
          background: "#D0FF00",
          borderRadius: "50px 50px 0px 0px",
          display: "flex",
          justifyContent: "space-around",
          position: "absolute",
          zIndex: 10,
        }}
      >
        <span style={{ color: "#000", fontSize: "24px" }}>Next</span>
      </div>
    </div>
  );
};

export default Freenoti;
