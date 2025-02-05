import { APIHead } from '../head';
import { Components } from '../../components';
import { APIStandardError } from '../error';

export namespace ArchiveList {
  export type Method = 'GET';

  export interface QueryParams {
    limit?: number;
    classification?: string;
    datetime?: string;
    cursorToken?: string;
  }


  export interface Item {
    id: string;
    serial: string;
    date: string;
    classification: Components.Classification.Values;
    fileSize: number;
    dataCount: number;
    url: string;
  }

  export interface ResponseOk extends APIHead {
    status: 'ok';
    items: Item[];
    nextToken?: string;
  }

  export type ResponseError = APIStandardError;

  export type Response = ResponseError | ResponseOk;
}
