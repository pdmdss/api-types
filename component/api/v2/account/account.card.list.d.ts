import { APIV2Head } from '../head';
import { APIV2BaseError } from '../error';

export namespace APIV2AccountCardList {
  export type Method = 'GET';

  export type QueryParams = {};

  export interface ResponseOk extends APIV2Head {
    status: 'ok';
    items: {
      id: number;
      brand: string;
      numberLast4: string;
      createTime: string;
      expiration: string;
      priority: boolean;
    }[];
  }

  export type ResponseError = APIV2BaseError;

  export type Response = ResponseOk | ResponseError;
}