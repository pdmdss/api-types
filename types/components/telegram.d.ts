import { Classification } from './classification';
import { XmlReport } from './xml.report';
import { DataFormats } from './formats';

export namespace Telegram {
  interface Item {
    id: string;
    originalId?: string;
    serial: number | string;
    classification: Classification.Values;
    head: {
      type: string;
      author: string;
      time: string;
      designation: string | null;
      test: boolean;
    };
    receivedTime: string;
    xmlReport?: XmlReport;
    format: DataFormats;
    schema?: {
      type: string;
      version: string;
    };
    url: string;
  }

  export interface ItemJSONOnly extends Required<Item> {
    format: 'json';
  }
}
