import { APIV2Head } from './head';
import { APIV2BaseError } from './error';
import { XmlReport } from '../../xml.report';
import { ClassificationValues } from '../../classification';

export namespace APIV2TelegramList {
  export type Method = 'GET';

  export type QueryParams = {
    limit?: number;
    type?: string | string[];
    xmlReport?: 'true' | 'false';
    test?: 'including' | 'no' | 'only';
    formatMode?: 'raw';
    cursorToken?: string;
  }

  export interface ResponseOk extends APIV2Head {
    status: 'ok';
    items: {
      id: string;
      originalId?: string;
      serial: number;
      classification: ClassificationValues;
      head: {
        type: string;
        author: string;
        time: string;
        designation: string | null;
        test: boolean;
      };
      receivedTime: string;
      xmlReport?: XmlReport;
      format: 'xml' | 'a/n' | 'binary' | 'json' | null;
      schema?: {
        type: string;
        version: string;
      };
      url: string;
    }[];
    nextToken?: string;
    nextPooling?: string;
    nextPoolingInterval?: number;
  }

  export type ResponseError = APIV2BaseError;

  export type Response = ResponseOk | ResponseError;
}
