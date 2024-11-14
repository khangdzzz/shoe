export interface ResponseApi<T> {
  data: T;
  messageCode?: number;
  messageText?: string;
  status: number;
  success: boolean;
}

export interface Header {
  label: string;
  width: string;
  isSort: boolean;
  key: string;
}
