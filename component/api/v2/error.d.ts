import { APIV2Head } from './head';

export interface APIV2Error<Error extends string, ErrorCode extends number> extends APIV2Head {
  status: 'error';
  error: Error;
  code: ErrorCode;
}


export type APIV2BaseError =
  APIV2Error<'Not a valid API key.', 403> |
  APIV2Error<'Requests are not allowed.', 403>
