import { APIHead } from '../head';
import { Components } from '../../components';
import { APIStandardError } from '../error';

export namespace GDEewEvent {
  export type Method = 'GET';

  export interface QueryParams {
    limit?: number;
    cursorToken?: string;
    datetime?: string;
  }


  export interface Event extends Components.Eew.Event {
  }

  export interface ResponseOk extends APIHead {
    status: 'ok';
    items: Event[];
  }

  export type ResponseError = APIStandardError;

  export type Response = ResponseOk | ResponseError;
}
