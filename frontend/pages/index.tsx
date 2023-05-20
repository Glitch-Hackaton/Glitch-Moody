import moment, { now } from "moment";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { SmileOutlined, StarFilled, StarOutlined } from "@ant-design/icons";
import { Card, Carousel, message } from "antd";
import DiaryCard from "../components/diaryCard";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useRecoilState, useRecoilValue } from "recoil";
import { diaryState, recordState } from "../state";

const contentStyle: React.CSSProperties = {
  height: "60px",
  lineHeight: "60px",
  textAlign: "center",
  background: "#D0FF00",
  borderRadius: "100px",
  margin: "0px",
  color: "#000",
};

export default function Home({ wallet, contract }: any) {
  const router = useRouter();
  const [messageApi, contextHolder] = message.useMessage();
  const [isEntry, setIsEntry] = useState(true);
  const [value, setValue] = useState<any>();
  const [isFuture, setIsFuture] = useState(false);
  const [selectedDay, setSelectedDay] = useState<any>();
  const diaryData = useRecoilValue(diaryState);
  const isRecorded = useRecoilValue(recordState);
  const [RecordResult, setResult] = useState([]);

  const today = new Date();

  const getRecordedData = async () => {
    const accountId = wallet.accountId || "glitchtest.testnet";
    const startDate = moment().startOf("month").unix();
    const endDate = moment().endOf("month").unix();
    try {
      const result = await contract.getRecode(accountId, startDate, endDate);

      setResult(result);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    !isRecorded && router.push("/choose");
  }, []);

  useEffect(() => {
    if (contract && wallet) {
      getRecordedData();
    }
  }, [contract, wallet]);

  getRecordedData();

  const onChange = (date: any) => {
    if (today < date) {
      setIsFuture(true);
      return;
    }
    setValue(date);
    setIsFuture(false);
    setIsEntry(false);
    const tile = diaryData.find(
      (x: any) =>
        // moment.unix(Number(x[0])).format("YYYY-MM-DD") ===
        // moment(date).format("YYYY-MM-DD")

        x.date === moment(date).format("YYYY-MM-DD")
    );
    if (!tile) {
      router.push({ pathname: "/write", query: { date: String(date) } });
    } else {
      setSelectedDay(tile);
    }
  };

  useEffect(() => {
    if (isFuture) {
      messageApi.open({
        type: "warning",
        content: "You can't record on a future date",
        style: { color: "#000" },
      });
    }
  }, [isFuture]);

  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: "2px" }}>
      <Carousel autoplay dots={false}>
        <div>
          <h3 style={contentStyle}>👯‍♂️ Join the refer-a-friend event!</h3>
        </div>
        <div>
          <h3 style={contentStyle}>👯‍♂️ Join the refer-a-friend event!</h3>
        </div>
      </Carousel>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, ease: "linear" }}
        style={{ zIndex: 1 }}
      >
        <Calendar
          onChange={onChange}
          value={value}
          locale={"en-US"}
          showNeighboringMonth={false}
          navigationLabel={({ date }) => (
            <div style={{ fontSize: "1.5rem" }}>
              {moment(date).format("MMMM")}
            </div>
          )}
          formatShortWeekday={(locale, date) =>
            moment(date).format("dd").substring(0, 1)
          }
          tileClassName={({ date, view }) => {
            const tile = diaryData.find(
              (el: any) => el.date === moment(date).format("YYYY-MM-DD")
            );

            if (tile) {
              if (tile.emotion === "love") {
                return "love";
              } else if (tile.emotion === "anger") {
                return "anger";
              } else if (tile.emotion === "sad") {
                return "sad";
              } else if (tile.emotion === "unrest") {
                return "unrest";
              } else if (tile.emotion === "pain") {
                return "pain";
              } else if (tile.emotion === "shame") {
                return "shame";
              } else if (tile.emotion === "happy") {
                return "happy";
              } else if (tile.emotion === "wish") {
                return "wish";
              }
            }

            return "";
          }}
        />
      </motion.div>
      {isEntry || isFuture ? (
        <>{contextHolder}</>
      ) : (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, ease: "linear" }}
          />
          <DiaryCard value={selectedDay} />
          <motion.div />
        </>
      )}
    </div>
  );
}
