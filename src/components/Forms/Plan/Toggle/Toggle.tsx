import styles from './toggle.module.scss'

const Toggle = (
    { setSelectedDuration }:
        {
            setSelectedDuration: (value: any) => void,
        }
) => (
    <label className={styles.switch}>
        <input type="checkbox" onChange={() => setSelectedDuration((value: any) => !value)} />
        <span className={`${styles.slider} ${styles.round}`}></span>
    </label>
)

export default Toggle
