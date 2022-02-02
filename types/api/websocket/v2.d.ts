import { Components } from '@t/components';

type DataFormat = 'xml' | 'a/n' | 'binary' | 'json' | 'shift-jis' | 'jis';
type DataCompression = 'gzip' | 'zip' | null;
type DataEncoding = 'base64' | 'utf-8' | null;

interface DataPassing {
  name: string;
  time: string;
}

interface DataSchema {
  type: string;
  version: string;
}


export interface EventDataHead {
  type: string;
  author: string;
  target?: string;
  time: string;
  designation: string | null;
  test: boolean;
  xml?: boolean;
  binary?: boolean;
}

export namespace WebSocketV2 {
  export {
    Event,

    DataFormat,
    DataCompression,
    DataEncoding,
    DataPassing,
    DataSchema
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
    head: EventDataHead;
    xmlReport?: Components.XmlReport;
    schema?: DataSchema;
    format: DataFormat;
    compression: DataCompression;
    encoding: DataEncoding;
    body: string;
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
    classifications: Components.Classification.Values[];
    types: string[] | null;
    test: 'including' | 'no';
    formats: DataFormat[];
    appName: string | null;
    time: string;
  }

  export interface ChangeClassification {
    type: 'change.classification';
    ends: Components.Classification.Values[];
    after: Components.Classification.Values[];
  }

  export interface Error {
    type: 'error';
    error: string;
    code: number;
    close: boolean;
  }

  export type All = Data | Ping | Pong | Start | ChangeClassification | Error;
}