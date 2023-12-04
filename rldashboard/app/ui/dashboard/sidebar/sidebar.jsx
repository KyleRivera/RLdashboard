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
    MdLogout
    ,
} from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoToday } from "react-icons/io5";
import { MdOutlineMarkUnreadChatAlt } from "react-icons/md";
import { IoMdChatbubbles } from "react-icons/io";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdCoPresent } from "react-icons/md";
const menuItems = [
    {
        title: "League Manager",
        list: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: <MdCoPresent />,
            },
            {
                title: "My League",
                path: "/dashboard/league",
                icon: <FaPeopleGroup />,
            },
            {
                title: "My Team",
                path: "/dashboard/team",
                icon: <RiTeamFill />,
            },
        ]
        
    },
    {
        title: "Calendar",
        list: [
            {
                title: "Calendar",
                path: "/dashboard/schedule",
                icon: <IoToday />,
            },
            {
                title: "Match Results",
                path: "/dashboard/matchresults",
                icon: <FaArrowTrendUp />,
            },
        ]
        
    },
    {
        title: "Chat",
        list: [
            {
                title: "Team Chat",
                path: "/dashboard/teamchat",
                icon: <IoMdChatbubbles />,
            },
            {
                title: "Messages",
                path: "/dashboard/messages",
                icon: <MdOutlineMarkUnreadChatAlt />,
            },
        ]
        
    },
    
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
            <button className={styles.logout}>
                <MdLogout />
                Logout
            </button>
        </div>
    )
}
export default Sidebar