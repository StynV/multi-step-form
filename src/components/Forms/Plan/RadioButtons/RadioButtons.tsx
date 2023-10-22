import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import styles from './radio-buttons.module.scss'

const RadioButtons = (
    { handleClick, selectedPlan, selectedDuration }:
        {
            handleClick: (value: string) => void,
            selectedPlan: string,
            selectedDuration: boolean
        }
) => {
    const { t } = useTranslation('common')

    return (
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

                <div className={styles.text}>
                    <p className={styles.title}>{t('plan.arcade.title')}</p>
                    {selectedDuration ?
                        <p className={styles.price}>{t('plan.arcade.montlyPrice')}</p> :
                        <>
                            <p className={styles.price}>{t('plan.arcade.yearlyPrice')}</p>
                            <p className={styles.free}>{t('plan.arcade.yearlyFree')}</p>
                        </>
                    }
                </div>
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

                <div className={styles.text}>
                    <p className={styles.title}>{t('plan.advanced.title')}</p>
                    {selectedDuration ?
                        <p className={styles.price}>{t('plan.advanced.montlyPrice')}</p> :
                        <>
                            <p className={styles.price}>{t('plan.advanced.yearlyPrice')}</p>
                            <p className={styles.free}>{t('plan.advanced.yearlyFree')}</p>
                        </>
                    }
                </div>
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
                
                <div className={styles.text}>
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
        </div>
    )
}

export default RadioButtons
