import React from "react";
import { loadStdlib } from "@reach-sh/stdlib";
import { ALGO_MyAlgoConnect as MyAlgoConnect } from "@reach-sh/stdlib";
import ConnectButton from ".";
import { BodyText } from "../MyAlgoWallet.styles";
const reach = loadStdlib("ALGO");

reach.setWalletFallback(
  reach.walletFallback({
    providerEnv: "TestNet",
    MyAlgoConnect,
  })
);

const ConnectWalletButton = ({ connectWallet, accountAddress, accountBal }) => {
  return (
    <div>
      <ConnectButton connectWallet={connectWallet} />
      <BodyText>Account Address: {accountAddress} </BodyText>
      <BodyText>Account Balance: {accountBal}</BodyText>
    </div>
  );
};

export default ConnectWalletButton;
