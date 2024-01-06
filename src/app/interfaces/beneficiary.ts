import { Client } from "./client";

export interface Beneficiary {
    id : string
    firstName  : string;
    lastName : string;
    phoneNumber : string;
    client: Client;
}
