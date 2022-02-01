import { APIHead } from './head';

export interface APIError<Error extends string, ErrorCode extends number> extends APIHead {
  status: 'error';
  error: {
    message: Error;
    code: ErrorCode;
  };
}


export type APIStandardError =
  APIError<'The query parameters are required.', 400> |
  APIError<'The post parameters are required.', 400> |
  APIError<'Unexpected data of search query `cursorToken`.', 400> |
  APIError<'Authentication required.', 401> |
  APIError<'AInsufficient scope for ... .', 403> |
  APIError<'Does not match the configured IP or Request Origin.', 403>;
