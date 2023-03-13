import { defineStore } from "pinia";
import { reactive, computed } from "vue";

export type MaybeNull<T> = T | null | undefined;

export interface OidcState {
  access_token: MaybeNull<string>;
  refresh_token: MaybeNull<string>;
  id_token: MaybeNull<string>;
  expires_at: MaybeNull<number>;
}

export type UserDto = {
  sub: string | null | undefined;
  tenantid?: string;
  preferred_username?: string;
  family_name?: string;
  given_name?: string;
  role?: string[];
  phone_number?: string;
  phone_number_verified?: boolean;
  email?: string;
  email_verified?: boolean;
};

export default defineStore(
  "oidc",
  () => {
    let tokenInfo = reactive<OidcState>({
      access_token: null,
      expires_at: null,
      refresh_token: null,
      id_token: null,
    });

    let userInfo = reactive<UserDto>({
      sub: undefined,
      tenantid: undefined,
      preferred_username: undefined,
      family_name: undefined,
      given_name: undefined,
      role: undefined,
      phone_number: undefined,
      phone_number_verified: undefined,
      email: undefined,
      email_verified: undefined,
    });

    let isTokenValid = computed<boolean>(() => {
      const expiredTimeStamp = tokenInfo.expires_at;
      const currentTimeStamp = Date.now();
      return Number(expiredTimeStamp) - currentTimeStamp > 0;
    });

    const storeTokenInfo = (token: any) => {
      tokenInfo.access_token = token.access_token;
      let expires_at = Date.now() + Number(token.expires_in) * 1000;
      tokenInfo.expires_at = expires_at;
      tokenInfo.refresh_token = token.refresh_token;
      tokenInfo.id_token = token.id_token;
    };
    const storeUserInfo = (user: any) => {
      userInfo.sub = user.sub;
      userInfo.tenantid = user.tenantid;
      userInfo.preferred_username = user.preferred_username;
      userInfo.family_name = user.family_name;
      userInfo.given_name = user.given_name;
      userInfo.role = user.role;
      userInfo.phone_number = user.phone_number;
      userInfo.phone_number_verified = user.phone_number_verified;
      userInfo.email = user.email;
      userInfo.email_verified = user.email_verified;
    };
    const clearState = () => {
      tokenInfo.access_token = undefined;
      tokenInfo.expires_at = undefined;
      tokenInfo.refresh_token = undefined;
      tokenInfo.id_token = undefined;

      userInfo.sub = undefined;
      userInfo.tenantid = undefined;
      userInfo.preferred_username = undefined;
      userInfo.family_name = undefined;
      userInfo.given_name = undefined;
      userInfo.role = undefined;
      userInfo.phone_number = undefined;
      userInfo.phone_number_verified = undefined;
      userInfo.email = undefined;
      userInfo.email_verified = undefined;
    };

    return {
      tokenInfo,
      userInfo,
      isTokenValid,
      storeTokenInfo,
      storeUserInfo,
      clearState,
    };
  },
  {
    persist: {
      storage: localStorage,
      paths: ["tokenInfo", "userInfo"],
      key: "oidc-store",
    },
  }
);
