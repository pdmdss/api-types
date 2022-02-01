import { APIError, APIStandardError } from '@t/api/error';
import { APIHead } from '@t/api/head';

export namespace NoticeNewsGet {
  export type Method = 'GET';

  export interface QueryParams {
  }


  export interface Item {
    id: number;
    targets: string[];
    title: string;
    time: string;
    html: string;
    relation: number | null;
  }

  export interface ResponseOk extends APIHead {
    status: 'ok';
    news: Item;
    relations: Item[];
  }

  export type ResponseError = APIStandardError |
    APIError<string, 404>;

  export type Response = ResponseOk | ResponseError;
}
