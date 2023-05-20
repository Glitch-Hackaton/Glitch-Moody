import { LeftOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, Col, Layout, Menu, Row } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { walletState } from "../state";

const { Header, Content, Footer } = Layout;

const menuItem = [
  {
    label: "HOME",
    src: "/icon/gnb/gnb-home.png",
    activeSrc: "/icon/gnb/gnb-home-active.png",
    key: "/",
  },
  {
    label: "FEED",
    src: "/icon/gnb/gnb-collect.png",
    activeSrc: "/icon/gnb/gnb-collect-active.png",
    key: "/feed",
  },
  {
    label: "STATS",
    src: "/icon/gnb/gnb-statistics.png",
    activeSrc: "/icon/gnb/gnb-statistics-active.png",
    key: "/stats",
  },
  {
    label: "SETTING",
    src: "/icon/gnb/gnb-mypage.png",
    activeSrc: "/icon/gnb/gnb-mypage-active.png",
    key: "/setting",
  },
];

const RootLayout = ({ children }: any) => {
  const router = useRouter();
  // const wallet = useRecoilValue<any>(walletState);

  const handleMenuClick = (key: string) => {
    router.push(key);
  };

  return (
    <Row style={{ display: "flex", justifyContent: "center" }}>
      <Col xs={24} xl={6}>
        <Layout className="layout" style={{ height: "100vh" }}>
          <Header style={{ background: "#191D26", padding: "0px 8px" }}>
            {/* <LeftOutlined
              style={{ color: '#fff' }}
              onClick={() => history.back()}
            /> */}
            <Image src={"/logo/로고.png"} alt="logo" width={130} height={25} />
            {/* <Button style={{ color: "#000" }} onClick={() => wallet.signOut()}>
              {wallet.accountId}
            </Button> */}
          </Header>
          <Content style={{ overflow: "scroll", height: "100%" }}>
            {children}
          </Content>
          {router.pathname !== "/choose" &&
            router.pathname !== "/freenoti" &&
            router.pathname !== "/write" && (
              <Footer style={{ padding: "0px" }}>
                <div
                  style={{
                    height: "108px",
                    alignItems: "center",
                    background: "#2b3241",
                    borderRadius: "50px 50px 0px 0px",
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  {menuItem.map((el) => {
                    return (
                      <div key={el.key} onClick={() => handleMenuClick(el.key)}>
                        {router.pathname === el.key ? (
                          <Image
                            src={el.activeSrc}
                            alt={el.label}
                            width={24}
                            height={24}
                          />
                        ) : (
                          <Image
                            src={el.src}
                            alt={el.label}
                            width={24}
                            height={24}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </Footer>
            )}
        </Layout>
      </Col>
    </Row>
  );
};

export default RootLayout;
