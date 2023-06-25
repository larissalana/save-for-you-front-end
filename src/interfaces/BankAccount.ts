import { Client } from "./Client";

export interface BankAccount {
    branch: string;
    accountNumber: string;
    balance: number,
    balancePretty: string,
    type: string;
    status: string;
    client?: Client;
}