import MenuLink from "app/ui/dashboard/sidebar/menuLink/menuLink"
import styles from "./sidebar.module.css"
import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdShoppingBag,
    MdAttachMoney,
    MdWork,
    MdAnalytics,
    MdPeople,
    MdOutlineSettings,
    MdHelpCenter,
    MdLogout,
} from "react-icons/md";
const menuItems = [
    {
        title: "League Manager",
        list: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: <MdDashboard />,
            },
            {
                title: "My Team",
                path: "/dashboard/team",
                icon: <MdSupervisedUserCircle />,
            },
        ]
        
    },
    {
        title: "Calendar",
        list: [
            {
                title: "Calendar",
                path: "/dashboard/schedule",
                icon: <MdDashboard />,
            },
            {
                title: "Match Results",
                path: "/dashboard/matchresults",
                icon: <MdSupervisedUserCircle />,
            },
        ]
        
    },
    {
        title: "Chat",
        list: [
            {
                title: "Team Chat",
                path: "/dashboard/teamchat",
                icon: <MdDashboard />,
            },
            {
                title: "My Team",
                path: "/dashboard/messages",
                icon: <MdSupervisedUserCircle />,
            },
        ]
        
    }
    
]
const Sidebar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <img className={styles.userImage} src="/noavatar.png" alt="" width="50" height="50"/>
                <div className={styles.userDetail}>
                    <span className={styles.username}>John Joe</span>
                    <span className={styles.userTitle}>Administrator</span>
                </div>
            </div>
            <ul className={styles.list}>
                {menuItems.map((cat)=> (
                    <li key={cat.title}>
                     <span className={styles.cat}>{cat.title}</span>
                     {cat.list.map((item)=> (
                        <MenuLink item={item} key={item.title}/>
                    ))}
                    </li>
                 ))}
            </ul>
        </div>
    )
}
export default Sidebar