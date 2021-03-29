import { APIV2Head } from './head';
import { APIV2BaseError, APIV2Error } from './error';

export namespace APIV2ApiKeyCreate {
  export type Method = 'POST';

  export type QueryParams = {};

  export interface ResponseOk extends APIV2Head {
    status: 'ok',
    apikey: {
      id: number;
      name: null;
      key: string;
      createTime: string;
      scope: [];
      allowed: {
        ipAddress: [];
        originDomain: [];
      };
    };
  }

  export type ResponseError = APIV2BaseError | APIV2Error<string, 422>;

  export type Response = ResponseOk | ResponseError;
}