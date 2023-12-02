
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
        title: "Pages",
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
        title: "Placeholder 1",
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
        title: "Placeholder 2",
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
        
    }
    
]
const Sidebar = () => {
    return (
        <div className={styles.container}>
            <ul>
                {menuItems.map((cat)=> (
                    <li key={cat.title}>
                     <span className={styles.cat}>{cat.title}</span>
                     {cat.list.map((item)=> (
                        <MenuLink item={item.title}/>
                    ))}
                    </li>
                 ))}
            </ul>
        </div>
    )
}
export default Sidebar