import { ReactNode } from 'react'
import styles from './layout.module.scss'

const Layout = ({ children }: { children: ReactNode }) => (
      <main className={styles.main}>
        <div className={styles.container}>
            {children}
        </div>
      </main>
)

export default Layout
