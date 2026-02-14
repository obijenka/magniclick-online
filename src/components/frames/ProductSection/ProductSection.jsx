import { Link } from "react-router-dom";
import styles from "./ProductSection.module.scss";
import MainTitle from "../../shared/MainTitle/MainTitle";
import { products } from "../../../constants/products";

export default function ProductSection() {
  return (
    <section className={styles.product}>
      <MainTitle title="Наши продукты" />
      <div className={styles.productGrid}>
        {products.map((product) => (
          <Link 
            key={product.id}
            to={product.link} 
            className={styles[`productItem${product.size}`]}
          >
            <img
              src={product.image}
              alt={product.title}
              className={styles.productImage}
            />
            <div className={styles.productItemTitle}>
              {product.title}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}