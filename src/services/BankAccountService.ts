import { BankAccountApiModel } from "../interfaces/apimodel/BankAccountApiModel";
import { CardChargeApiModel } from "../interfaces/apimodel/CardChargeApiModel";
import api from "./api";

export async function getBankAccountInfo(clientId: string) {
    if (!clientId) return null;

    try {
        const response = await api.get(`http://3.91.133.176:8082/bank-account/${clientId}`)
        return response.data;
    }
    catch (error) {
        console.log(error)
        return null;
    }
}

export async function getClientTransactions(clientId: string, size: number) {
    if (!clientId) return null;

    try {
        const response = await api.get(`http://3.91.133.176:8082/transaction/${clientId}?page=0&size=${size}`);
        return response.data.transactions;
    }
    catch (error) {
        console.log(error)
        return null;
    }
}

export async function depositValue(branch: string, accountNumber: string, request: BankAccountApiModel) {
    if (!branch || !accountNumber) return null;

    try {
        const response = await api.post(`http://3.91.133.176:8082/bank-account/deposit`, 
        request,
        {
            headers: { 'branch': branch,  'accountNumber': accountNumber}
        });
        return response;
    }
    catch (error) {
        console.log(error)
        return null;
    }
}

export async function chargeValue(clientId: string, request: CardChargeApiModel) {
    if (!clientId) return null;

    try {
        const response = await api.post(`http://3.91.133.176:8082/card/charge`, 
        request,
        {
            headers: { 'clientId': clientId}
        });
        return response;
    }
    catch (error) {
        console.log(error)
        return null;
    }
}