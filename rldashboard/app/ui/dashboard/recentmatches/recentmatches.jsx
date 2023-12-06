import styles from './recentmatches.module.css'

const RecentMatches = () =>{
    return(
        <div className={styles.container}>
            <h2 className={styles.title}>Recent Matches</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Contendor</td>
                        <td>Result</td>
                        <td>Date</td>
                        <td>Score</td>
                    </tr>  
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.matchInfo}>
                                <img
                                    src="/logo1.png"
                                    alt=""
                                    width={40}
                                    height={40}
                                    className={styles.teamImage}
                                />
                                Pepper Bois
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.win}`}>
                                Win
                            </span>
                        </td>
                        <td>12.07.2023</td>
                        <td>7 | 5</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.matchInfo}>
                                <img
                                    src="/logo2.png"
                                    alt=""
                                    width={40}
                                    height={40}
                                    className={styles.teamImage}
                                />
                                The Stinky people
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.loss}`}>
                                Loss
                            </span>
                        </td>
                        <td>12.07.2023</td>
                        <td>2 | 6</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.matchInfo}>
                                <img
                                    src="/logo3.png"
                                    alt=""
                                    width={40}
                                    height={40}
                                    className={styles.teamImage}
                                />
                                Team Poopy
                            </div>
                        </td>
                        <td>
                            
                            <span className={`${styles.status} ${styles.tie}`}>
                                Tie
                            </span>
                        </td>
                        <td>12.01.2023</td>
                        <td>3 | 3</td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}
export default RecentMatches