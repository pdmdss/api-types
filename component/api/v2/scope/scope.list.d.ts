import { APIV2Head } from '../head';

export namespace APIV2ScopeList {
  export type Method = 'GET';

  export type QueryParams = {
    id?: string;
  };

  export interface ResponseOk extends APIV2Head {
    status: 'ok';
    items: {
      id: number;
      scope: string;
      name: string;
      types: ('apikey' | 'oauth' | 'secret')[];
      description: string;
    }[];
  }

  export type Response = ResponseOk;
}
