// /* istanbul ignore file */
// /* tslint:disable */
// /* eslint-disable */
// import type { ApiRequestOptions } from './ApiRequestOptions';

// type Resolver<T> = (options: ApiRequestOptions) => Promise<T>;
// type Headers = Record<string, string>;

// export type OpenAPIConfig = {
//     BASE: string;
//     VERSION: string;
//     WITH_CREDENTIALS: boolean;
//     CREDENTIALS: 'include' | 'omit' | 'same-origin';
//     TOKEN?: string | Resolver<string>;
//     USERNAME?: string | Resolver<string>;
//     PASSWORD?: string | Resolver<string>;
//     HEADERS?: Headers | Resolver<Headers>;
//     ENCODE_PATH?: (path: string) => string;
// };

// export const OpenAPI: OpenAPIConfig = {
//     BASE: '',
//     VERSION: '1',
//     WITH_CREDENTIALS: false,
//     CREDENTIALS: 'include',
//     TOKEN: undefined,
//     USERNAME: undefined,
//     PASSWORD: undefined,
//     HEADERS: undefined,
//     ENCODE_PATH: undefined,
// };



/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiRequestOptions } from "./ApiRequestOptions";
import useOidcStore from "/@/store/modules/useOidcStore";
type Resolver<T> = (options: ApiRequestOptions) => Promise<T>;
type Headers = Record<string, string>;

export type OpenAPIConfig = {
  BASE: string;
  VERSION: string;
  WITH_CREDENTIALS: boolean;
  CREDENTIALS: "include" | "omit" | "same-origin";
  TOKEN?: string | Resolver<string>;
  USERNAME?: string | Resolver<string>;
  PASSWORD?: string | Resolver<string>;
  HEADERS?: Headers | Resolver<Headers>;
  ENCODE_PATH?: (path: string) => string;
};

export const OpenAPI: OpenAPIConfig = {
  BASE: import.meta.env["VITE_API_URL"],
  VERSION: "1",
  WITH_CREDENTIALS: false,
  CREDENTIALS: "include",
  TOKEN: () =>
    new Promise((resolve) =>
      resolve(useOidcStore().tokenInfo.access_token as string)
    ),
  USERNAME: undefined,
  PASSWORD: undefined,
  HEADERS: undefined,
  ENCODE_PATH: undefined,
};