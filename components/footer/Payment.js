import React from "react";
import styles from "./styles.module.scss";

export default function Payment() {
  return (
    <div className={styles.footer_payment}>
      <h3>WE ACCEPT</h3>
      <div className={styles.footer__flexwrap}>
        <img src="../../../images/payment/visa.webp" />
        <img src="../../../images/payment/mastercard.webp" />
        <img src="../../../images/payment/paypal.webp" />
      </div>
    </div>
  );
}
