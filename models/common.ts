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

export interface Job {
  errorMessage: string;
  jobId: string;
  status: number; // 3: success, 2: failed, 1: processing
  updatedAt: string;
}

export interface LastJobResponse {
  companyId: number;
  requestReport: Job;
  requestUpdate: Job;
}
