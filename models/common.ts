export interface ResponseApi<T> {
    data: T;
    messageCode?: number;
    messageText?: string;
    status: number
    success: boolean
}
