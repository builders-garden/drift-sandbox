import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { base, mainnet, optimism, polygon, arbitrum } from "viem/chains";

export const config = getDefaultConfig({
  appName: "Drift Widget Playground",
  projectId: "YOUR_PROJECT_ID",
  chains: [base, mainnet, optimism, polygon, arbitrum],
  ssr: true, // If your dApp uses server side rendering (SSR)
});
