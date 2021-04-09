import { APIV2Head } from './head';
import { APIV2BaseError } from './error';

export namespace APIV2OAuthClientList {
  export type Method = 'GET';

  export type QueryParams = {};

  export interface ResponseOk extends APIV2Head {
    status: 'ok';
    items: {
      id: number;
      client: {
        type: 'confidential' | 'public';
        name: string;
      };
      createTime: string;
    }[];
  }

  export type ResponseError = APIV2BaseError;

  export type Response = ResponseOk | ResponseError;
}
