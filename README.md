
# DriftPay Sandbox

A Next.js-based sandbox environment for testing and configuring the DriftPay SDK. This application allows developers to experiment with different configurations of the DriftPay button and preview the implementation in real-time.

## Features

- Live configuration of DriftPay button parameters
- Real-time preview of button implementation
- Code snippet generation
- Multi-chain support
- Wallet integration with RainbowKit
- Customizable button styling

## Tech Stack

- Next.js 15.0.2
- React 19
- TypeScript
- TailwindCSS
- NextUI
- RainbowKit
- Wagmi
- Viem

## Prerequisites

- Node.js (Latest LTS version recommended)
- npm, yarn, or pnpm

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```plaintext
NEXT_PUBLIC_DRIFT_APP_ID=your_drift_app_id
NEXT_PUBLIC_DRIFT_APP_SECRET=your_drift_app_secret
NEXT_PUBLIC_DECENT_API_KEY=your_decent_api_key
```

## Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `/app` - Next.js app router pages and layouts
- `/components` - Reusable React components
- `/lib` - Utility functions and configuration
- `/public` - Static assets

## Key Components

### DriftPay Button

The main component that handles payments. Configuration options include:

- Amount
- Recipient address
- Destination token address
- Destination chain
- Custom styling
- Custom button text

### Supported Chains

- Base
- Ethereum
- Polygon
- Optimism
- Arbitrum
- Zora
- Degen

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Support

For support and documentation about the DriftPay SDK, visit:

- [Drift Documentation](https://builders-garden.notion.site/Drift-SDK-Documentation-120679ed099e80e3a31aeb1567e79d12?pvs=4)
- [Drift Website](https://drift.money)

---

For more detailed information about the implementation, refer to the source code and comments within the repository.
