import { Classification } from '@t/components/classification';
import { XmlReport } from '@t/components/xml.report';
import { Formats } from '@t/components/formats';

export namespace Telegram {
  interface Item {
    id: string;
    originalId?: string;
    serial: number;
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
    format: Formats;
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



