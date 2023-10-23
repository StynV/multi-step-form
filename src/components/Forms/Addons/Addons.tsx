import { setAddOns } from '@/state/slices/addOns'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import Option from './Option/Option'
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
            <Option
                value={onlineService}
                valueLabel='onlineService'
                setValue={setOnlineService}
            />

            <Option
                value={largerStorage}
                valueLabel='largerStorage'
                setValue={setLargerStorage}
            />

            <Option
                value={customizableProfile}
                valueLabel='customizableProfile'
                setValue={setCustomizableProfile}
            />

            <div className={styles.buttons}>
                <button className={styles.btnSecondary} onClick={() => { router.back()} }>{t('addOns.goBackLabel')}</button>
                <button type="submit" className={styles.btn}>{t('addOns.buttonLabel')}</button>
            </div>
        </form>
    )
}

export default AddonsForm
