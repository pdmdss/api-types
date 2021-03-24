import { APIV2Head } from './head';
import { APIV2BaseError, APIV2Error } from './error';
import { ClassificationValues } from '../../classification';


export namespace APIV2ContractList {
  export type Method = 'GET';

  export type QueryParams = {};

  export interface ResponseOk extends APIV2Head {
    status: 'ok';
    items: {
      id: number | null;
      classification: ClassificationValues;
      name: string;
      price: {
        day: number;
        max: number;
      };
      start: Date | null;
      isValid: boolean;
    }[];
  }

  export type ResponseError = APIV2BaseError | APIV2Error<string, 404>;

  export type Response = ResponseOk | ResponseError;
}
