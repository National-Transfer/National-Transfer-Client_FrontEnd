import { Beneficiary } from "./beneficiary";

export interface Client {
    id: string;
    title: string;
    firstName: string;
    identityType: string;
    countryOfIssue: string;
    identityNumber: string;
    identityValidity: Date;
    dateOfBirth: Date;
    profession: string;
    nationality: string;
    countryOfAddress: string;
    address: string;
    city: string;
    phoneNumber: string;
    email: string;
    createdTime: Date;
    lastUpdatedTime : Date;
    beneficiaries: Beneficiary;
}
