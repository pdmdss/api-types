import { APIHead } from '@t/api/head';
import { Components } from '@t/components';
import { APIError, APIStandardError } from '@t/api/error';

export namespace SocketStart {
  export type Method = 'POST';

  export interface QueryParams {
  }

  export interface RequestBodyJSON {
    classifications: Components.Classification.Values[],
    types?: string[];
    test?: 'including' | 'no';
    appName?: string;
    formatMode?: 'raw' | 'json';
  }


  export interface ResponseOk extends APIHead {
    status: 'ok';
    ticket: string;
    websocket: {
      id: number;
      url: string;
      protocol: ['dmdata.v2'];
      expiration: number;
    };
    classifications: Components.Classification.Values[];
    test: 'including' | 'no';
    types: string[] | null;
    formats: ('xml' | 'a/n' | 'binary' | 'json')[];
    appName: string | null;
  }

  export type ResponseError = APIStandardError |
    APIError<string, 404> |
    APIError<string, 412>;

  export type Response = ResponseError | ResponseOk;
}
