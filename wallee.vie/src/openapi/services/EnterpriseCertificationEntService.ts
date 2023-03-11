/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CombineType } from '../models/CombineType';
import type { CreateEnterpriseCertificationDto } from '../models/CreateEnterpriseCertificationDto';
import type { EnterpriseCertificationDto } from '../models/EnterpriseCertificationDto';
import type { PagedResultDtoOfEnterpriseCertificationDto } from '../models/PagedResultDtoOfEnterpriseCertificationDto';
import type { SendPhoneCodeDto } from '../models/SendPhoneCodeDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class EnterpriseCertificationEntService {

    /**
     * @param requestBody 
     * @returns EnterpriseCertificationDto Success
     * @throws ApiError
     */
    public static enterpriseCertificationEntCreate(
requestBody?: CreateEnterpriseCertificationDto,
): CancelablePromise<EnterpriseCertificationDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/ent/certifications',
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
     * @param filter 
     * @param creationTimeMin 
     * @param creationTimeMax 
     * @param skipCount 
     * @param maxResultCount 
     * @param sorting 
     * @param combineWith 
     * @returns PagedResultDtoOfEnterpriseCertificationDto Success
     * @throws ApiError
     */
    public static enterpriseCertificationEntGetList(
filter?: string,
creationTimeMin?: string,
creationTimeMax?: string,
skipCount?: number,
maxResultCount?: number,
sorting?: string,
combineWith?: CombineType,
): CancelablePromise<PagedResultDtoOfEnterpriseCertificationDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/ent/certifications',
            query: {
                'Filter': filter,
                'CreationTime.Min': creationTimeMin,
                'CreationTime.Max': creationTimeMax,
                'SkipCount': skipCount,
                'MaxResultCount': maxResultCount,
                'Sorting': sorting,
                'CombineWith': combineWith,
            },
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
     * @param enterpriseName 
     * @param enterpriseUniscId 
     * @returns binary Success
     * @throws ApiError
     */
    public static enterpriseCertificationEntDownloadEnterpriseAuthorizationFile(
enterpriseName?: string,
enterpriseUniscId?: string,
): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/ent/certifications/download/enterpriseAuth',
            query: {
                'EnterpriseName': enterpriseName,
                'EnterpriseUniscId': enterpriseUniscId,
            },
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
     * @returns binary Success
     * @throws ApiError
     */
    public static enterpriseCertificationEntDownloadRepresentativeAuthorizationFile(): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/ent/certifications/download/representativeAuth',
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
     * @param id 
     * @returns EnterpriseCertificationDto Success
     * @throws ApiError
     */
    public static enterpriseCertificationEntGet(
id: string,
): CancelablePromise<EnterpriseCertificationDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/ent/certifications/{id}',
            path: {
                'id': id,
            },
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
    public static enterpriseCertificationEntSendPhoneCode(
requestBody?: SendPhoneCodeDto,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/ent/certifications/sendPhoneCode',
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
