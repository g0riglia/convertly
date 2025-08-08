"use client";
import { createContext } from "react";
import useSWR from "swr";

export const CurrencyPriceContext = createContext();

const fetcher = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch exchange rates: ${response.status}`);
  }

  return response.json();
};

function CurrencyPriceProvider({ children }) {
  const { data } = useSWR("/api/exchange-rates", fetcher, {
    revalidateOnFocus: true,
  });

  const date = new Date();

  const plnRate = data?.plnRate || 4.25;
  const eurRate = 1 / plnRate;

  return (
    <CurrencyPriceContext
      value={{
        eurToPln: { eur: 1, pln: plnRate },
        plnToEur: { pln: 1, eur: eurRate },
        time: `${date.getHours()}:${date.getMinutes()}`,
      }}
    >
      {children}
    </CurrencyPriceContext>
  );
}

export default CurrencyPriceProvider;
