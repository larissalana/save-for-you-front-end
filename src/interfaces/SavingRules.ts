export interface SavingRules {
    id: string;
    name: string;
    description: string;
    detailedDescription: number;
    category: string;
    color: string;
    icon: string;
    type: string;
    status: string;
    savingRuleAutomationId?: string;
    hasAutomationEnabled: boolean;
    isRecommended: boolean;
}