import { APIStandardError } from '@t/api/error';
import { APIHead } from '@t/api/head';

export namespace OAuthClientGet {
  export type Method = 'GET';

  export interface QueryParams {
  }

  export interface RequestBodyJSON {
    client: {
      type: 'confidential' | 'public';
    };
  }


  export interface Client {
    id: string;
    secret: string | null;
    type: 'confidential' | 'public';
    name: string;
    logo: string | null;
  }

  export interface Allowed {
    responseTypes: ('code' | 'token')[];
    grantTypes: ('authorization_code' | 'refresh_token' | 'client_credentials')[];
    scopes: string[];
  }

  export interface Site {
    homePageUri: string;
    termsUri: string;
    policyUri: string;
  }

  export interface Item {
    id: number;
    client: Client;
    redirectUris: string[];
    allowed: Allowed;
    site: Site;
    contacts: string[];
    createTime: string;
  }

  export interface ResponseOk extends APIHead {
    status: 'ok';
    oauthclient: Item;
  }

  export type ResponseError = APIStandardError;

  export type Response = ResponseOk | ResponseError;
}
