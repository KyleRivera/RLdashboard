import styles from './playercard1.module.css';
import { IoPersonAdd } from "react-icons/io5";

const Playercard1 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.texts}>
                <span className={styles.username}>@IceyyNator</span>
                <div className={styles.rankWithImage}>
                    <img
                        src="/plat2.png"
                        alt=""
                        width={30}
                        height={30}
                        className={styles.teamImage}
                    />
                    <span className={styles.rank}>Platinum II</span>
                </div>
                <div className={styles.detail}>
                    <span className={styles.positive}>2762</span> Wins
                    <br />
                    <span className={styles.positive}>45.2%</span> Accuracy
                </div>
            </div>
        </div>
    );
};

export default Playercard1;