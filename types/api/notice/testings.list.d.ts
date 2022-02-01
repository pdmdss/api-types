import { APIStandardError } from '@t/api/error';
import { APIHead } from '@t/api/head';

export namespace NoticeTestingsList {
  export type Method = 'GET';

  export interface QueryParams {
    limit?: number;
    cursorToken?: string;
  }


  export interface Item {
    id: number;
    title: string;
    classification: string;
    targetTime: {
      start: string;
      end: string;
    };
    updateTime: string;
    text: string | null;
    url: string;
  }

  export interface ResponseOk extends APIHead {
    status: 'ok';
    items: Item[];
  }

  export type ResponseError = APIStandardError;

  export type Response = ResponseOk | ResponseError;
}
