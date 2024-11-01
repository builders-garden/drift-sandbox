"use client";

import {
  Button,
  Image,
  Input,
  Link,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useState } from "react";
import { DriftPay } from "@buildersgarden/drift";
import {
  arbitrum,
  base,
  degen,
  mainnet,
  optimism,
  polygon,
  zora,
} from "viem/chains";
import { useWalletClient } from "wagmi";
import { Address } from "viem";
import ButtonCode from "@/components/ButtonCode";
import * as SolarIcons from "solar-icon-set";

export default function Home() {
  const { data: walletClient } = useWalletClient();

  const initialPaymentDetails = {
    amount: 1,
    recipientAddress: "0x1358155a15930f89eBc787a34Eb4ccfd9720bC62" as Address,
    destinationTokenAddress:
      "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913" as Address, // USDC on Base
    destinationTokenChainId: base.id,
  };

  const [paymentDetails, setPaymentDetails] = useState<{
    amount: number;
    recipientAddress: Address;
    destinationTokenAddress: Address;
    destinationTokenChainId: number;
    buttonStyle?: string;
    buttonText?: string;
  }>(initialPaymentDetails);

  const chains = [
    { id: base.id, name: "Base" },
    { id: mainnet.id, name: "Ethereum" },
    { id: polygon.id, name: "Polygon" },
    {
      id: optimism.id,
      name: "Optimism",
    },
    {
      id: arbitrum.id,
      name: "Arbitrum",
    },
    {
      id: zora.id,
      name: "Zora",
    },
    {
      id: degen.id,
      name: "Degen",
    },
  ];

  return (
    <main className="h-screen w-full flex flex-col overflow-hidden">
      {/* Header Section */}
      <div className="w-full p-8 bg-white flex flex-col items-center gap-4">
        <div className="text-center">
          <div className="text-4xl font-bold">DriftPay Sandbox</div>
          <div className="text-sm text-gray-500">
            Configure and test the DriftPay button with different parameters
          </div>
        </div>
        <div className="flex flex-row justify-center gap-2">
          <Link href="https://drift.money" target="_blank">
            <Button
              size="sm"
              radius="full"
              color="primary"
              variant="ghost"
              endContent={<SolarIcons.SquareTopDown size={14} />}
            >
              Drift
            </Button>
          </Link>
          <Link
            href="https://builders-garden.notion.site/Drift-SDK-Documentation-120679ed099e80e3a31aeb1567e79d12?pvs=4"
            target="_blank"
          >
            <Button
              size="sm"
              radius="full"
              color="primary"
              variant="ghost"
              endContent={<SolarIcons.Book2 size={14} />}
            >
              Docs
            </Button>
          </Link>
        </div>
        <ConnectButton />
      </div>

      {/* Main Content - Two Columns */}
      <div className="flex-1 flex flex-col md:flex-row bg-gray-50 relative overflow-auto">
        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2 p-16 flex">
          <div className="flex flex-col gap-8 mx-auto w-full bg-white rounded-lg p-8 shadow-[0_8px_40px_rgb(0,0,0,0.08)]">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold">Configuration</div>
              <Button
                onClick={() => setPaymentDetails(initialPaymentDetails)}
                color="default"
                variant="light"
                radius="sm"
              >
                Reset
              </Button>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-lg font-bold">Payment Details</div>
              <Input
                type="number"
                label="Amount"
                value={paymentDetails.amount.toString()}
                onChange={(e) =>
                  setPaymentDetails({
                    ...paymentDetails,
                    amount: parseFloat(e.target.value),
                  })
                }
              />
              <Input
                type="text"
                label="Recipient Address"
                placeholder="0x..."
                value={paymentDetails.recipientAddress}
                onChange={(e) =>
                  setPaymentDetails({
                    ...paymentDetails,
                    recipientAddress: e.target.value as `0x${string}`,
                  })
                }
              />
              <Input
                type="text"
                label="Destination Token Address"
                placeholder="0x..."
                value={paymentDetails.destinationTokenAddress}
                onChange={(e) =>
                  setPaymentDetails({
                    ...paymentDetails,
                    destinationTokenAddress: e.target.value as `0x${string}`,
                  })
                }
              />
              <Select
                label="Destination Chain"
                selectedKeys={[
                  paymentDetails.destinationTokenChainId.toString(),
                ]}
                onChange={(e) =>
                  setPaymentDetails({
                    ...paymentDetails,
                    destinationTokenChainId: parseInt(e.target.value),
                  })
                }
              >
                {chains.map((chain) => (
                  <SelectItem key={chain.id} value={chain.id}>
                    {chain.name}
                  </SelectItem>
                ))}
              </Select>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-lg font-bold">Styling</div>
              <Input
                type="text"
                label="Button Text"
                value={paymentDetails.buttonText}
                onChange={(e) =>
                  setPaymentDetails({
                    ...paymentDetails,
                    buttonText: e.target.value,
                  })
                }
              />

              <Input
                type="text"
                label="Button Style (Tailwind Classes)"
                value={paymentDetails.buttonStyle}
                onChange={(e) =>
                  setPaymentDetails({
                    ...paymentDetails,
                    buttonStyle: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-1/2 p-16 flex flex-col gap-8">
          <div className="flex flex-col gap-8 mx-auto w-full bg-white rounded-lg p-8 shadow-[0_8px_40px_rgb(0,0,0,0.08)]">
            <div className="flex flex-col gap-2">
              <DriftPay
                walletClient={walletClient as never}
                paymentDetails={{
                  amount: paymentDetails.amount,
                  destinationTokenAddress:
                    paymentDetails.destinationTokenAddress,
                  destinationTokenChainId:
                    paymentDetails.destinationTokenChainId,
                  recipientAddress:
                    paymentDetails.recipientAddress ||
                    (walletClient?.account.address as `0x${string}`),
                }}
                className={
                  paymentDetails.buttonStyle &&
                  paymentDetails.buttonStyle.length > 0
                    ? paymentDetails.buttonStyle
                    : undefined
                }
                buttonText={
                  paymentDetails.buttonText &&
                  paymentDetails.buttonText.length > 0
                    ? paymentDetails.buttonText
                    : undefined
                }
                onSuccess={(txHash: string) => {
                  const params = new URLSearchParams({
                    txHash,
                    txExplorerUrl: `https://basescan.org/tx/${txHash}`,
                    recipient:
                      paymentDetails.recipientAddress ||
                      walletClient?.account.address,
                  });
                  console.log("onSuccess", params.toString());
                }}
              />
              {!walletClient && (
                <div className="text-gray-800 text-sm text-center">
                  Connect your wallet to test first!
                </div>
              )}
            </div>
            <ButtonCode paymentDetails={paymentDetails} />
          </div>
        </div>
      </div>

      {/* Footer - Positioned absolutely and centered */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 py-4">
        <Link href="https://drift.money" target="_blank">
          <div className="text-center text-sm text-gray-500 flex flex-row items-center justify-center gap-1">
            Powered by
            <Image src="/logo.svg" alt="Drift" width={40} height={20} />
          </div>
        </Link>
      </div>
    </main>
  );
}
