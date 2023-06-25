import api from "./api";

export async function getSavingGoals(clientId: string) {
    if (!clientId) return null;

    try {
        const response = await api.get(
            'http://44.204.43.115:8083/saving-goal',
            {
                headers: { 'clientId': clientId }
            }
        );

        return response.data;
    }
    catch (error) {
        return null;
    }
}

export async function getSavingGoalDetails(savingGoalId: string) {
    if (!savingGoalId) return null;

    try {
        const response = await api.get(`http://44.204.43.115:8083/saving-goal/${savingGoalId}/details`)
        return response.data;
    }
    catch (error) {
        console.log(error)
        return null;
    }
}