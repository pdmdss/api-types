import { XmlReport } from '../xml.report';
import { ClassificationTelegramValues } from '../classification';

export type WebSocketV1Data = {
  type: 'data';
  classification: ClassificationTelegramValues;
  key: string;
  body: string;
  data: {
    type: string;
    author: string;
    time: string | Date;
    bbb: string | null;
    test: boolean;
    xml: boolean;
    compression: null | 'gzip' | 'zip';
    createTime: string | Date;
    sendNumber: number;
  };
  xmlData: XmlReport | null,
  receivedTime: string | Date;
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
  classification: ClassificationTelegramValues[];
  time: string;
}

export type WebSocketV1Error = {
  type: 'error';
  error: string;
  code: string;
  action: 'close' | null;
}

export type WebSocketV1 = WebSocketV1Data | WebSocketV1Ping | WebSocketV1Pong | WebSocketV1Start | WebSocketV1Error;
