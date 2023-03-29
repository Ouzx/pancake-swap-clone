import React from "react";
import BuyCake from "./Components/BuyCake/BuyCake";
import ConnectWallet from "./Components/Connect Wallet/ConnectWallet";
import Footer from "./Components/Footer/Footer";
const index = () => {
  return (
    <>
      <BuyCake />
      <ConnectWallet />
      <Footer />
    </>
  );
};

export default index;
