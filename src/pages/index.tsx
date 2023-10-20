import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Meta from '@/components/Meta/Meta'
import styles from '@/styles/Home.module.scss'

const Home = () => (
  <>
    <Meta />
      
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <ul>
            <li>
              <div>1</div>
            </li>
            <li>
              <div>2</div>
            </li>
            <li>
              <div>3</div>
            </li>
            <li>
              <div>4</div>
            </li>
          </ul>
        </div>
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