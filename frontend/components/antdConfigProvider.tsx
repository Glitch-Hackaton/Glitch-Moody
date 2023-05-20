import { ConfigProvider } from "antd";
import React from "react";
import "antd/dist/reset.css";

const AntdConfigProvider = ({ children }: any) => (
  <ConfigProvider
    theme={{
      token: {
        colorBgLayout: "#191D26",
        colorPrimary: "#d0ff00",
        colorText: "#fff",
      },
    }}
  >
    {children}
  </ConfigProvider>
);

export default AntdConfigProvider;
