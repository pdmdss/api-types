import { APIHead } from '../head';

export namespace ScopeList {
  export type Method = 'GET';

  export interface QueryParams {
    type?: 'apikey' | 'oauth' | 'secret';
  }


  export interface Item {
    id: number;
    scope: string;
    name: string;
    types: ('apikey' | 'oauth' | 'secret')[];
    description: string;
  }

  export interface ResponseOk extends APIHead {
    status: 'ok';
    items: Item[];
  }

  export type Response = ResponseOk;
}
