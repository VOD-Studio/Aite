export type Status = 'ok';

export interface BaseResponse<T> {
  status: Status;
  message: string;
  data: T;
}
