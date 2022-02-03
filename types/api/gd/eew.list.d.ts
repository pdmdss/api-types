import { APIHead } from '@t/api/head';
import { Components } from '@t/components';
import { APIStandardError } from '@t/api/error';

export namespace GDEewList {
  export type Method = 'GET';

  export interface QueryParams {
  }


  export interface Event extends Components.Eew.Event {
    telegrams: [Components.Telegram.ItemJSONOnly];
  }

  export interface ResponseOk extends APIHead {
    status: 'ok';
    items: Event[];
  }

  export type ResponseError = APIStandardError;

  export type Response = ResponseOk | ResponseError;
}
