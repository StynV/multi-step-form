import { Duration, PlanEnum } from '@/state/models/Plan.model'
import checkIfDurationIsMonthly from './checkIfDurationIsMonthly'
import getValue from './getValue'

const getDurationValue = (value: string, plan: PlanEnum, duration: Duration) => {
    if (checkIfDurationIsMonthly(duration)) {
        return getValue(Duration.MONTHLY, value, plan)
    } else {
        return getValue(Duration.YEARLY, value, plan)
    }
}

export default getDurationValue