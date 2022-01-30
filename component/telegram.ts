import { ClassificationValues } from './classification';
import { XmlReport } from './xml.report';

export interface Telegram{
  id: string;
  originalId: string;
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
  xmlReport: XmlReport;
  format: 'json'
  schema: {
    type: string;
    version: string;
  };
  url: string;
}
