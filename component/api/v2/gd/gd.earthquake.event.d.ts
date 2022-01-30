import { APIV2Head } from '../head';
import { APIV2BaseError, APIV2Error } from '../error';
import { Telegram } from '../../../telegram';

export namespace APIV2GDEarthquakeEvent {
  export type Method = 'GET';

  export type QueryParams = {};

  export interface ResponseOk extends APIV2Head {
    status: 'ok';
    event: {
      id: number;
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
        source?: string;
      };
      magnitude?: {
        type: 'マグニチュード';
        unit: string;
        value: string | null;
        condition?: string;
      };
      maxInt: string | null;
      telegrams: Telegram[];
    };
  }

  export type ResponseError = APIV2BaseError | APIV2Error<string, 404>;

  export type Response = ResponseOk | ResponseError;
}
