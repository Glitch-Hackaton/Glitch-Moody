import AntdConfigProvider from "../components/antdConfigProvider";
import RootLayout from "../components/rootLayout";
import type { AppProps } from "next/app";
import "../styles/react-calendar.css";
import { RecoilRoot } from "recoil";
import { Wallet } from "../components/near-wallet";
import { useEffect, useState } from "react";
import Splash from "./splash";
import { useRouter } from "next/router";
import WalletConnect from "./wallet-connect";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [sp, setSp] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (!sp) {
      setTimeout(() => {
        setSp(true);
      }, 2000);
    }
  }, []);

  // const CONTRACT_ADDRESS = process.env.CONTRACT_NAME;
  const CONTRACT_ADDRESS = "dev-1684561257321-37228500438771";

  // When creating the wallet you can optionally ask to create an access key
  // Having the key enables to call non-payable methods without interrupting the user to sign
  const wallet = new Wallet({ createAccessKeyFor: CONTRACT_ADDRESS as any });

  const getSigned = async () => {
    let isSignedIn = await wallet?.startUp();
    setIsSignedIn(isSignedIn);
  };

  useEffect(() => {
    getSigned();
  }, [wallet]);

  return (
    <RecoilRoot>
      <AntdConfigProvider>
        {/* <WalletProvider /> */}

        {sp ? (
          isSignedIn ? (
            <RootLayout>
              <Component {...pageProps} />
            </RootLayout>
          ) : (
            <WalletConnect wallet={wallet} />
          )
        ) : (
          <Splash />
        )}
      </AntdConfigProvider>
    </RecoilRoot>
  );
}
