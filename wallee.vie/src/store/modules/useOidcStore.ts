import { defineStore } from "pinia";

export type MaybeNull<T> = T | null;

export interface OidcState {
  access_token: MaybeNull<string>;
  refresh_token: MaybeNull<string>;
  id_token: MaybeNull<string>;
  expires_at: MaybeNull<number> | undefined;
}

export default defineStore("oidc", {
  state: (): OidcState => {
    return {
      access_token: null,
      expires_at: null,
      refresh_token: null,
      id_token: null,
    };
  },

  getters: {
    getToken(): string | null {
      return this.access_token || null;
    },
    //check token expiration. return true if it expired
    isTokenInValid(): boolean {
      const expiredTimeStamp = this.expires_at;
      if (expiredTimeStamp) {
        const currentTimeStamp = Math.round(Number(new Date()) / 1000);
        return currentTimeStamp > expiredTimeStamp;
      } else {
        return true;
      }
    },
  },
  actions: {
    async store(user: any) {
      this.storeAccessToken(user.access_token);
      this.storeIdToken(user.id_token || null);
      this.storeRefreshToken(user.refresh_token || null);
      this.storeExpredAt(user.expires_at);
    },
    async clearState() {
      //await this.getUserManager?.removeUser();
      this.$reset();
    },
    storeIdToken(idToken: MaybeNull<string>) {
      this.id_token = idToken;
    },
    storeAccessToken(accessToken: MaybeNull<string>) {
      this.access_token = accessToken;
    },
    storeExpredAt(expiresAt: MaybeNull<number> | undefined) {
      this.expires_at = expiresAt;
    },
    storeRefreshToken(refreshToken: MaybeNull<string>) {
      this.refresh_token = refreshToken;
    },
  },
  persist: {
    storage: localStorage,
    paths: ["access_token", "expires_at", "refresh_token", "id_token"],
    key: "oidc-store",
  },
});
