import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Meta from '@/components/Meta/Meta'
import Sidebar from '@/components/Sidebar/Sidebar'
import styles from '@/styles/Home.module.scss'

const Home = () => (
  <>
    <Meta />
      
    <main className={styles.main}>
      <div className={styles.container}>
        <Sidebar className={styles.sidebar} />
        <div className={styles.content}>content</div>
      </div>
    </main>
  </>
)


export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      },
    }
}

export default Home