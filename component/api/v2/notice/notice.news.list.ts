import { APIV2Head } from '../head';
import { APIV2BaseError } from '../error';

export namespace APIV2NoticeNewsList {
  export type Method = 'GET';

  export type QueryParams = {
    limit?: number;
  };

  export interface ResponseOk extends APIV2Head {
    status: 'ok';
    items: {
      id: number;
      targets: string[];
      title: string;
      time: string;
    }[];
  }

  export type ResponseError = APIV2BaseError;

  export type Response = ResponseOk | ResponseError;
}
