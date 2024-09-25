# Color Scroller

<div style="text-align: center;">
  <img src="packages/nextjs/public/logo.png" alt="logo" style="max-width: 400px;">
</div>

## Overview
Color Scroller is a web application that allows users to scroll through a variety of colors. The project is built using Next.js for the frontend and Hardhat for smart contract development.

## Features
- **Color Scrolling**: Users can connect their wallet, and the background color changes based on their address.
- **Smart Contract Integration**: If the user does not like his default color, they can use the smart contract on the Scroll Sepolia network to change the color. 

## Installation
To get started with the project, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/color-scroller.git
    cd color-scroller
    ```

2. **Install dependencies**:
    ```bash
    yarn install
    ```

3. **Run the development server**:
    ```bash
    npm start
    ```

4. **Open your browser**:
    Navigate to `http://localhost:3000` to see the application in action.

## Smart Contract Deployment
The smart contract for this project is deployed on the Scroll Sepolia network. You can find the deployed contract at the following address:
* [Deployed BumpContract.sol on Scroll Sepolia](https://sepolia.scrollscan.com/address/0xb4e9A5BC64DC07f890367F72941403EEd7faDCbB#code)

## Configuration
The project uses Alchemy for blockchain interactions. Ensure that your `hardhat.config.ts` and `.env` file is properly configured with your Alchemy API key.

## Links
* [Vercel deployment](https://color-scroller.vercel.app/)
* [Alchemy configured in hardhat.config.ts](packages/hardhat/hardhat.config.ts)
* [Deployed BumpContract.sol on Scroll Sepolia](https://sepolia.scrollscan.com/address/0xb4e9A5BC64DC07f890367F72941403EEd7faDCbB#code)

## Team
[arjanjohan](https://x.com/arjanjohan)