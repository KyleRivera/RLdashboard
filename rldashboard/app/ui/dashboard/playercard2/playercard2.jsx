import styles from './playercard2.module.css';
import { IoPersonAdd } from "react-icons/io5";

const Playercard2 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.texts}>
                <span className={styles.username}>@Eman_Elite02</span>
                <div className={styles.rankWithImage}>
                    <img
                        src="/gold3.png"
                        alt=""
                        width={30}
                        height={30}
                        className={styles.teamImage}
                    />
                    <span className={styles.rank}>Gold 3</span>
                </div>
                <div className={styles.detail}>
                    <span className={styles.positive}>772</span> Wins
                    <br />
                    <span className={styles.positive}>41.1%</span> Accuracy
                </div>
            </div>
        </div>
    );
};

export default Playercard2;