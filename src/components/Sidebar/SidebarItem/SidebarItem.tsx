import { useMediaQuery } from 'react-responsive'
import styles from './sidebar-item.module.scss'

const SidebarItem = ({ number, title, description, active }: { number: number, title: string, description: string, active: boolean }) => {
    const isMobile = useMediaQuery({ maxWidth: 768 })

    return (
        <div className={styles.sidebaritem}>
            <p className={`${styles.number} ${active ? styles.active : null} `}>{number}</p>

            {!isMobile &&
                <div className={styles.text}>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.description}>{description}</p>
                </div>
            }
        </div>
    )
}

export default SidebarItem
