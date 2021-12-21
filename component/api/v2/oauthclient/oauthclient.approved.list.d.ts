import { APIV2Head } from '../head';
import { APIV2BaseError } from '../error';

export namespace APIV2OAuthClientApprovedList {
  export type Method = 'GET';

  export type QueryParams = {};

  export interface ResponseOk extends APIV2Head {
    status: 'ok';
    items: {
      id: number;
      client: {
        id: number;
        name: string;
        logo: string | null;
        site: string;
        contacts: string[];
      };
      scopes: string[];
      startTime: string;
      lastTime: string;
      ipAddress: string;
    }[];
  }

  export type ResponseError = APIV2BaseError;

  export type Response = ResponseOk | ResponseError;
}
