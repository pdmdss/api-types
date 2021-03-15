import { APIV2BaseError, APIV2Error } from './error';

export type APIV2SocketCloseQueryParams = {
  id: string;
};

export interface APIV2SocketCloseResponseOk {}

export type APIV2SocketCloseResponseError = APIV2BaseError | APIV2Error<string, 404>;

export type APIV2SocketCloseResponse = APIV2SocketCloseResponseOk | APIV2SocketCloseResponseError;
