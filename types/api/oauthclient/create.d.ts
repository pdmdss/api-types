import { APIError, APIStandardError } from '@t/api/error';
import { APIHead } from '@t/api/head';

export namespace OAuthClientCreate {
  export type Method = 'POST';

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
  }


  export interface Item {
    id: number;
    client: Client;
    createTime: string;
  }

  export interface ResponseOk extends APIHead {
    status: 'ok';
    oauthclient: Item;
  }

  export type ResponseError = APIStandardError |
    APIError<string, 400> |
    APIError<string, 422>;

  export type Response = ResponseOk | ResponseError;
}
