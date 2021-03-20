import { XmlReport } from '../xml.report';
import { ClassificationValues } from '../classification';

export type WebSocketV2Data = {
  type: 'data';
  version: '2.0';
  id: string;
  classification: ClassificationValues;
  passing: {
    name: string;
    time: string;
  }[];
  head: {
    type: string;
    author: string;
    time: string;
    designation: string | null;
    test: boolean;
    xml: boolean;
  };
  xmlReport?: XmlReport;
  format: null | 'xml' | 'a/n' | 'binary' | 'json';
  compression: null | 'gzip' | 'zip';
  encoding: null | 'base64';
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
  formats: ['xml', 'a/n', 'binary'] | ['json'];
  tags: { [key: string]: string | number | null };
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
