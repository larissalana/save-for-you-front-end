import { Category } from "./Category";

export interface SavingGoal {
    id: string;
    name: string;
    category: Category;
    targetAmount: number;
    targetAmountPretty: string;
    targetDate: string;
    targetDatePretty: string;
    currentAmount: number;
    currentAmountPretty: string;
    achievedDate: string;
    status: string;
    percentageAlreadySaved: number;
}