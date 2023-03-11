/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FinancingRegisterDto } from '../models/FinancingRegisterDto';
import type { FinancingResetPasswordDto } from '../models/FinancingResetPasswordDto';
import type { FinancingSendPasswordResetCodeDto } from '../models/FinancingSendPasswordResetCodeDto';
import type { FinancingSendPhoneNumberLoginCodeDto } from '../models/FinancingSendPhoneNumberLoginCodeDto';
import type { FinancingSendRegisterCodeDto } from '../models/FinancingSendRegisterCodeDto';
import type { IdentityUserDto } from '../models/IdentityUserDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class FinancingAccountService {

    /**
     * @param requestBody 
     * @returns IdentityUserDto Success
     * @throws ApiError
     */
    public static financingAccountRegister(
requestBody?: FinancingRegisterDto,
): CancelablePromise<IdentityUserDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/common/account/register',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server Error`,
                501: `Server Error`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns any Success
     * @throws ApiError
     */
    public static financingAccountResetPassword(
requestBody?: FinancingResetPasswordDto,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/common/account/resetPassword',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server Error`,
                501: `Server Error`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns any Success
     * @throws ApiError
     */
    public static financingAccountSendPasswordResetCode(
requestBody?: FinancingSendPasswordResetCodeDto,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/common/account/sendPasswordResetCode',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server Error`,
                501: `Server Error`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns any Success
     * @throws ApiError
     */
    public static financingAccountSendPhoneNumberLoginCode(
requestBody?: FinancingSendPhoneNumberLoginCodeDto,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/common/account/sendPhoneNumberLoginCode',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server Error`,
                501: `Server Error`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns any Success
     * @throws ApiError
     */
    public static financingAccountSendRegisterCode(
requestBody?: FinancingSendRegisterCodeDto,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/common/account/sendRegisterCode',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server Error`,
                501: `Server Error`,
            },
        });
    }

}
