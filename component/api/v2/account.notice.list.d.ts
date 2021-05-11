import { APIV2Head } from './head';
import { APIV2BaseError } from './error';

export namespace APIV2AccountNoticeList {
  export type Method = 'GET';

  export type QueryParams = {};

  export interface ResponseOk extends APIV2Head {
    status: 'ok';
    items: {
      id: number;
      title: string;
      time: string;
      isAlreadyRead: boolean;
    }[];
  }

  export type ResponseError = APIV2BaseError;

  export type Response = ResponseOk | ResponseError;
}
