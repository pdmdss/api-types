import { XmlReport } from '../xml.report';

export type WebSocketV1Data = {
  type: 'data';
  classification: string;
  key: string;
  body: string;
  data: {
    type: string;
    author: string;
    time: Date;
    bbb: string | null;
    test: boolean;
    xml: boolean;
    compression: null | 'gzip' | 'zip';
    createTime: Date;
    sendNumber: number;
  };
  xmlData: XmlReport | null,
  receivedTime: string;
};


export type WebSocketV1Ping = {
  type: 'ping';
  pingId?: string;
}

export type WebSocketV1Pong = {
  type: 'pong';
  pingId?: string;
}

export type WebSocketV1Start = {
  type: 'start';
  classification: string[];
  time: string;
}

export type WebSocketV1Error = {
  type: 'error';
  error: string;
  code: string;
  action: 'close' | null;
}

export type WebSocketV1 = WebSocketV1Data | WebSocketV1Ping | WebSocketV1Pong | WebSocketV1Start | WebSocketV1Error;
