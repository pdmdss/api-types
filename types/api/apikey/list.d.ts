import { APIHead } from '../head';
import { APIStandardError } from '../error';
import { Components } from '../../components';

export namespace ApikeyList {
  export type Method = 'GET';

  export interface QueryParams {
    limit?: string;
    cursorToken?: string;
  }


  export interface Item extends Omit<Components.Apikey, 'scopes' | 'allowed'> {
    isProtection: boolean;
  }

  export interface ResponseOk extends APIHead {
    status: 'ok';
    items: Item[];
    nextToken?: string;
  }

  export type ResponseError = APIStandardError;

  export type Response = ResponseOk | ResponseError;
}
