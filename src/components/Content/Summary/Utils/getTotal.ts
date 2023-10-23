import { AddOns } from '@/state/models/AddOns.model'
import { Duration, PlanEnum } from '@/state/models/Plan.model'
import checkIfDurationIsMonthly from './checkIfDurationIsMonthly'

const getTotal = (plan: PlanEnum, duration: Duration, addOnsData: AddOns): number => {
    let totalPrice = 0

    if (checkIfDurationIsMonthly(duration)) {
        if (plan === PlanEnum.ARCADE) {
            totalPrice += 9
        } else if (plan === PlanEnum.ADVANCED) {
            totalPrice += 12
        } else {
            totalPrice += 15
        }
    } else {
        if (plan === PlanEnum.ARCADE) {
            totalPrice += 90
        } else if (plan === PlanEnum.ADVANCED) {
            totalPrice += 120
        } else {
            totalPrice += 150
        }
    }

    if (addOnsData.onlineService) {
        totalPrice += 1
    }

    if (addOnsData.largerStorage) {
        totalPrice += 2
    }

    if (addOnsData.customizableProfile) {
        totalPrice += 2
    }

    return totalPrice
}

export default getTotal