import { APIV2Head } from './head';
import { APIV2BaseError, APIV2Error } from './error';
import { ClassificationValues } from '../../classification';

export type APIV2SocketListQueryParams = {
  id?: string;
  status?: string;
  cursorToken?: string;
  limit?: number;
};

export interface APIV2SocketListResponseOk extends APIV2Head {
  status: 'ok';
  items: {
    id: number;
    ticket: string | null;
    classifications: ClassificationValues[];
    test: 'including' | 'no';
    dataTypes: string[] | null;
    start: Date;
    end: Date | null;
    ping: Date | null;
    ipAddress: string;
    server: string | null;
    tags: { [key: string]: string | number | null };
    status: 'waiting' | 'open' | 'closed';
  }[];
  nextToken?: string;
}

export type APIV2SocketListResponseError = APIV2BaseError | APIV2Error<string, 404>;

export type APIV2SocketListResponse = APIV2SocketListResponseOk | APIV2SocketListResponseError;
