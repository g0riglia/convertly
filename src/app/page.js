"use client";
import { useContext, useState } from "react";
import styles from "./page.module.css";
import { CurrencyPriceContext } from "@/components/CurrencyPriceProvider";
import ConvertCurrency from "@/components/ConvertCurrency";
import Spinner from "@/components/Spinner";

export default function Home() {
  const currencyPrice = useContext(CurrencyPriceContext);
  console.log(currencyPrice);
  const [currencies, setCurrencies] = useState([
    {
      name: "Euro",
      slug: "eur",
      rate: currencyPrice.eurToPln.pln,
    },
    {
      name: "Zloty",
      slug: "pln",
      rate: currencyPrice.plnToEur.eur,
    },
  ]);

  return (
    <div className={styles.home}>
      <main>
        <div className={styles.rate}>
          <h1>Rate: 1 EUR = {currencyPrice.eurToPln.pln} PLN</h1>
          <p>today at {currencyPrice.time}</p>
        </div>
        <ConvertCurrency
          currencies={currencies}
          setCurrencies={setCurrencies}
        />
      </main>
    </div>
  );
}
