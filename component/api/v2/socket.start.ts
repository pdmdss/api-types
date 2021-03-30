import { APIV2Head } from './head';
import { APIV2BaseError, APIV2Error } from './error';
import { ClassificationValues } from '../../classification';

export namespace APIV2SocketStart {
  export type Method = 'POST';
  export type RequestContentType = 'application/json';

  export type QueryParams = {};

  export type RequestBodyJSON = {
    classifications: ClassificationValues[],
    types?: string[];
    test?: 'including' | 'no';
    tags?: { [key: string]: string | number | null };
    formatMode?: 'raw';
  };

  export interface ResponseOk extends APIV2Head {
    status: 'ok';
    ticket: string;
    websocket: {
      id: number;
      url: string;
      protocol: ['dmdata.v2'];
      expiration: number;
    }
    classifications: ClassificationValues[];
    test: 'including' | 'no';
    types: string[] | null;
    formats: ('xml' | 'a/n' | 'binary' | 'json')[];
    tags: { [key: string]: string | number | null };
  };

  export type ResponseError =
    APIV2BaseError
    | APIV2Error<string, 404>
    | APIV2Error<'No contract.', 412>;

  export type Response = ResponseOk | ResponseError;
}
