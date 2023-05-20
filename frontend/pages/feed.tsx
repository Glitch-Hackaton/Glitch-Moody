import React from "react";
import DiaryCard from "../components/diaryCard";
import { useRecoilValue } from "recoil";
import { diaryState } from "../state";

const Feed = () => {
  const diaryData = useRecoilValue(diaryState);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        rowGap: "4px",
      }}
    >
      {diaryData
        .map((value, i) => {
          return <DiaryCard key={i} value={value} />;
        })
        .sort()
        .reverse()}
    </div>
  );
};

export default Feed;
