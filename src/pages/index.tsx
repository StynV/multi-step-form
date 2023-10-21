import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Meta from '@/components/Meta/Meta'
import Sidebar from '@/components/Sidebar/Sidebar'
import Content from '@/components/Content/Content'
import styles from '@/styles/Home.module.scss'
import { useTranslation } from 'next-i18next'
import Personalinfo from '@/components/Forms/PersonalInfo/PersonalInfo'

const Home = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <Meta />
      
      <main className={styles.main}>
        <div className={styles.container}>
          <Sidebar className={styles.sidebar} />
          <Content
            className={styles.content}
            title={t('home.content.title')}
            description={t('home.content.description')}
          >
            <Personalinfo />
          </Content>
        </div>
      </main>
    </>
  )
}



export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      },
    }
}

export default Home