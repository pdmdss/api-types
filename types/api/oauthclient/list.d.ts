import { APIStandardError } from '@t/api/error';
import { APIHead } from '@t/api/head';

export namespace OAuthClientList {
  export type Method = 'GET';

  export interface QueryParams {
    limit?: string;
    cursorToken?: string;
  }


  export interface Client {
    id: string;
    type: 'confidential' | 'public';
    name: string;
  }

  export interface Item {
    id: number;
    client: Client;
    createTime: string;
  }

  export interface ResponseOk extends APIHead {
    status: 'ok';
    items: Item[];
    nextToken?: string;
  }

  export type ResponseError = APIStandardError;

  export type Response = ResponseOk | ResponseError;
}
