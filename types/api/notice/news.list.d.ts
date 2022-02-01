import { APIStandardError } from '@t/api/error';
import { APIHead } from '@t/api/head';

export namespace NoticeNewsList {
  export type Method = 'GET';

  export interface QueryParams {
    limit?: number;
    cursorToken?: string;
  }


  export interface Item {
    id: number;
    targets: string[];
    title: string;
    time: string;
  }

  export interface ResponseOk extends APIHead {
    status: 'ok';
    items: Item[];
  }

  export type ResponseError = APIStandardError;

  export type Response = ResponseOk | ResponseError;
}
