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

export interface Jobs {
  companyId: number;
  createdAt: string;
  errorMessage: string;
  jobId: string;
  status: number; // 3: success, 2: failed, 1: processing
  updatedAt: string;
}
