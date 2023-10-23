import { useTranslation } from 'next-i18next'
import styles from './addon.module.scss'

const Addon = ({service}: {service: string}) => {
    const { t } = useTranslation('common')

    return (
        <div className={styles.addOn}>
            <p className={styles.title}>{t(`addOns.${service}.title`)}</p>
            <p className={styles.price}>{t(`addOns.${service}.price`)}</p>
        </div>
    )
}

export default Addon
