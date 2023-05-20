import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { walletState } from "../state";

const WalletProvider = ({ wallet }: any) => {
  const [_, setWallet] = useRecoilState(walletState);

  useEffect(() => {
    setWallet(wallet);
    console.log("wallet");
    console.log(wallet);
  }, [wallet]);

  return <></>;
};

export default WalletProvider;
