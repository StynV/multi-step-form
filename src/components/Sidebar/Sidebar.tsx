import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import SidebarItem from './SidebarItem/SidebarItem'
import styles from './sidebar.module.scss'

const Sidebar = ({ className }: { className: string }) => {
    const { t } = useTranslation('common')
    
    const router = useRouter()

    const checkActive = () => {
        switch (router.pathname) {
            case '/': {
                return 1
            }
            case '/plan': {
                return 2
            }
            case '/add-ons': {
                return 3
            }
            case '/summary': {
                return 4
            }
            default: {
                return false
            }
        }
    }
    
    return (
        <div className={`${className} ${styles.sidebar}`}>
            <SidebarItem number={1} title={t('sidebar.title1')} description={t('sidebar.description1')} active={checkActive() === 1} />
            <SidebarItem number={2} title={t('sidebar.title2')} description={t('sidebar.description2')} active={checkActive() === 2} />
            <SidebarItem number={3} title={t('sidebar.title3')} description={t('sidebar.description3')} active={checkActive() === 3} />
            <SidebarItem number={4} title={t('sidebar.title4')} description={t('sidebar.description4')} active={checkActive() === 4} />
        </div>
    )
}

export default Sidebar
