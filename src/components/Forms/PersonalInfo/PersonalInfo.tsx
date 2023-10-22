import { setPersonalInfo } from '@/state/slices/personalInfo'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/navigation'
import { ChangeEvent, FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import styles from './personal-info.module.scss'

const Personalinfo = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [phoneError, setPhoneError] = useState('')
    
    const { t } = useTranslation('common')

    const dispatch = useDispatch()

    const router = useRouter()

    const onSubmit = (e: FormEvent) => {
        e.preventDefault()

        if (phone === '') {
            setPhoneError(t('home.phonenumberError'))
        } else {
            dispatch(setPersonalInfo({ name, email, phone }))
            router.push('plan')
        }
    }

    const handleInputChange = (setState: React.Dispatch<React.SetStateAction<string>>) => (e: ChangeEvent<HTMLInputElement>) => {
        setState(e.target.value)
    }

    return (
        <form onSubmit={onSubmit} className={styles.form}>
            <div className={styles.inputWithLabel}>
                <label>{t('home.textfieldLabel')}</label>
                <input
                    type="text"
                    name="name"
                    className={styles.input}
                    placeholder={t('home.textfieldPlaceholder')}
                    onChange={handleInputChange(setName)}
                />
            </div>

            <div className={styles.inputWithLabel}>
                <label>{t('home.emailLabel')}</label>
                <input
                    type="email"
                    name="email"
                    className={styles.input}
                    placeholder={t('home.emailPlaceholder')}
                    onChange={handleInputChange(setEmail)}
                />
            </div>

            <div className={styles.inputWithLabel}>
                <div className={styles.labelWithError}>
                    <label>{t('home.phonenumberLabel')}</label>
                    {phoneError && <p>{phoneError}</p>}
                </div>
                <input
                    type="tel"
                    name="phone"
                    className={styles.input}
                    placeholder={t('home.phonenumberPlaceholder')}
                    onChange={handleInputChange(setPhone)}
                />
            </div>

            <button type="submit" className={styles.btn}>{t('home.buttonLabel')}</button>
        </form>
    )
}

export default Personalinfo
