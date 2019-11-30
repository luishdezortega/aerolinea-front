export interface Response <T> {
    status: number;
    userMessage: string;
    developerMessage: string;
    errorCode: string;
    moreInfo: string;
    data: T[]
}