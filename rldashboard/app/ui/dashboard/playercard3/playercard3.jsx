import styles from './playercard3.module.css';
import { IoPersonAdd } from "react-icons/io5";

const Playercard3 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.texts}>
                <span className={styles.username}>@RevMexican</span>
                <div className={styles.rankWithImage}>
                    <img
                        src="/gc.png"
                        alt=""
                        width={30}
                        height={30}
                        className={styles.teamImage}
                    />
                    <span className={styles.rank}>Grand Champ</span>
                </div>
                <div className={styles.detail}>
                    <span className={styles.positive}>39.8K</span> Wins
                    <br />
                    <span className={styles.positive}>100%</span> Accuracy
                </div>
            </div>
        </div>
    );
};

export default Playercard3;