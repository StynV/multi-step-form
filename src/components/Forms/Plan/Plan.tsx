import { useTranslation } from 'next-i18next'
import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import Image from 'next/image'
import styles from './plan.module.scss'
import { setPlan } from '@/state/slices/plan'

const PlanForm = () => {
    const [selectedPlan, setSelectedPlan] = useState('')
    const [selectedDuration, setSelectedDuration] = useState(true)
    
    const { t } = useTranslation('common')

    const dispatch = useDispatch()

    const onSubmit = (e: FormEvent) => {
        e.preventDefault()

        const duration = selectedDuration === true ? 'monthly' : 'yearly'
        dispatch(setPlan({ plan: selectedPlan, duration }))
    }

    const handleClick = (value: string) => {
        setSelectedPlan(value)
    }

    return (
        <div className={styles.personalInfo}>
            <form onSubmit={onSubmit} className={styles.form}>
                <div className={styles.radioButtons}>
                    <div
                        onClick={() => handleClick('arcade')}
                        className={`${styles.customRadioButton} ${selectedPlan === 'arcade' ? styles.selected : null}`}
                    >
                        <Image
                            src="/images/icon-arcade.svg"
                            alt="Arcade"
                            width={40}
                            height={40}
                            className={styles.icon}
                        />
                        <p className={styles.title}>{t('plan.arcade.title')}</p>
                        {selectedDuration ?
                            <p className={styles.price}>{t('plan.arcade.montlyPrice')}</p> :
                            <>
                                <p className={styles.price}>{t('plan.arcade.yearlyPrice')}</p>
                                <p className={styles.free}>{t('plan.arcade.yearlyFree')}</p>
                            </>
                        }
                    </div>

                    <div
                        onClick={() => handleClick('advanced')}
                        className={`${styles.customRadioButton} ${selectedPlan === 'advanced' ? styles.selected : null}`}
                    >
                        <Image
                            src="/images/icon-advanced.svg"
                            alt="Arcade"
                            width={40}
                            height={40}
                            className={styles.icon}
                        />
                        <p className={styles.title}>{t('plan.advanced.title')}</p>
                        {selectedDuration ?
                            <p className={styles.price}>{t('plan.advanced.montlyPrice')}</p> :
                            <>
                                <p className={styles.price}>{t('plan.advanced.yearlyPrice')}</p>
                                <p className={styles.free}>{t('plan.advanced.yearlyFree')}</p>
                            </>
                        }
                    </div>

                    <div
                        onClick={() => handleClick('pro')}
                        className={`${styles.customRadioButton} ${selectedPlan === 'pro' ? styles.selected : null}`}
                    >
                        <Image
                            src="/images/icon-pro.svg"
                            alt="Arcade"
                            width={40}
                            height={40}
                            className={styles.icon}
                        />
                        <p className={styles.title}>{t('plan.pro.title')}</p>
                        {selectedDuration ?
                            <p className={styles.price}>{t('plan.pro.montlyPrice')}</p> :
                            <>
                                <p className={styles.price}>{t('plan.pro.yearlyPrice')}</p>
                                <p className={styles.free}>{t('plan.pro.yearlyFree')}</p>
                            </>
                        }
                    </div>                  
                </div>

                <div className={styles.duration}>
                    <label className={`${selectedDuration ? styles.selected : null} ${styles.monthly}`}>{t('plan.monthly')}</label>
                    
                    <label className={styles.switch}>
                        <input type="checkbox" onChange={() => setSelectedDuration(value => !value)} />
                        <span className={`${styles.slider} ${styles.round}`}></span>
                    </label>

                    <label className={`${!selectedDuration ? styles.selected : null}  ${styles.yearly}`}>{t('plan.yearly')}</label>
                </div>

                <button type="submit" className={styles.btn}>{t('home.buttonLabel')}</button>
            </form>
        </div>
    )
}

export default PlanForm
