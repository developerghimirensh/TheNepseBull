"use client";

import { useEffect, useState } from "react";

export function useMarketSimulation(
  initialPrice: number
) {
  const [price, setPrice] =
    useState(initialPrice);

  useEffect(() => {
    const interval =
      setInterval(() => {
        setPrice((prev) => {
          const movement =
            Math.random() * 20 - 10;

          return Math.max(
            1,
            Math.round(prev + movement)
          );
        });
      }, 5000);

    return () =>
      clearInterval(interval);
  }, []);

  return price;
}