import { APIHead } from '@t/api/head';
import { Components } from '@t/components';
import { APIStandardError } from '@t/api/error';

export namespace SocketList {
  export type Method = 'GET';

  export interface QueryParams {
    id?: string;
    status?: 'waiting' | 'open' | 'closed';
    cursorToken?: string;
    limit?: number;
  }


  export interface Item {
    id: number;
    ticket: string | null;
    classifications: Components.Classification.Values[];
    test: 'including' | 'no';
    types: string[] | null;
    start: string;
    end: string | null;
    ping: string | null;
    ipAddress: string | null;
    server: string | null;
    appName: string | null;
    status: 'waiting' | 'open' | 'closed';
  }

  export interface ResponseOk extends APIHead {
    status: 'ok';
    items: Item[];
    nextToken?: string;
  }

  export type ResponseError = APIStandardError;

  export type Response = ResponseError | ResponseOk;
}
