import React from "react";
import Ad from "./Ad";
import styles from "../header/styles.module.scss";
import Top from "./Top";
import Main from './Main'

export default function Header({ country }) {
  return (
    <header className={styles.header}>
      <Ad />
      <Top country={country} />
      <Main />
    </header>
  );
}
