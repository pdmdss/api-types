import { APIV2Head } from './head';
import { APIV2BaseError, APIV2Error } from './error';
import { XmlReport } from '../../xml.report';
import { ClassificationValues } from '../../classification';

export namespace APIV2EarthquakeEvent {
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
      telegrams: {
        id: string;
        originalId: string;
        serial: number;
        classification: ClassificationValues;
        head: {
          type: 'VXSE51' | 'VXSE52' | 'VXSE53' | 'VXSE61';
          author: string;
          time: string;
          designation: string | null;
          test: boolean;
        };
        receivedTime: string;
        xmlReport: XmlReport;
        format: 'json'
        schema: {
          type: string;
          version: string;
        };
        url: string;
      }[];
    };
  }

  export type ResponseError = APIV2BaseError | APIV2Error<string, 404>;

  export type Response = ResponseOk | ResponseError;
}
