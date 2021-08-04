import { APIV2Head } from './head';
import { APIV2BaseError } from './error';

export namespace APIV2EarthquakeList {
  export type Method = 'GET';

  export type QueryParams = {
    limit?: number;
    cursorToken?: string;
    hypocenterCode?: string;
    maxIntTo?: string;
    date?: string;
  };

  export interface ResponseOk extends APIV2Head {
    status: 'ok';
    items: {
      eventId: string;
      originTime?: string;
      arrivalTime: string;
      hypocenter?: {
        name: string;
        code: string;
        coordinate: {
          latitude?: {
            text: string;
            value: string
          };
          longitude?: {
            text: string;
            value: string
          };
          height?: {
            type: '高さ';
            unit: 'm';
            value: string;
          };
          geodeticSystem?: string;
          condition?: string;
        };
        depth: {
          type: '深さ';
          unit: 'km';
          value: string | null;
          condition?: string;
        };
        detailed?: {
          code: string;
          name: string;
        };
        auxiliary?: {
          text: string;
          code: string;
          name: string;
          direction: string;
          distance: {
            unit: 'km';
            value: string;
          };
        };
      };
      magnitude?: {
        type: 'マグニチュード';
        unit: string;
        value: string | null;
        condition?: string;
      };
      maxInt: string | null;
    }[];
  }

  export type ResponseError = APIV2BaseError;

  export type Response = ResponseOk | ResponseError;
}
