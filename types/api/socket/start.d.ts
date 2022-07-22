import { APIHead } from '../head';
import { Components } from '../../components';
import { APIError, APIStandardError } from '../error';

export namespace SocketStart {
  export type Method = 'POST';

  export interface QueryParams {
  }

  export interface RequestBodyJSON {
    classifications: (Components.Classification.Values | string)[];
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
    classifications: (Components.Classification.Values | string)[];
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
