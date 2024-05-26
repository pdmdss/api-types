import { APIHead } from '../head';
import { Components } from '../../components';
import { APIStandardError } from '../error';

export namespace JmaFileList {
  export type Method = 'GET';

  export interface QueryParams {
    limit?: number;
    type?: string | string[];
    datetime?: string;
    cursorToken?: string;
  }

  export type HeaderValue1 = 'ICE' | 'MET' | 'MSG' | 'NOWC' | 'OBS' | 'OCN' | 'RDR' | 'SRF' | 'TID' | 'WAV';
  export type HeaderValue2 = 'AMDS' | 'AMDSCC' | 'AMDSRR' | 'CHT' | 'GPV' | 'INF' | 'SAT' | 'SEQ';

  export interface Header {
    filename: string;
    author: string;
    time: string;
    format: Components.JmaFileFormat;
    values: [HeaderValue1, HeaderValue2, ...string[]];
    flags: {
      product: 'T' | 'A' | 'W' | 'Z';
      productIdentifier?: string;
      oflag: 'C' | 'J';
    };
    length: number;
  }

  export interface Item {
    id: string;
    serial: string;
    classification: string;
    headers: Header[];
    format: Components.JmaFileFormat;
    compression: 'gzip' | 'zip' | null;
    receivedTime: string;
    url: string;
  }

  export interface ResponseOk extends APIHead {
    status: 'ok';
    items: Item[];
    nextToken?: string;
    nextPooling?: string;
    nextPoolingInterval?: number;
  }

  export type ResponseError = APIStandardError;

  export type Response = ResponseError | ResponseOk;
}
