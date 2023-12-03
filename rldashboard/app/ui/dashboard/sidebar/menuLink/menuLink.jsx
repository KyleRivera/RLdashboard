"use client"
import { usePathname } from 'next/navigation'
import styles from './menuLink.module.css';
import Link from 'next/link';

const MenuLink = ({ item }) => {
    const pathname = usePathname()
    console.log(pathname)
    return (
        <Link href={item.path} className={`${styles.container} ${pathname === item.path ? styles.active : ''}`}>
            <span>
                {item.icon}
                {item.title}
            </span>
        </Link>
    );
};

export default MenuLink;