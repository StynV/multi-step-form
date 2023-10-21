import { ReactNode } from 'react'
import styles from './content.module.scss'

const Content = ({ className, title, description, children }: { className: string, title: string, description: string, children: ReactNode }) => (
    <div className={`${className} ${styles.content}`}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>

        {children}
    </div>
)

export default Content
