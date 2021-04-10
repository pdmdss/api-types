import { APIV2BaseError, APIV2Error } from './error';
import { APIV2Head } from './head';

export namespace APIV2ApiKeyCreate {
  export type Method = 'POST';

  export type QueryParams = {};

  export interface ResponseOk extends APIV2Head {
    status: 'ok',
    id: number;
    name: null;
    key: string;
    createTime: string;
    scopes: [];
    allowed: {
      ipAddresses: [];
      originDomains: [];
    };
  }

  export type ResponseError = APIV2BaseError | APIV2Error<string, 422>;

  export type Response = ResponseOk | ResponseError;
}
