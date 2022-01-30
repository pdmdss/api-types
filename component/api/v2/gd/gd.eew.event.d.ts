import { APIV2Head } from '../head';
import { APIV2BaseError } from '../error';
import { EEW } from './c/eew';
import { Telegram } from '../../../telegram';

export namespace APIV2GDEewEvent {
  export { EEW };

  export type Method = 'GET';

  export type QueryParams = {};

  export type Event = EEW.Item & {
    telegrams: Telegram[];
  }

  export interface ResponseOk extends APIV2Head {
    status: 'ok';
    event: Event;
  }

  export type ResponseError = APIV2BaseError;

  export type Response = ResponseOk | ResponseError;
}
