import styles from './menuLink.module.css'
import Link from 'next/link'
const MenuLink = ({item}) => {
    return (
        <link href={item.path} className={StyleSheet.container}>
            {item.icon}
            {item.title}
        </link>
    )
}

export default MenuLink