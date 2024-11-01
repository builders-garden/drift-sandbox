"use client";

import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { config } from "@/lib/wagmi";
import { DriftProvider } from "@buildersgarden/drift";
import { WagmiProvider } from "wagmi";
import { lightTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { base } from "viem/chains";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <NextUIProvider>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider
            initialChain={base}
            theme={lightTheme({
              accentColor: "#0C0E00",
              accentColorForeground: "white",
              borderRadius: "medium",
            })}
          >
            <DriftProvider
              appId={process.env.NEXT_PUBLIC_DRIFT_APP_ID as string}
              appSecret={process.env.NEXT_PUBLIC_DRIFT_APP_SECRET as string}
              decentApiKey={process.env.NEXT_PUBLIC_DECENT_API_KEY as string}
              appAddress={"0x1358155a15930f89eBc787a34Eb4ccfd9720bC62"}
            >
              <main className="h-full">{children}</main>
            </DriftProvider>
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </NextUIProvider>
  );
}
