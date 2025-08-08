"use client";
import { useId, useState } from "react";
import Image from "next/image";
import styles from "./ConvertCurrency.module.css";
import iconArrows from "@/images/arrows.svg";

const SHORTCUTS = [5, 10, 20, 50, 100];

function ConvertCurrency({ currencies, setCurrencies }) {
  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");
  const firstId = `first-${useId()}`;
  const secondId = `second-${useId()}`;

  function handleSwapCurrencies() {
    setCurrencies((current) => {
      return [...current].reverse();
    });
    setFirstInput(secondInput);
    setSecondInput(firstInput);
  }

  return (
    <div>
      <div className={styles.card}>
        <div className={styles.currency}>
          <label htmlFor={firstId}>Insert {currencies[0].name}</label>
          <div className={styles.input}>
            <input
              type="number"
              id={firstId}
              value={firstInput}
              onChange={(event) => {
                setFirstInput(event.target.value);
                setSecondInput(event.target.value * currencies[0].rate);
              }}
            />
            <span>{currencies[0].slug}</span>
          </div>
        </div>
        <button
          onClick={handleSwapCurrencies}
          type="button"
          className={styles.switchBtn}
        >
          <Image
            src={iconArrows}
            alt="Two arrows going in opposite directions."
          />
        </button>
        <div className={styles.currency}>
          <label htmlFor={secondId}>Insert {currencies[1].name}</label>
          <div className={styles.input}>
            <input
              type="number"
              id={secondId}
              value={secondInput}
              onChange={(event) => {
                setSecondInput(event.target.value);
                setFirstInput(event.target.value * currencies[1].rate);
              }}
            />
            <span>{currencies[1].slug}</span>
          </div>
        </div>
      </div>
      <div className={styles.shortcuts}>
        {SHORTCUTS.map((shortcut, index) => (
          <button
            key={index}
            onClick={() => {
              setFirstInput(shortcut);
              setSecondInput(shortcut * currencies[0].rate);
            }}
          >
            {shortcut}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ConvertCurrency;
