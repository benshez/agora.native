import { getString, setString } from 'tns-core-modules/application-settings';
import { IContentType } from '../interfaces/header/IHeader';

const tokenKey = 'token';

export default class BaseService {
  constructor() {}

  getHeaders(toAppend = {}) {
    return Object.assign(
      {
        'Content-Type': 'application/json;charset=UTF-8'
      },
      toAppend
    );
  }
}
