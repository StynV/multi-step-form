import { useTranslation } from 'next-i18next'
import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setPlan } from '@/state/slices/plan'
import RadioButtons from './RadioButtons/RadioButtons'
import styles from './plan.module.scss'
import Toggle from './Toggle/Toggle'
import { useRouter } from 'next/navigation'

const PlanForm = () => {
    const [selectedPlan, setSelectedPlan] = useState('arcade')
    const [selectedDuration, setSelectedDuration] = useState(true)
    
    const { t } = useTranslation('common')

    const dispatch = useDispatch()

    const router = useRouter()

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
                <RadioButtons handleClick={handleClick} selectedPlan={selectedPlan} selectedDuration={selectedDuration} />

                <div className={styles.duration}>
                    <label className={`${selectedDuration ? styles.selected : null} ${styles.monthly}`}>{t('plan.monthly')}</label>
                    <Toggle setSelectedDuration={setSelectedDuration} />
                    <label className={`${!selectedDuration ? styles.selected : null}  ${styles.yearly}`}>{t('plan.yearly')}</label>
                </div>

                <div className={styles.buttons}>
                    <button className={styles.btnSecondary} onClick={() => {router.back()}}>{t('plan.goBackLabel')}</button>
                    <button type="submit" className={styles.btn}>{t('plan.buttonLabel')}</button>
                </div>
            </form>
        </div>
    )
}

export default PlanForm
