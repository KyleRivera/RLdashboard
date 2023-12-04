import styles from './playercard1.module.css'
import { IoPersonAdd } from "react-icons/io5";


const Playercard1 = () =>{
    return(
        <div className={styles.container}>
            <IoPersonAdd size={20}/>
            <div className={styles.texts}>
                <span className={styles.username}>@IceyyNator</span>
                <span className={styles.rank}>Platinum II</span>
                <span className={styles.detail}>
                 <span className={styles.positive}>2762</span> Total Wins
                    </span>
            </div>
        </div>
    );
};
export default Playercard1