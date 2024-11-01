"use client";

import { Address } from "viem";
import MyCodeBlock from "./MyCodeBlock";

export default function ButtonCode({
  paymentDetails,
}: {
  paymentDetails: {
    amount: number;
    recipientAddress: Address;
    destinationTokenAddress: Address;
    destinationTokenChainId: number;
    buttonStyle?: string;
    buttonText?: string;
  };
}) {
  const snippet = `<DriftPay
    walletClient={walletClient} // user's connected wallet
    paymentDetails={{
        amount: ${paymentDetails.amount},
        destinationTokenAddress: "${paymentDetails.destinationTokenAddress}",
        destinationTokenChainId: ${paymentDetails.destinationTokenChainId},
        recipientAddress: "${paymentDetails.recipientAddress}"
    }}${
      paymentDetails.buttonStyle
        ? `\n    className="${paymentDetails.buttonStyle}"`
        : ""
    }${
    paymentDetails.buttonText
      ? `\n    buttonText="${paymentDetails.buttonText}"`
      : ""
  }
    onSuccess={(txHash: string, txExplorerUrl: string) => {
        const params = new URLSearchParams({
            txHash,
            txExplorerUrl,
            recipient: "${paymentDetails.recipientAddress}",
            sender: walletClient.account.address
        });
        console.log("onSuccess", params.toString());
    }}
/>`;

  return <MyCodeBlock code={snippet} language="tsx" />;
}
