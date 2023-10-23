import { setAddOns } from '@/state/slices/addOns'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import styles from './add-ons.module.scss'

const AddonsForm = () => {
    const [onlineService, setOnlineService] = useState(false)
    const [largerStorage, setLargerStorage] = useState(false)
    const [customizableProfile, setCustomizableProfile] = useState(false)

    const { t } = useTranslation('common')

    const router = useRouter()

    const dispatch = useDispatch()

    const onSubmit = (e: FormEvent) => {
        e.preventDefault()

        dispatch(setAddOns({ onlineService, largerStorage, customizableProfile }))
        router.push('summary')
    }

    return (
        <form onSubmit={onSubmit} className={styles.form}>
            <div
                className={`${styles.option} ${onlineService && styles.selected}`}
                onClick={() => { setOnlineService(value => !value) }}
            >
                <input
                    type="checkbox"
                    checked={onlineService} onChange={() => { setOnlineService(value => !value) }}
                    className={styles.checkbox}
                />
                
                <div className={styles.text}>
                    <p>{t('addOns.onlineService.title')}</p>
                    <p>{t('addOns.onlineService.description')}</p>
                </div>

                <p className={styles.price}>{t('addOns.onlineService.price')}</p>
            </div>

            <div
                className={`${styles.option} ${largerStorage && styles.selected}`}
                onClick={() => { setLargerStorage(value => !value) }}
            >
                <input
                    type="checkbox"
                    checked={largerStorage} onChange={() => { setLargerStorage(value => !value) }}
                    className={styles.checkbox}
                />
                
                <div className={styles.text}>
                    <p>{t('addOns.largerStorage.title')}</p>
                    <p>{t('addOns.largerStorage.description')}</p>
                </div>

                <p className={styles.price}>{t('addOns.largerStorage.price')}</p>
            </div>

            <div
                className={`${styles.option} ${customizableProfile && styles.selected}`}
                onClick={() => { setCustomizableProfile(value => !value) }}
            >
                <input
                    type="checkbox"
                    checked={customizableProfile} onChange={() => { setCustomizableProfile(value => !value) }}
                    className={styles.checkbox}
                />
                
                <div className={styles.text}>
                    <p>{t('addOns.customizableProfile.title')}</p>
                    <p>{t('addOns.customizableProfile.description')}</p>
                </div>

                <p className={styles.price}>{t('addOns.customizableProfile.price')}</p>
            </div>

            <div className={styles.buttons}>
                <button className={styles.btnSecondary} onClick={() => { router.back()} }>{t('addOns.goBackLabel')}</button>
                <button type="submit" className={styles.btn}>{t('addOns.buttonLabel')}</button>
            </div>
        </form>
    )
}

export default AddonsForm
