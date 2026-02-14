import React from "react";
import styles from "./MainTitle.module.scss";

export default function MainTitle({ title, subtitle=""}) {
  return (
    <div className={styles.pageTitle}>
      <h1 className={styles.title}>{title}</h1>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
