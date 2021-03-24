import { APIV2Head } from './head';
import { APIV2BaseError, APIV2Error } from './error';
import { ClassificationValues } from '../../classification';

export namespace APIV2ContractChange {
  export type Method = 'POST';
  export type RequestContentType = ' application/x-www-form-urlencoded';

  export type QueryParams = {}

  export type RequestBody = {
    classification: ClassificationValues;
    mode: 'start' | 'end';
  };

  export interface ResponseOk extends APIV2Head {
  }

  export type ResponseError = APIV2BaseError | APIV2Error<string, 404>;

  export type Response = ResponseOk | ResponseError;
}
