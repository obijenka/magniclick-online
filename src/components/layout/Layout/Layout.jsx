import Header from "../Header/Header";
import styles from "./Layout.module.scss";
import Footer from "../Footer/Footer";

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

