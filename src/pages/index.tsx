import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Meta from '@/components/Meta/Meta'
import Sidebar from '@/components/Sidebar/Sidebar'
import Content from '@/components/Content/Content'
import { useTranslation } from 'next-i18next'
import Personalinfo from '@/components/Forms/PersonalInfo/PersonalInfo'
import Layout from '@/components/Layout/Layout'
import styles from '../components/Layout/layout.module.scss'

const Home = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <Meta />
      
      <Layout>
          <Sidebar className={styles.sidebar} />
          <Content
            className={styles.content}
            title={t('home.title')}
            description={t('home.description')}
          >
            <Personalinfo />
        </Content>
      </Layout>
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