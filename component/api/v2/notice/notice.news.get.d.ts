import { APIV2Head } from '../head';
import { APIV2BaseError } from '../error';

export namespace APIV2NoticeNewsGet {
  export type Method = 'GET';

  export type QueryParams = {};

  export interface ResponseOk extends APIV2Head {
    status: 'ok';
    news: {
      id: number;
      targets: string[];
      title: string;
      time: string;
      html: string;
      relation: number | null;
    };
    relations: {
      id: number;
      targets: string[];
      title: string;
      time: string;
      html: string;
      relation: number | null;
    }[];
  }

  export type ResponseError = APIV2BaseError;

  export type Response = ResponseOk | ResponseError;
}
