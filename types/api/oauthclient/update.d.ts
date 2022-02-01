import { APIError, APIStandardError } from '@t/api/error';

export namespace OAuthClientUpdate {
  export type Method = 'PUT';

  export interface QueryParams {
  }


  export interface PutClient {
    name: string;
    logo: string | null;
  }

  export interface PutAllowed {
    responseTypes: ('code' | 'token')[];
    grantTypes: ('authorization_code' | 'refresh_token' | 'client_credentials')[];
    scopes: string[];
  }

  export interface PutSite {
    homePageUri: string;
    termsUri: string;
    policyUri: string;
  }

  export interface RequestBodyJSON {
    client: PutClient;
    redirectUris: string[];
    allowed: PutAllowed;
    site: PutSite;
    contacts: string[];
  }

  export interface ResponseOk {
  }

  export type ResponseError = APIStandardError |
    APIError<string, 400> |
    APIError<string, 404>;

  export type Response = ResponseOk | ResponseError;
}
