export interface Plan {
    plan: PlanEnum;
    duration: Duration;
}

export enum PlanEnum {
    ARCADE = 'arcade',
    ADVANCED = 'advanced',
    PRO = 'pro'
}

export enum Duration {
    MONTHLY = 'monthly',
    YEARLY = 'yearly'
}