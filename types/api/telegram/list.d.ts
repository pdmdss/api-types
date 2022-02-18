import { APIHead } from '../head';
import { Components } from '../../components';
import { APIStandardError } from '../error';

export namespace TelegramList {
  export type Method = 'GET';

  export interface QueryParams {
    limit?: number;
    type?: string | string[];
    xmlReport?: 'true' | 'false';
    test?: 'including' | 'no' | 'only';
    formatMode?: 'raw' | 'json';
    datetime?: string;
    cursorToken?: string;
  }


  export interface Item extends Components.Telegram.Item {
  }

  export interface ResponseOk extends APIHead {
    status: 'ok';
    items: Item[];
    nextToken?: string;
    nextPooling?: string;
    nextPoolingInterval?: number;
  }

  export type ResponseError = APIStandardError;

  export type Response = ResponseError | ResponseOk;
}
