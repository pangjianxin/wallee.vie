/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type FinancingSendPasswordResetCodeDto = {
    phoneNumber: string;
    appName: string;
    returnUrl?: string | null;
    returnUrlHash?: string | null;
};
