import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Meta from '@/components/Meta/Meta'
import Sidebar from '@/components/Sidebar/Sidebar'
import Content from '@/components/Content/Content'
import { useTranslation } from 'next-i18next'
import Layout from '@/components/Layout/Layout'
import SummaryContent from '@/components/Content/Summary/Summary'
import styles from '../../components/Layout/layout.module.scss'

const Summary = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <Meta />
      
      <Layout>
          <Sidebar className={styles.sidebar} />
          <Content
            className={styles.content}
            title={t('summary.title')}
            description={t('summary.description')}
        >
          <SummaryContent />
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

export default Summary