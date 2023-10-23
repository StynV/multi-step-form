import { useTranslation } from 'next-i18next'
import { Dispatch, SetStateAction } from 'react'
import styles from './option.module.scss'

const Option = (
    { value, valueLabel, setValue }:
        {
            value: boolean,
            valueLabel: string,
            setValue: Dispatch<SetStateAction<boolean>>
        }
) => {
    const { t } = useTranslation('common')

    return (
        <div
            className={`${styles.option} ${value && styles.selected}`}
            onClick={() => { setValue(value => !value) }}
        >
            <input
                type="checkbox"
                checked={value}
                onChange={() => { setValue(value => !value) }}
                className={styles.checkbox}
            />
            
            <div className={styles.text}>
                <p>{t(`addOns.${valueLabel}.title`)}</p>
                <p>{t(`addOns.${valueLabel}.description`)}</p>
            </div>

            <p className={styles.price}>{t(`addOns.${valueLabel}.price`)}</p>
        </div>
    )
}

export default Option