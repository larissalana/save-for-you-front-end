import api from "./api";

export async function getSavingRules(savingGoalId: string) {
    if (!savingGoalId) return null;

    try {
        const response = await api.get(`http://44.204.43.115:8083/saving-rule/category?category=DEPOSIT`,
        {
            headers: { 'savingGoalId': savingGoalId }
        })
        return response.data;
    }
    catch (error) {
        console.log(error)
        return null;
    }
}

export async function getSavingRuleAutomationConfigurations(savingRuleAutomationId: string) {
    if (!savingRuleAutomationId) return null;

    try {
        const response = await api.get(`http://44.204.43.115:8083/saving-rule-automation/${savingRuleAutomationId}`)
        return response.data;
    }
    catch (error) {
        console.log(error)
        return null;
    }
}

export async function getSavingRuleTransactions(savingGoalId: string, savingRuleId: string) {
    if (!savingGoalId || !savingRuleId) return null;

    try {
        const response = await api.get(`http://44.204.43.115:8083/saving-rule-automation/transaction?page=0&size=20`,
        {
            headers: { 'savingGoalId': savingGoalId, 'savingRuleId': savingRuleId }
        })
        return response.data;
    }
    catch (error) {
        console.log(error)
        return null;
    }
}