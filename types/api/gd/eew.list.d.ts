import { APIHead } from '../head';
import { Components } from '../../components';
import { APIStandardError } from '../error';

export namespace GDEewList {
  export type Method = 'GET';

  export interface QueryParams {
    limit?: number;
    cursorToken?: string;
    datetime?: string;
  }


  export interface Event extends Components.Eew.Event {
    telegrams: [Components.Telegram.ItemJSONOnly];
  }

  export interface ResponseOk extends APIHead {
    status: 'ok';
    items: Event[];
    nextToken?: string;
  }

  export type ResponseError = APIStandardError;

  export type Response = ResponseOk | ResponseError;
}
