import { Components } from '../../components';

type DataFormat = 'xml' | 'a/n' | 'binary' | 'json' | 'shift-jis' | 'jis' | null;
type DataCompression = 'gzip' | 'zip' | null;
type DataEncoding = 'base64' | 'utf-8' | null;

type FileFormat = 'xml' | 'grib2' | 'bufr3' | 'bufr4' | 'pdf' | 'png' | 'jpeg' | null;
type FileCompression = 'gzip' | 'zip' | 'tar' | 'tar.gzip' | null;

interface DataPassing {
  name: string;
  time: string;
}

interface DataSchema {
  type: string;
  version: string;
}

interface Destination {
  type: string;
  id: string;
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
}

interface FileHead {
  filename: string;
  type: string;
  author: string;
  target?: string;
  time: string;
}

interface SplitReport {
  id: string;
  passing: DataPassing[];
  head: DataHead;
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
    FileFormat,
    FileCompression,
    FileHead,
    SplitReport
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
    destinations?: Destination[];
    head: DataHead;
    splitReports?: SplitReport[];
    xmlReport?: Components.XmlReport;
    schema?: DataSchema;
    format: DataFormat;
    compression: DataCompression;
    encoding: DataEncoding;
    body: string;
  }

  export interface File {
    type: 'file';
    version: '1.0';
    id: string;
    classification: Components.Classification.Values;
    passing: DataPassing[];
    destinations?: Destination[];
    head: FileHead;
    format: FileFormat;
    compression: FileCompression;
    sendMode: 'buffer';
    bodyLength: number;
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

  export type All = Data | File | Ping | Pong | Start | ChangeClassification | Error;
}
