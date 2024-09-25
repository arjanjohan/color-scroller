import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

const backgroundColors = [
  "#f4f8ff",
  "white",
  "red",
  "green",
  "blue",
  "yellow",
  "purple",
  "orange",
  "pink",
  "brown",
  "gray",
  "black",
  "cyan",
  "magenta",
  "lime",
  "teal",
  "indigo",
  "maroon",
  "navy",
  "olive",
  "silver",
  "aqua",
  "fuchsia",
  "coral",
  "turquoise",
  "lavender",
  "beige",
  "crimson",
  "gold",
  "plum",
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
