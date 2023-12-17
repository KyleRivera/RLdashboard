import Playercard1 from "../ui/dashboard/playercard1/playercard1";
import Playercard2 from "../ui/dashboard/playercard2/playercard2";
import Playercard3 from "../ui/dashboard/playercard3/playercard3";
import styles from "../ui/dashboard/dashboard.module.css";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import RecentMatches from "../ui/dashboard/recentmatches/recentmatches"
const Dashboard = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.cards}>
                    <Playercard1/>
                    <Playercard2/>
                    <Playercard3/>
                </div>
                <RecentMatches/>
            </div>
            <div className={styles.side}>
                <Rightbar/>
            </div>
        </div>
    );
};
export default Dashboard