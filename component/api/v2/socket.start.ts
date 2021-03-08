import { APIV2Head } from './head';
import { APIV2BaseError, APIV2Error } from './error';
import { ClassificationValues } from '../../classification';

export type APIV2SocketStartQueryParams = {};

export type APIV2SocketStartRequestBodyJSON = {
  classifications: ClassificationValues[],
  dataTypes?: string[];
  test?: boolean;
  tags?: { [key: string]: string | number | null };
};

export interface APIV2SocketStartResponseOk extends APIV2Head {
  status: 'ok';
  ticket: string;
  websocket: {
    id: number;
    url: string;
    protocol: ['jma.telegram'];
    expiration: number;
  }
  classifications: ClassificationValues[];
  test: 'including' | 'no';
  dataTypes: string[] | null;
  tags: { [key: string]: string | number | null };
};

export type APIV2SocketStartResponseError = APIV2BaseError | APIV2Error<string, 404> | APIV2Error<'No contract.', 412>;

export type APIV2SocketStartResponse = APIV2SocketStartResponseOk | APIV2SocketStartResponseError;
