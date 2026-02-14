import { Link } from "react-router-dom";
import styles from "./AboutSection.module.scss";

import avatar1 from "../../../assets/about/avatars/avatar1.jpg";
import avatar2 from "../../../assets/about/avatars/avatar2.jpg";
import avatar3 from "../../../assets/about/avatars/avatar3.jpg";
import avatar4 from "../../../assets/about/avatars/avatar4.jpg";
import avatar5 from "../../../assets/about/avatars/avatar5.jpg";

import easeIcon from "../../../assets/about/postulates/ease.svg";
import reusabilityIcon from "../../../assets/about/postulates/reusability.svg";
import ecologyIcon from "../../../assets/about/postulates/ecology.svg";


export default function AboutSection() {
  const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5];
  const postulates = [easeIcon, reusabilityIcon, ecologyIcon];

  return (
    <section className={styles.about}>
      <div className={styles.aboutContent}>
        <h1 className={styles.aboutContentTitle}>О нас</h1>
        <p className={styles.aboutContentText}>
          Коротенький текст о деятельности компании, продуктач, для кого, чего и
          прочее. Коротенький текст о деятельности компании, продуктач, для
          кого, его и прочее
        </p>
        <div className={styles.aboutContentPostulates}>
          {postulates.map((postulate, index) => (
            <div key={index} className={styles.aboutContentPostulate}>
              <img src={postulate} alt={`Postulate`} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.aboutAvatars}>
        {avatars.map((avatar, index) => (
          <div key={index} className={`${styles.aboutAvatar} ${styles[`avatar${index + 1}`]}`}>
            <img src={avatar} alt={`Team member`} />
          </div>
        ))}
      </div>
    </section>
  );
}
