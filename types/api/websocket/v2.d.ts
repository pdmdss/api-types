import { Components } from '../../components';

type DataFormat = Components.DataFormats | null;
type DataCompression = 'gzip' | 'zip' | null;
type DataEncoding = 'base64' | 'utf-8' | null;

type JmaFileFormat = Components.JmaFileFormat | null;
type JmaFileCompression = 'gzip' | 'zip' | null;

interface DataPassing {
  name: string;
  time: string;
}

interface DataSchema {
  type: string;
  version: string;
}

interface DataHead {
  type: string;
  author: string;
  target?: string;
  time: string;
  designation: string | null;
  test: boolean;
  xml?: boolean;
  binary?: boolean;
  bch?: string;
}

interface JmaFileHead {
  filename: string;
  author: string;
  time: string;
  format: JmaFileFormat;
  values: string[];
  flags: {
    product: 'T' | 'A' | 'W' | 'Z';
    productIdentifier?: string;
    originator: 'C' | 'J';
  };
  length: number;
}

export namespace WebSocketV2 {
  export {
    Event,

    DataFormat,
    DataCompression,
    DataEncoding,
    DataPassing,
    DataHead,
    DataSchema,
    JmaFileFormat,
    JmaFileCompression,
    JmaFileHead
  };
}

declare namespace Event {
  export interface Data {
    type: 'data';
    version: '2.0';
    id: string;
    originalId?: string;
    classification: Components.Classification.Values;
    passing: DataPassing[];
    head: DataHead;
    xmlReport?: Components.XmlReport;
    schema?: DataSchema;
    format: DataFormat;
    compression: DataCompression;
    encoding: DataEncoding;
    body: string;
  }

  export interface JmaFile {
    type: 'jmafile';
    version: '1.0';
    id: string;
    classification?: string;
    passing: DataPassing[];
    heads: JmaFileHead[];
    compression: JmaFileCompression;
    sendMode: 'binary';
    length: number;
  }

  export interface Ping {
    type: 'ping';
    pingId?: string;
  }

  export interface Pong {
    type: 'pong';
    pingId?: string;
  }

  export interface Start {
    type: 'start';
    socketId: number;
    classifications: (Components.Classification.Values | string)[];
    types: string[] | null;
    test: 'including' | 'no';
    formats: DataFormat[];
    appName: string | null;
    time: string;
  }

  export interface ChangeClassification {
    type: 'change.classification';
    ends: (Components.Classification.Values | string)[];
    after: (Components.Classification.Values | string)[];
  }

  export interface Error {
    type: 'error';
    error: string;
    code: number;
    close: boolean;
  }

  export type All = Data | JmaFile | Ping | Pong | Start | ChangeClassification | Error;
}
