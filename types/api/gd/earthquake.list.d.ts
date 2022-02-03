import { APIHead } from '../head';
import { APIError, APIStandardError } from '../error';
import { Components } from '../../components';

export namespace GDEarthquakeList {
  export type Method = 'GET';

  export interface QueryParams {
    limit?: number;
    cursorToken?: string;
    hypocenter?: string;
    maxInt?: string;
    date?: string;
    datetime?: string;
  }


  export interface ResponseOk extends APIHead {
    status: 'ok';
    items: Components.Earthquake.Event[];
    nextToken?: string;
    nextPooling?: string;
    nextPoolingInterval?: number;

  }

  export type ResponseError = APIStandardError |
    APIError<string, 404>;

  export type Response = ResponseOk | ResponseError;
}
