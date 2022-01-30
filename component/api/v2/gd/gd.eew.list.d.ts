import { APIV2Head } from '../head';
import { APIV2BaseError } from '../error';
import { EEW } from './c/eew';

export namespace APIV2GDEewList {
  export { EEW };

  export type Method = 'GET';

  export type QueryParams = {
    limit?: number;
    cursorToken?: string;
    datetime?: string;
  };


  export interface ResponseOk extends APIV2Head {
    status: 'ok';
    items: EEW.Item[];
    nextToken?: string;
  }

  export type ResponseError = APIV2BaseError;

  export type Response = ResponseOk | ResponseError;
}
