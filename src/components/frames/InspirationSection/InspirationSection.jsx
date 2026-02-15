import { useState, useEffect } from "react";
import styles from "./InspirationSection.module.scss";
import MainTitle from "../../shared/MainTitle/MainTitle";
import likeIcon from "../../../assets/inspiration/like.png";
import likeFilledIcon from "../../../assets/inspiration/like-filled.png";
import { getInspiration } from "../../../services/api";
import { useLikes } from "../../../hooks/useLikes";

export default function InspirationSection() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { items, setItems, likedItems, handleLike } = useLikes([]);

  useEffect(() => {
    fetchInspiration();
  }, []);

  const fetchInspiration = async () => {
    try {
      setLoading(true);
      const response = await getInspiration();
      setItems(response.data);
      setError(null);
    } catch (err) {
      setError("Не удалось загрузить данные");
      console.error("Ошибка:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.inspiration}>
      <MainTitle
        title="Вдохновение"
        subtitle="Magniclick вдохновляет на работу, учебу и самомотивацию"
      />

      {loading ? (
        <div className={styles.loading}>Загрузка...</div>
      ) : error ? (
        <div className={styles.error}>{error}</div>
      ) : (
        <div className={styles.inspirationWrapper}>
          {items.map((item) => (
            <div key={item.id} className={styles.inspirationCard}>
              <img
                src={item.image}
                alt={item.title}
                className={styles.inspirationCardImage}
              />
              <div className={styles.inspirationCardLikes}>
                <button
                  onClick={() => handleLike(item)}
                  className={styles.inspirationCardLikesBtn}
                >
                  <img
                    src={likedItems[item.id] ? likeFilledIcon : likeIcon}
                    alt="Heart icon"
                    className={likedItems[item.id] ? styles.liked : ''}
                  />
                </button>
                <p className={styles.inspirationCardLikesCount}>{item.likes}</p>
              </div>
              <h3 className={styles.inspirationCardTitle}>{item.title}</h3>
              <p className={styles.inspirationCardDescription}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
