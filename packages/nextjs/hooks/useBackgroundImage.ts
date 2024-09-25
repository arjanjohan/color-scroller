import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

const backgroundImages = [
  "", // default
  "url('/background/1.jpg')",
  "url('/background/2.jpg')",
  "url('/background/3.jpg')",
  "url('/background/4.jpg')",
  "url('/background/5.jpg')",
  "url('/background/6.jpg')",
  "url('/background/7.jpg')",
  "url('/background/8.jpg')",
  "url('/background/9.jpg')",
  "url('/background/10.jpg')",
  "url('/background/11.jpeg')",
];

export const useBackgroundImage = () => {
  const { address: connectedAddress } = useAccount();
  const [imageIndex, setImageIndex] = useState(0);

  const {
    data: bumpValue,
    refetch: refetchBumpValue,
  } = useScaffoldReadContract({
    contractName: "BumpContract",
    functionName: "getBumpValue",
    args: [connectedAddress],
  });

  const { writeContractAsync } = useScaffoldWriteContract("BumpContract");

  useEffect(() => {
    if (connectedAddress && bumpValue !== undefined) {
      const addressInt = parseInt(connectedAddress.slice(2), 16) % (backgroundImages.length - 1);
      const newImageIndex = (addressInt + bumpValue) % (backgroundImages.length - 1) + 1;
      setImageIndex(newImageIndex);
    }
  }, [connectedAddress, bumpValue]);

  const changeImage = async () => {
    if (connectedAddress) {
      try {
        await writeContractAsync({
          functionName: "incrementBump",
        });
        refetchBumpValue();
      } catch (e) {
        console.error("Error changing image:", e);
      }
    }
  };

  return {
    image: backgroundImages[imageIndex],
    changeImage,
    connectedAddress,
  };
};