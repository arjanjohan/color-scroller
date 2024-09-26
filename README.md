# Color Scroller

<div style="text-align: center;">
  <img src="packages/nextjs/public/logo.png" alt="logo" style="max-width: 300px;">
</div>

## Overview
Color Scroller is a simple dApp that allows users to scroll through a variety of colors. The initial color or image is generated based on the user's address. If the user does not like their color or image, they can scroll through the colors (or images) by interacting with the smart contract on Scroll!

## Features
- **Color Scrolling**: Users can connect their wallet, and the background color changes based on their address.
- **Background Scrolling**: Users can connect their wallet, and the background image changes based on their address.
- **Smart Contract Integration**: If the user does not like his default color or image, they can use the smart contract on the Scroll Sepolia network to change the color or image.

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

## Configuration
The project uses Alchemy for blockchain interactions. Ensure that your `hardhat.config.ts` and `.env` file is properly configured with your Alchemy API key.

## Links
* [Vercel deployment](https://color-scroller.vercel.app/)
* [Demo video](https://youtu.be/W1DyHRFzrQo)
* [Alchemy configured in hardhat.config.ts](packages/hardhat/hardhat.config.ts#L49)
* [Deployed BumpContract.sol on Scroll Sepolia](https://sepolia.scrollscan.com/address/0xb4e9A5BC64DC07f890367F72941403EEd7faDCbB#code)

## Team
[arjanjohan](https://x.com/arjanjohan)