import {
  IBaseHeaders,
  IAuthorizationHeader
} from '../../interfaces/header/IHeader';

export default class AgoraHeaders {
  constructor() {}

  public BaseHeader(): IBaseHeaders {
    return {
      'Content-Type': 'application/json;charset=UTF-8'
    };
  }

  public AuthorizationHeader(): IAuthorizationHeader {
    return {
      'Content-Type': 'application/json;charset=UTF-8',
      authorization: ''
    };
  }
}
