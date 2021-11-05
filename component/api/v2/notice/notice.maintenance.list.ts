import { APIV2Head } from '../head';
import { APIV2BaseError } from '../error';

export namespace APIV2NoticeMaintenanceList {
  export type Method = 'GET';

  export type QueryParams = {};

  export interface ResponseOk extends APIV2Head {
    status: 'ok';
    items: {
      id: number;
      title: string;
      kind: string;
      targetTime: {
        start: string;
        end: string;
      };
      updateTime: string;
      text: string | null;
    }[];
  }

  export type ResponseError = APIV2BaseError;

  export type Response = ResponseOk | ResponseError;
}
