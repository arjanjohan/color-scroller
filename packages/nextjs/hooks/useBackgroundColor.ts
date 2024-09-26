import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

const backgroundColors = [
  "#f4f8ff",
  "#FF0000",
  "#008000",
  "#0000FF",
  "#FFFF00",
  "#800080",
  "#FFA500",
  // "#FFC0CB",
  "#A52A2A",
  "#808080",
  "#000000",
  "#00FFFF",
  "#FF00FF",
  "#00FF00",
  "#008080",
  "#4B0082",
  "#800000",
  "#000080",
  "#808000",
  // "#C0C0C0",
  "#00FFFF",
  "#FF00FF",
  "#FF7F50",
  "#40E0D0",
  // "#E6E6FA",
  // "#F5F5DC",
  "#DC143C",
  "#FFD700",
  "#DDA0DD",
];

export const useBackgroundColor = () => {
  const { address: connectedAddress } = useAccount();
  const [colorIndex, setColorIndex] = useState(0);

  const { data: bumpValue, refetch: refetchBumpValue } = useScaffoldReadContract({
    contractName: "BumpContract",
    functionName: "getBumpValue",
    args: [connectedAddress],
  });

  const { writeContractAsync } = useScaffoldWriteContract("BumpContract");

  useEffect(() => {
    if (connectedAddress && bumpValue !== undefined) {
      const addressInt = parseInt(connectedAddress.slice(2), 16) % backgroundColors.length;
      const newColorIndex = (addressInt + bumpValue) % backgroundColors.length;
      setColorIndex(newColorIndex);
    }
  }, [connectedAddress, bumpValue]);

  const changeColor = async () => {
    if (connectedAddress) {
      try {
        await writeContractAsync({
          functionName: "incrementBump",
        });
        refetchBumpValue();
      } catch (e) {
        console.error("Error changing color:", e);
      }
    }
  };

  return {
    color: backgroundColors[colorIndex],
    changeColor,
    connectedAddress,
  };
};
