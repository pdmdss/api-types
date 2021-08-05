import { APIV2BaseError } from './error';

export namespace APIV2OAuthClientUpdate {
  export type Method = 'PUT';
  export type RequestContentType = 'application/json';

  export type QueryParams = {};

  export type RequestBodyJSON = {
    client: {
      name: string;
      logo: string | null;
    }
    redirectUris: string[];
    allowed: {
      responseTypes: ('code' | 'token')[];
      grantTypes: ('authorization_code' | 'refresh_token' | 'client_credentials')[];
      scopes: string[];
    };
    site: {
      homePageUri: string;
      termsUri: string;
      policyUri: string;
    };
    contacts: string[];
  };


  export interface ResponseOk {
  }

  export type ResponseError = APIV2BaseError;

  export type Response = ResponseOk | ResponseError;
}
