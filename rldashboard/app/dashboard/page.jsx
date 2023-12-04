import Playercard1 from "../ui/dashboard/playercard1/playercard1";
import styles from "../ui/dashboard/dashboard.module.css";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import Chart from "../ui/dashboard/chart/chart"
const Dashboard = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.cards}>
                    <Playercard1/>
                    <Playercard1/>
                    <Playercard1/>
                </div>
                <Chart/>
            </div>
            <div className={styles.side}>
                <Rightbar/>
            </div>
        </div>
    );
};
export default Dashboard