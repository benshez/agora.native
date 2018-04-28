export interface IBaseHeaders {
  'Content-Type': string;
}

export interface IAuthorizationHeader extends IBaseHeaders {
  authorization: string;
}
