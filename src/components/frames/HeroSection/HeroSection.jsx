import { Link } from "react-router-dom";
import styles from "./HeroSection.module.scss";
import { overlayItems } from "../../../constants/overlay";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>В Мagniclick мы создаем</h1>
        <div className={styles.heroLine}></div>
        <p className={styles.heroText}>
          Коротенький текст о деятельности компании, продуктач, для кого, чего и
          прочее. Коротенький текст о деятельности компании, продуктач, для
          кого, его и прочее
        </p>
      </div>
      <div className={styles.heroImage}></div>
      <div className={styles.heroOverlay}>
        {overlayItems.map((item) => (
          <Link key={item.id} to={item.link} className={styles.heroOverlayItem}>
            <div className={styles.heroOverlayIcon}>
              <img
                src={item.image}
                alt={item.title}
                // className={styles.heroOverlayImage}
              />
            </div>
            <div className={styles.heroOverlayTitle}>{item.title}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
