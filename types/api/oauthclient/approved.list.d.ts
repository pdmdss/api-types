import { APIStandardError } from '../error';
import { APIHead } from '../head';

export namespace OAuthClientApprovedList {
  export type Method = 'GET';

  export interface QueryParams {
    limit?: string;
    cursorToken?: string;
  }


  export interface Client {
    id: number;
    name: string;
    logo: string | null;
    site: string;
    contacts: string[];
  }

  export interface Item {
    id: number;
    client: Client;
    scopes: string[];
    startTime: string;
    lastTime: string;
    ipAddress: string;
  }

  export interface ResponseOk extends APIHead {
    status: 'ok';
    items: Item[];
    nextToken?: string;
  }

  export type ResponseError = APIStandardError;

  export type Response = ResponseOk | ResponseError;
}
