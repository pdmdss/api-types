import { XmlReport } from '../xml.report';
import { ClassificationValues } from '../classification';

export type WebSocketV2Passing = {
  name: string;
  time: string;
};


export type WebSocketV2DataBodySchema = {
  type: string;
  version: string;
};
export type WebSocketV2DataBodyFormats = 'xml' | 'a/n' | 'binary' | 'json' | 'shift-jis' | 'jis';
export type WebSocketV2DataBodyCompressions = 'gzip' | 'zip' | null;
export type WebSocketV2DataBodyEncodings = 'base64' | 'utf-8' | null;
export type WebSocketV2DataHead = {
  type: string;
  author: string;
  target?: string;
  time: string;
  designation: string | null;
  test: boolean;
  xml?: boolean;
  binary?: boolean;
};

export type WebSocketV2Data = {
  type: 'data';
  version: '2.0';
  id: string;
  fingerprint?: string;
  originalId?: string;
  classification: ClassificationValues;
  passing: WebSocketV2Passing[];
  head: WebSocketV2DataHead;
  xmlReport?: XmlReport;
  format: WebSocketV2DataBodyFormats | null;
  schema?: WebSocketV2DataBodySchema;
  compression: WebSocketV2DataBodyCompressions;
  encoding: WebSocketV2DataBodyEncodings;
  body: string;
};

export type WebSocketV2Ping = {
  type: 'ping';
  pingId?: string;
}

export type WebSocketV2Pong = {
  type: 'pong';
  pingId?: string;
}

export type WebSocketV2Start = {
  type: 'start';
  socketId: number;
  classifications: ClassificationValues[];
  types: string[] | null;
  test: 'including' | 'no';
  formats: WebSocketV2DataBodyFormats[];
  appName: string | null;
  time: string;
}

export type WebSocketV2ChangeClassification = {
  type: 'change.classification';
  ends: ClassificationValues[];
  after: ClassificationValues[];
}

export type WebSocketV2Error = {
  type: 'error';
  error: string;
  code: number;
  close: boolean;
}

export type WebSocketV2 =
  WebSocketV2Data
  | WebSocketV2Ping
  | WebSocketV2Pong
  | WebSocketV2Start
  | WebSocketV2ChangeClassification
  | WebSocketV2Error;
