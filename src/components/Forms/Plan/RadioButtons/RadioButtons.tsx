import { PlanEnum } from '@/state/models/Plan.model'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import styles from './radio-buttons.module.scss'

const RadioButtons = (
    { handleClick, selectedPlan, selectedDuration }:
        {
            handleClick: (value: PlanEnum) => void,
            selectedPlan: string,
            selectedDuration: boolean
        }
) => {
    const { t } = useTranslation('common')

    return (
        <div className={styles.radioButtons}>
            <div
                onClick={() => handleClick(PlanEnum.ARCADE)}
                className={`${styles.customRadioButton} ${selectedPlan === PlanEnum.ARCADE ? styles.selected : null}`}
            >
                <Image
                    src="/images/icon-arcade.svg"
                    alt="Arcade"
                    width={40}
                    height={40}
                    className={styles.icon}
                />

                <div className={styles.text}>
                    <p className={styles.title}>{t('plan.arcade.title')}</p>
                    {selectedDuration ?
                        <p className={styles.price}>{t('plan.arcade.monthlyPrice')}</p> :
                        <>
                            <p className={styles.price}>{t('plan.arcade.yearlyPrice')}</p>
                            <p className={styles.free}>{t('plan.arcade.yearlyFree')}</p>
                        </>
                    }
                </div>
            </div>

            <div
                onClick={() => handleClick(PlanEnum.ADVANCED)}
                className={`${styles.customRadioButton} ${selectedPlan === PlanEnum.ADVANCED ? styles.selected : null}`}
            >
                <Image
                    src="/images/icon-advanced.svg"
                    alt="Arcade"
                    width={40}
                    height={40}
                    className={styles.icon}
                />

                <div className={styles.text}>
                    <p className={styles.title}>{t('plan.advanced.title')}</p>
                    {selectedDuration ?
                        <p className={styles.price}>{t('plan.advanced.monthlyPrice')}</p> :
                        <>
                            <p className={styles.price}>{t('plan.advanced.yearlyPrice')}</p>
                            <p className={styles.free}>{t('plan.advanced.yearlyFree')}</p>
                        </>
                    }
                </div>
            </div>

            <div
                onClick={() => handleClick(PlanEnum.PRO)}
                className={`${styles.customRadioButton} ${selectedPlan === PlanEnum.PRO ? styles.selected : null}`}
            >
                <Image
                    src="/images/icon-pro.svg"
                    alt="Arcade"
                    width={40}
                    height={40}
                    className={styles.icon}
                />
                
                <div className={styles.text}>
                    <p className={styles.title}>{t('plan.pro.title')}</p>
                    {selectedDuration ?
                        <p className={styles.price}>{t('plan.pro.monthlyPrice')}</p> :
                        <>
                            <p className={styles.price}>{t('plan.pro.yearlyPrice')}</p>
                            <p className={styles.free}>{t('plan.pro.yearlyFree')}</p>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default RadioButtons
