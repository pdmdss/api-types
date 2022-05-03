import { APIHead } from '../head';
import { APIStandardError } from '../error';

export namespace StatisticsList {
  export type Method = 'GET';

  export interface QueryParams {
    datetime?: string;
    limit?: number;
  }

  export interface ModuleRequest {
    sumStatus2xx: number;
    sumStatus4xx: number;
    sumStatus5xx: number;
    sumProcessedTime: number;
  }

  export interface Module {
    module: string;
    requests: ModuleRequest;
  }

  export interface Item {
    targetTime: string;
    modules: Module[];
  }

  export interface ResponseOk extends APIHead {
    status: 'ok';
    items: Item[];
  }

  export type ResponseError = APIStandardError;

  export type Response = ResponseError | ResponseOk;
}
