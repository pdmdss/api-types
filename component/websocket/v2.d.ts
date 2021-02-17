import { XmlReport } from '../xml.report';

export type WebSocketV2Data = {
  type: 'data';
  version: '2.0';
  id: string;
  classification: string;
  head: {
    type: string;
    author: string;
    time: Date;
    designation: string | null;
    test: boolean;
    xml: boolean;
    createTime: Date;
    sendNumber: number;
  };
  xmlReport?: XmlReport;
  format: null | 'xml' | 'a/n' | 'binary' | 'json';
  compression: null | 'gzip' | 'zip';
  encoding: null | 'base64';
  body: string;
  receivedTime: string;
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
  classifications: string[];
  time: string;
}

export type WebSocketV2ChangeClassification = {
  type: 'change.classification';
  ends: string[];
  after: string[];
}

export type WebSocketV2Error = {
  type: 'error';
  error: string;
  code: string;
  close: boolean;
}

export type WebSocketV2 =
  WebSocketV2Data
  | WebSocketV2Ping
  | WebSocketV2Pong
  | WebSocketV2Start
  | WebSocketV2ChangeClassification
  | WebSocketV2Error;
