import {
  WebSocketV2ChangeClassification,
  WebSocketV2Data,
  WebSocketV2Error,
  WebSocketV2Ping,
  WebSocketV2Pong,
  WebSocketV2Start
} from './v2';

export type WebSocketV2StrictStart = WebSocketV2Start & {
  mode: 'strict';
}

export type WebSocketV2StrictData = Omit<WebSocketV2Data, 'type' | 'version'> & {
  type: 'data';
  version: '2.1';
  signature: string;
  retry: number;
  sendNumber: number;
}

export type WebSocketV2StrictAck = {
  type: 'ack';
  checkpoint?: string;
  sendNumber?: number;
}

export type WebSocketV2Strict =
  WebSocketV2StrictData
  | WebSocketV2StrictAck
  | WebSocketV2Ping
  | WebSocketV2Pong
  | WebSocketV2StrictStart
  | WebSocketV2ChangeClassification
  | WebSocketV2Error;
