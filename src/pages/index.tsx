import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import styles from '@/styles/Home.module.scss'
import Meta from '@/components/Meta/Meta'

const Home = () => (
  <>
    <Meta />
      
    <main className={styles.main}>
      <p>multi step form</p>
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