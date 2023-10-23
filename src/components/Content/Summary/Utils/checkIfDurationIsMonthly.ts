import { Duration } from '@/state/models/Plan.model'

const checkIfDurationIsMonthly = (duration: Duration) => {
    return duration === Duration.MONTHLY
}

export default checkIfDurationIsMonthly