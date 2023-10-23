import { Duration, PlanEnum } from '@/state/models/Plan.model'
import { useTranslation } from 'next-i18next'

const GetValue = (duration: Duration, value: string, plan: PlanEnum) => {
    const { t } = useTranslation('common')
    
    if (plan === PlanEnum.ARCADE) {
        if (value === 'plan') {
            return t(`summary.${duration}.arcade.title`)
        } else {
            return t(`summary.${duration}.arcade.price`)
        }
    } else if (plan === PlanEnum.ADVANCED) {
        if (value === 'plan') {
            return t(`summary.${duration}.advanced.title`)
        } else {
            return t(`summary.${duration}.advanced.price`)
        }
    } else {
        if (value === 'plan') {
            return t(`summary.${duration}.pro.title`)
        } else {
            return t(`summary.${duration}.pro.price`)
        }
    }
}

export default GetValue