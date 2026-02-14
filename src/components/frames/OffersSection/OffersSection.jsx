import { Link } from "react-router-dom";
import styles from "./OffersSection.module.scss";
import MainTitle from "../../shared/MainTitle/MainTitle";
import { offersItems } from "../../../constants/offers";

export default function OffersSection() {
  return (
    <section className={styles.offers}>
      <MainTitle
        title="Специальные предложения"
        subtitle="Предложение ограничено, комплектом дешевле, чем собирать по отдельности"
      />

      <div className={styles.offersWrapper}>
        {offersItems.map((offer) => (
          <Link key={offer.id} to={offer.link} className={styles.offersCard} style={{ backgroundColor: offer.color }}>
            <img
              src={offer.image}
              alt={offer.title}
              className={styles.offersCardImage}
            />
            <h3 className={styles.offersCardTitle}>{offer.title}</h3>
            <div className={styles.offersCardPrices}>
              <span className={styles.offersCardDiscountPrice}>
                {offer.discountPrice.toLocaleString()} ₽
              </span>
              <span className={styles.offersCardOldPrice}>{offer.price.toLocaleString()} ₽</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
