import { APIV2Head } from './head';
import { APIV2BaseError } from './error';

export namespace APIV2OAuthClientGet {
  export type Method = 'GET';

  export type QueryParams = {};

  export interface ResponseOk extends APIV2Head {
    status: 'ok';
    id: number;
    client: {
      id: string;
      secret: string;
      type: 'confidential' | 'public';
      name: string;
      logo: string | null;
    };
    redirectUris: string[];
    allowed: {
      responseTypes: ('code' | 'token')[];
      grantTypes: ('authorization_code' | 'refresh_token' | 'client_credentials')[];
    };
    site: {
      homePageUri: string;
      termsUri: string;
      policyUri: string;
    };
    contacts: string[];
    createTime: string;
  }

  export type ResponseError = APIV2BaseError;

  export type Response = ResponseOk | ResponseError;
}
