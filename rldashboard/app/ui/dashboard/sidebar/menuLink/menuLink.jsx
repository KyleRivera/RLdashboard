import styles from './menuLink.module.css';
import Link from 'next/link';

const MenuLink = ({ item }) => {
    return (
        <Link href={item.path} className={styles.container}>
            <span>
                {item.icon}
                {item.title}
            </span>
        </Link>
    );
};

export default MenuLink;