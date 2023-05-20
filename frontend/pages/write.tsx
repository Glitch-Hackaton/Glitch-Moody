import { CloudOutlined } from "@ant-design/icons";
import { Card, Input, Tabs } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import { styled } from "styled-components";
import { emotions, emotionsMapping } from "../const";

const { TextArea } = Input;

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

const Write = () => {
  const [selectedWeather, setSelectedWeather] = useState("");
  const [selectedEmotion, setSelectedEmotion] = useState("");
  const [selectedEmotionDetail, setSelectedEmotionDetail] = useState("");

  const onChange = (key: string) => {
    console.log(key);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: "4px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          height: "80px",
          background: "#191D26",
        }}
      >
        <WeatherCard
          onClick={() => setSelectedWeather("Sunny")}
          className={selectedWeather === "Sunny" ? "selected" : ""}
        >
          <Image
            src={"/icon/weather/Sunny.png"}
            alt="Sunny"
            height={26}
            width={26}
          />
          <p>Sunny</p>
        </WeatherCard>
        <WeatherCard
          onClick={() => setSelectedWeather("Cloudy")}
          className={selectedWeather === "Cloudy" ? "selected" : ""}
        >
          <Image
            src={"/icon/weather/Cloudy.png"}
            alt="Cloudy"
            height={26}
            width={26}
          />
          <p>Sunny</p>
        </WeatherCard>
        <WeatherCard
          onClick={() => setSelectedWeather("Partly")}
          className={selectedWeather === "Partly" ? "selected" : ""}
        >
          <Image
            src={"/icon/weather/Partly Cloudy.png"}
            alt="Partly Cloudy"
            height={26}
            width={26}
          />
          <p>Partly</p>
        </WeatherCard>
        <WeatherCard
          onClick={() => setSelectedWeather("Rainy")}
          className={selectedWeather === "Rainy" ? "selected" : ""}
        >
          <Image
            src={"/icon/weather/Rainy.png"}
            alt="Rainy"
            height={26}
            width={26}
          />
          <p>Rainy</p>
        </WeatherCard>
        <WeatherCard
          onClick={() => setSelectedWeather("Snowy")}
          className={selectedWeather === "Snowy" ? "selected" : ""}
        >
          <Image
            src={"/icon/weather/Snowy.png"}
            alt="Snowy"
            height={26}
            width={26}
          />
          <p>Snowy</p>
        </WeatherCard>
      </div>
      <div>
        <div
          style={{
            background: "#294059",
            borderRadius: "60px",
            width: "100%",
            padding: "32px 20px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "24px",
              color: "#fff",
              fontWeight: 600,
              marginBottom: "32px",
            }}
          >
            How do you feel?
          </p>
          <div
            style={{
              display: "flex",
              gap: "4px",
              overflowX: "scroll",
              touchAction: "auto",
            }}
          >
            {emotionsMapping.map((emotion) => {
              return (
                <div
                  key={emotion.eng}
                  onClick={() => {
                    setSelectedEmotion(emotion.eng);
                    setSelectedEmotionDetail("");
                  }}
                  style={{
                    minWidth: "130px",
                    height: "170px",
                    // background:
                    //   selectedEmotion === emotion.eng
                    //     ? `${emotion.color}`
                    //     : "#798397",
                    border:
                      selectedEmotion === emotion.eng
                        ? "6px solid #D0FF00"
                        : "0px",
                    background: `${emotion.color}`,
                    borderRadius: "50px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "4px",
                  }}
                >
                  <Image
                    src={`/icon/emoji/${emotion.kor}.png`}
                    alt={`${emotion.eng}`}
                    width={83}
                    height={83}
                  />
                  <p>
                    <strong
                      style={{
                        color: "#000",
                      }}
                    >
                      {emotion.eng}
                    </strong>
                  </p>
                </div>
              );
            })}
          </div>

          {Object.entries(emotions).map(([category, words]) => {
            return (
              <div key={category}>
                {category === selectedEmotion && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "wrap",
                      width: "100%",
                      justifyContent: "center",
                    }}
                  >
                    {words.map((word, index) => (
                      <div
                        key={index}
                        onClick={() => setSelectedEmotionDetail(word)}
                        style={{
                          margin: "1px",
                          width: "84px",
                          height: "84px",
                          background:
                            selectedEmotionDetail === word
                              ? getRandomColor()
                              : "#798397",
                          borderRadius: "30px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "8px",
                          fontSize: "0.8rem",
                          wordBreak: "break-all",
                          border:
                            selectedEmotionDetail === word
                              ? "6px solid #D0FF00"
                              : "0px",
                          color:
                            selectedEmotionDetail === word ? "#000" : "#ddd",
                        }}
                      >
                        <p>
                          <strong>{word}</strong>
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div
        style={{
          background: "#294059",
          color: "#fff",
          borderRadius: "50px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "34px 24px",
        }}
      >
        <Image
          src={"/icon/한줄일기_아이콘.png"}
          alt=""
          width={38}
          height={38}
        ></Image>
        <Input
          maxLength={100}
          bordered={false}
          style={{
            color: "#fff",
            borderBottom: "1px solid #52718d",
            borderRadius: 0,
          }}
        />
      </div>
      <div
        style={{
          background: "#294059",
          color: "#fff",
          borderRadius: "50px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "34px 24px",
          marginBottom: "138px",
        }}
      >
        <Image src={"/icon/감사일기.png"} alt="" width={38} height={38}></Image>
        <Input
          maxLength={100}
          bordered={false}
          style={{
            color: "#fff",
            borderBottom: "1px solid #52718d",
            borderRadius: 0,
          }}
          prefix="1."
        />
        <Input
          maxLength={100}
          bordered={false}
          style={{
            color: "#fff",
            borderBottom: "1px solid #52718d",
            borderRadius: 0,
          }}
          prefix="2."
        />
        <Input
          maxLength={100}
          bordered={false}
          style={{
            color: "#fff",
            borderBottom: "1px solid #52718d",
            borderRadius: 0,
          }}
          prefix="3."
        />
      </div>
      <div
        onClick={() => {}}
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
        <span style={{ color: "#000", fontSize: "24px" }}>Complate</span>
      </div>
    </div>
  );
};

export default Write;

const WeatherCard = styled.div`
  text-align: "center";
  color: #fff;
  width: 100%;
  height: 100%;
  aspect-ratio: "1 / 1";
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-weight: 600;
  &.selected {
    transition: 0.6s;
    background-color: #d0ff00;
    color: #000;
  }
`;
