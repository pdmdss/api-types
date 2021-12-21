import { APIV2Head } from '../head';
import { APIV2BaseError, APIV2Error } from '../error';
import { ClassificationValues } from '../../../classification';

export namespace APIV2SocketList {
  export type Method = 'GET';

  export type QueryParams = {
    id?: string;
    status?: 'waiting' | 'open' | 'closed';
    cursorToken?: string;
    limit?: number;
  };

  export interface ResponseOk extends APIV2Head {
    status: 'ok';
    items: {
      id: number;
      ticket: string | null;
      classifications: ClassificationValues[];
      test: 'including' | 'no';
      types: string[] | null;
      start: string;
      end: string | null;
      ping: string | null;
      ipAddress: string | null;
      server: string | null;
      appName: string | null;
      status: 'waiting' | 'open' | 'closed';
    }[];
    nextToken?: string;
  }

  export type ResponseError = APIV2BaseError | APIV2Error<string, 404>;

  export type APIV2SocketListResponse = ResponseOk | ResponseError;
}
