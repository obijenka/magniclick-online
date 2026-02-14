import React from "react";
import { Link } from "react-router-dom";
import LogoIcon from "../../../assets/logo.svg";
import styles from "./Logo.module.scss";

export default function Logo({ color = "default", to = "/" }) {
  const logoClasses = [
    styles.logo,
    styles[`logo--${color}`],
  ].filter(Boolean).join(" ");

  return (
    <Link to={to} className={logoClasses}>
      <img 
        src={LogoIcon} 
        alt="Magniclick логотип" 
        className={styles.logoSvg}
      />
    </Link>
  );
};
