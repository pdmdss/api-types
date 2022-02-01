import { APIHead } from '@t/api/head';
import { Components } from '@t/components';
import { APIStandardError } from '@t/api/error';

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
