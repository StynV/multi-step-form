import { Duration, PlanEnum } from '@/state/models/Plan.model'
import { RootState } from '@/state/store'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import Addon from './AddOn.tsx/AddOn'
import checkIfDurationIsMonthly from './Utils/checkIfDurationIsMonthly'
import getDurationValue from './Utils/getDurationValue'
import getTotal from './Utils/getTotal'
import styles from './summary.module.scss'
import { useRouter } from 'next/router'

const SummaryContent = () => {
    const planData = useSelector((state: RootState) => state.plan)
    const addOnsData = useSelector((state: RootState) => state.addOns)

    const { t } = useTranslation('common')

    const router = useRouter()

    return (
        <div className={styles.summary}>
            <div className={styles.summaryBlock}>
                <div className={styles.planSection}>
                    <div className={styles.planDuration}>
                        <p className={styles.plan}>{getDurationValue('plan', planData.plan, planData.duration)}</p>
                        <Link href={'plan'} className={styles.change}>{t('summary.change')}</Link>
                    </div>

                    <p className={styles.price}>{getDurationValue('price', planData.plan, planData.duration)}</p>
                </div>

                <div className={styles.addOnSection}>
                    {addOnsData.onlineService && 
                        <Addon service='onlineService' />
                    }

                    {addOnsData.largerStorage && 
                        <Addon service='largerStorage' />
                    }

                    {addOnsData.customizableProfile && 
                        <Addon service='customizableProfile' />
                    }
                </div>
            </div>
            
            <div className={styles.total}>
                {checkIfDurationIsMonthly(planData.duration) ?
                    <p className={styles.totalTitle}>{t('summary.totalMonthly')}</p> :
                    <p className={styles.totalTitle}>{t('summary.totalYearly')}</p>
                }

                {checkIfDurationIsMonthly(planData.duration) ?
                    <p className={styles.totalPrice}>+${getTotal(planData.plan, planData.duration, addOnsData)}/mo</p> :
                    <p className={styles.totalPrice}>+${getTotal(planData.plan, planData.duration, addOnsData)}/yr</p>
                }
            </div>

            <div className={styles.buttons}>
                <button
                    className={styles.btnSecondary}
                    onClick={() => { router.back() }}
                >
                    {t('summary.goBackLabel')}
                </button>
                
                <button
                    className={styles.btn}
                    onClick={() => { router.push('/end') }}
                >
                    {t('summary.buttonLabel')}
                </button>
            </div>
        </div>
    )
}

export default SummaryContent
