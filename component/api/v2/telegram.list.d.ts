import { APIV2Head } from './head';
import { APIV2BaseError } from './error';
import { XmlReport } from '../../xml.report';
import { ClassificationValues } from '../../classification';

export type APIV2TelegramListQueryParams = {
  limit?: number;
  type?: string | string[];
  xmlReport?: 'on' | 'off';
  test?: 'including' | 'no' | 'only';
  cursorToken?: string;
}

export interface APIV2TelegramListResponseOk extends APIV2Head {
  status: 'ok';
  items: {
    id: string;
    classification: ClassificationValues;
    head: {
      type: string;
      author: string;
      time: string;
      designation: string | null;
      test: boolean;
    };
    xmlReport?: XmlReport;
    format: 'xml' | 'a/n' | 'binary' | null;
    url: string;
  }[];
  nextToken?: string;
  nextPooling?: string;
}

export type APIV2TelegramListResponseError = APIV2BaseError;

export type APIV2TelegramListResponse = APIV2TelegramListResponseOk | APIV2TelegramListResponseError;
