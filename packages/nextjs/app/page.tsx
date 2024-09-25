"use client";

import Image from "next/image";
import { NextPage } from "next";
import { PaintBrushIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";
import { useBackgroundColor } from "~~/hooks/useBackgroundColor";

const Home: NextPage = () => {
  const { color, changeColor, connectedAddress } = useBackgroundColor();

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10" style={{ backgroundColor: color }}>
        <div className="px-5 bg-base-100 rounded-3xl">
          <h1 className="text-center">
            <span className="block text-2xl mt-4">Welcome to</span>
            <img className="mx-auto" src="/logo_small.png" alt="Color Scroller Logo" />
          </h1>
          <div className="text-center mt-4">
            <p className="text-lg font-medium">Powered by</p>
            <div className="flex justify-center items-center mb-5 space-x-5">
              <Image src="/scroll-logo.svg" alt="Scroll Logo" width={100} height={100} />
              <Image src="/alchemy-logo-blue-gradient.svg" alt="Alchemy Logo" width={100} height={100} />
            </div>
          </div>
          <div className="flex justify-center items-center space-x-2 flex-col sm:flex-row">
            <p className="my-2 font-medium">Connected Address:</p>
            <Address address={connectedAddress} />
          </div>
          <div className="flex flex-col items-center text-center">
            <PaintBrushIcon className="h-8 w-8 fill-secondary mt-4" />
            <p className="mb-4 max-w-md">
              Connect your wallet to change the background color.
              <br />
              Don't like the color? Click the button to change it!
            </p>
            <button className="btn btn-primary mb-8" disabled={!connectedAddress} onClick={changeColor}>
              Change My Color
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
