import { message } from "antd";
import { Footer } from "antd/es/layout/layout";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { styled } from "styled-components";
import { useRecoilState } from "recoil";
import { recordState } from "../state";

const Choose = () => {
  const router = useRouter();
  const [selectedWeather, setSelectedWeather] = useState(true);
  const [selectedSimpleDiary, setSelectedSimpleDiary] = useState(false);
  const [selectedThanksDiary, setSelectedThanksDiary] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const [isRecorded, setIsRecorded] = useRecoilState(recordState);

  const onNextBtn = () => {
    if (!selectedWeather && !selectedSimpleDiary && !selectedThanksDiary) {
      messageApi.open({
        type: "warning",
        content: "Please select at least one",
        style: { color: "#000" },
      });
      return;
    }
    setIsRecorded(true);
    router.push("/freenoti");
  };
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
      <>{contextHolder}</>
      <p style={{ fontSize: "24px", fontWeight: 600, padding: "16px 8px" }}>
        Please select the type to record.
      </p>

      <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring" }}
        onClick={() => setSelectedWeather(!selectedWeather)}
        style={{
          background: selectedWeather ? "#F4C3FB" : "#333",
          width: "100%",
          height: "182px",
          borderRadius: "50px",
          padding: "32px 20px",
          overflow: "hidden",
          transition: "0.2s",
        }}
      >
        <p
          style={{
            color: selectedWeather ? "#000" : "#fff",
            fontSize: "36px",
            marginBottom: 0,
            transition: "0.2s",
          }}
        >
          weather
        </p>
        <Image
          src={"/icon/emoji/바람.png"}
          alt="weather"
          width={186}
          height={186}
          style={{
            filter: selectedWeather ? "grayscale(0%)" : "grayscale(100%)",
            transition: "0.2s",
          }}
        />
      </motion.div>

      <motion.div
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring" }}
        onClick={() => setSelectedSimpleDiary(!selectedSimpleDiary)}
        style={{
          background: selectedSimpleDiary ? "#3583F0" : "#333",
          width: "100%",
          height: "182px",
          borderRadius: "50px",
          padding: "32px 20px",
          overflow: "hidden",
          transition: "0.2s",
        }}
      >
        <p
          style={{
            color: selectedSimpleDiary ? "#000" : "#fff",
            fontSize: "36px",
            marginBottom: 0,
            transition: "0.2s",
          }}
        >
          simple diary
        </p>
        <Image
          src={"/icon/emoji/사랑.png"}
          alt="weather"
          width={186}
          height={186}
          style={{
            transform: "translateX(90%)",
            filter: selectedSimpleDiary ? "grayscale(0%)" : "grayscale(100%)",
            transition: "0.2s",
          }}
        />
      </motion.div>

      <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring" }}
        onClick={() => setSelectedThanksDiary(!selectedThanksDiary)}
        style={{
          background: selectedThanksDiary ? "#E65E2A" : "#333",
          width: "100%",
          height: "182px",
          borderRadius: "50px",
          padding: "32px 20px",
          overflow: "hidden",
          transition: "0.2s",
        }}
      >
        <p
          style={{
            color: selectedThanksDiary ? "#000" : "#fff",
            fontSize: "36px",
            marginBottom: 0,
            transition: "0.2s",
          }}
        >
          thanks diary
        </p>
        <Image
          src={"/icon/emoji/불안.png"}
          alt="weather"
          width={186}
          height={186}
          style={{
            filter: selectedThanksDiary ? "grayscale(0%)" : "grayscale(100%)",
            transition: "0.2s",
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
        }}
      >
        <span style={{ color: "#000", fontSize: "24px" }}>Next</span>
      </div>
    </div>
  );
};

export default Choose;
