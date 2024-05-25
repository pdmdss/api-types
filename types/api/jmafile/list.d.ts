import { APIHead } from '../head';
import { WebSocketV2 } from '../websocket/v2';
import { APIStandardError } from '../error';

export namespace JmaFileList {
  export type Method = 'GET';

  export interface QueryParams {
    limit?: number;
    type?: string | string[];
    datetime?: string;
    cursorToken?: string;
  }

  interface Item {
    id: string;
    serial: string;
    classification: string;
    headers: WebSocketV2.JmaFileHead[];
    compression: 'gzip' | null;
    url: string;
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
