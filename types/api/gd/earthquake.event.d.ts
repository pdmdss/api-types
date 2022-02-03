import { APIHead } from '../head';
import { Components } from '../../components';
import { APIStandardError } from '../error';

export namespace GDEarthquakeEvent {
  export type Method = 'GET';

  export interface QueryParams {
  }


  export interface Event extends Components.Earthquake.Event {
    telegrams: Components.Telegram.ItemJSONOnly[];
  }

  export interface ResponseOk extends APIHead {
    status: 'ok';
    event: Event;
  }

  export type ResponseError = APIStandardError;

  export type Response = ResponseOk | ResponseError;
}
