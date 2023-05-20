import { Card, Col, List, Row, Typography } from "antd";
import moment from "moment";
import Image from "next/image";
import React from "react";

const EmotionCard = ({ emotion }: { emotion: string }) => {
  return (
    <p
      style={{
        background: "#FBEDFD",
        color: "#AF10C7",
        padding: "4px 8px",
        borderRadius: "4px",
      }}
    >
      {emotion}
    </p>
  );
};

const DiaryCard = ({ value }: any) => {
  return (
    <Row style={{ color: "#fff", minHeight: "170px" }} justify={"center"}>
      <Col
        span={8}
        style={{
          background: "#294059",
          borderRadius: "50px",
          padding: "25px 16px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <span style={{ fontSize: "1.25rem" }}>
          <strong>{moment(value?.date).format("MMMM DD")}</strong>
        </span>
        <div>
          {value?.emotion === "love" ? (
            <Image
              src={"/icon/emoji/사랑.png"}
              alt="emoji"
              width={100}
              height={100}
            />
          ) : value?.emotion === "anger" ? (
            <Image
              src={"/icon/emoji/분노.png"}
              alt="emoji"
              width={100}
              height={100}
            />
          ) : value?.emotion === "sad" ? (
            <Image
              src={"/icon/emoji/슬픔.png"}
              alt="emoji"
              width={100}
              height={100}
            />
          ) : value?.emotion === "unrest" ? (
            <Image
              src={"/icon/emoji/불안.png"}
              alt="emoji"
              width={100}
              height={100}
            />
          ) : value?.emotion === "pain" ? (
            <Image
              src={"/icon/emoji/아픔.png"}
              alt="emoji"
              width={100}
              height={100}
            />
          ) : value?.emotion === "shame" ? (
            <Image
              src={"/icon/emoji/창피.png"}
              alt="emoji"
              width={100}
              height={100}
            />
          ) : value?.emotion === "happy" ? (
            <Image
              src={"/icon/emoji/기쁨.png"}
              alt="emoji"
              width={100}
              height={100}
            />
          ) : value?.emotion === "wish" ? (
            <Image
              src={"/icon/emoji/바람.png"}
              alt="emoji"
              width={100}
              height={100}
            />
          ) : (
            ""
          )}
        </div>
        <EmotionCard emotion={value?.emotionDetail} />
      </Col>
      <Col
        span={16}
        style={{
          background: "#294059",
          borderRadius: "50px",
          padding: "25px 20px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ margin: "0px" }}>
            <strong>Diary</strong>
          </p>
          {value?.weather === "sunny" ? (
            <Image
              src={"/icon/weather/Sunny.png"}
              alt="weather icon"
              width={26}
              height={26}
            />
          ) : value?.weather === "partly" ? (
            <Image
              src={"/icon/weather/Partly Cloudy.png"}
              alt="weather icon"
              width={26}
              height={26}
            />
          ) : value?.weather === "cloudy" ? (
            <Image
              src={"/icon/weather/Cloudy.png"}
              alt="weather icon"
              width={26}
              height={26}
            />
          ) : value?.weather === "rainy" ? (
            <Image
              src={"/icon/weather/Rainy.png"}
              alt="weather icon"
              width={26}
              height={26}
            />
          ) : value?.weather === "snowy" ? (
            <Image
              src={"/icon/weather/Snowy.png"}
              alt="weather icon"
              width={26}
              height={26}
            />
          ) : (
            ""
          )}
        </div>
        <p style={{ margin: "0px" }}>{value?.diary}</p>
        <br />
        <p style={{ margin: "0px" }}>
          <strong>Thanks</strong>
        </p>
        <ul style={{ paddingLeft: "10px" }}>
          {value?.thanksDaiary.map((el: string, i: number) => (
            <li style={{ margin: "0px" }} key={i}>
              {el}
            </li>
          ))}
        </ul>
      </Col>
    </Row>
  );
};

export default DiaryCard;
