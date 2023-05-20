import { atom } from "recoil";
import { v1 } from "uuid";

export const diaryState = atom({
  key: `diaryState/${v1()}`,
  default: [
    {
      date: "2023-05-01",
      weather: "rainy",
      emotion: "wish",
      emotionDetail: "wish",
      diary: "wish day",
      thanksDaiary: ["wish", "good2", "wish"],
    },
    {
      date: "2023-05-02",
      weather: "sunny",
      emotion: "happy",
      emotionDetail: "happy2",
      diary: "haapy day",
      thanksDaiary: ["good1", "good2", "good3"],
    },
    {
      date: "2023-05-03",
      weather: "snowy",
      emotion: "sad",
      emotionDetail: "sad",
      diary: "sad day",
      thanksDaiary: ["sad", "sadsad", "sadsadsad"],
    },
    {
      date: "2023-05-04",
      weather: "partly",
      emotion: "unrest",
      emotionDetail: "unrest2",
      diary: "haapy day",
      thanksDaiary: ["unrest", "unrest", "unrestunrestunrest"],
    },
    {
      date: "2023-05-10",
      weather: "cloudy",
      emotion: "shame",
      emotionDetail: "shame",
      diary: "shame day",
      thanksDaiary: ["shame", "good2", "good3"],
    },
    {
      date: "2023-05-12",
      weather: "sunny",
      emotion: "pain",
      emotionDetail: "pain2",
      diary: "pain day",
      thanksDaiary: ["pain", "pain", "good3"],
    },
    {
      date: "2023-05-14",
      weather: "rainy",
      emotion: "anger",
      emotionDetail: "anger",
      diary: "haapy day",
      thanksDaiary: ["anger", "anger", "good3"],
    },
    {
      date: "2023-05-18",
      weather: "partly",
      emotion: "anger",
      emotionDetail: "anger",
      diary: "haapy day",
      thanksDaiary: ["good1", "anger", "good3"],
    },
  ],
});

export const walletState = atom({
  key: `walletState/${v1()}`,
  default: null,
});

export const recordState = atom({
  key: `recordState/${v1()}`,
  default: false,
});
