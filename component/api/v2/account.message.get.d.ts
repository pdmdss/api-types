import { APIV2Head } from './head';
import { APIV2BaseError } from './error';

export namespace APIV2AccountMessageGet {
  export type Method = 'GET';

  export type QueryParams = {};

  export interface ResponseOk extends APIV2Head {
    status: 'ok';
    notice: {
      id: number;
      title: string;
      time: string;
      importance: 'important' | 'normal';
      isAlreadyRead: boolean;
      text: string;
    };
  }

  export type ResponseError = APIV2BaseError;

  export type Response = ResponseOk | ResponseError;
}
