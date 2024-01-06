export interface Transfer {
    id: string;
    reference: string;
    transferAmount: BigInteger;
    transferType: string;
    transferReason: string;
    transferState: string;
    transferDate: Date;
    expirationDate: Date;
    updatedAt: Date;
    agentId: string;
    clientId: string;
    recipientId: string;
    transferNotification: Boolean;
    otpCode: string;
    pinCode: string;
}
