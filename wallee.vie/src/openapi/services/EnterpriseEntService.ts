/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CombineType } from '../models/CombineType';
import type { EnterpriseDto } from '../models/EnterpriseDto';
import type { ListResultDtoOfEnterpriseDto } from '../models/ListResultDtoOfEnterpriseDto';
import type { PagedResultDtoOfEnterpriseDto } from '../models/PagedResultDtoOfEnterpriseDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class EnterpriseEntService {

    /**
     * @param id 
     * @returns EnterpriseDto Success
     * @throws ApiError
     */
    public static enterpriseEntGet(
id: string,
): CancelablePromise<EnterpriseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/ent/enterprises/{id}',
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
     * @param uniscId 
     * @returns EnterpriseDto Success
     * @throws ApiError
     */
    public static enterpriseEntGetByUniscId(
uniscId: string,
): CancelablePromise<EnterpriseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/uniscId/{uniscId}',
            path: {
                'uniscId': uniscId,
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
     * @param filter 
     * @param operatingTimeLimitDateBeginMin 
     * @param operatingTimeLimitDateBeginMax 
     * @param registeredCapitalMin 
     * @param registeredCapitalMax 
     * @param skipCount 
     * @param maxResultCount 
     * @param sorting 
     * @param combineWith 
     * @returns PagedResultDtoOfEnterpriseDto Success
     * @throws ApiError
     */
    public static enterpriseEntGetList(
filter?: string,
operatingTimeLimitDateBeginMin?: string,
operatingTimeLimitDateBeginMax?: string,
registeredCapitalMin?: number,
registeredCapitalMax?: number,
skipCount?: number,
maxResultCount?: number,
sorting?: string,
combineWith?: CombineType,
): CancelablePromise<PagedResultDtoOfEnterpriseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/ent/enterprises',
            query: {
                'Filter': filter,
                'OperatingTimeLimitDateBegin.Min': operatingTimeLimitDateBeginMin,
                'OperatingTimeLimitDateBegin.Max': operatingTimeLimitDateBeginMax,
                'RegisteredCapital.Min': registeredCapitalMin,
                'RegisteredCapital.Max': registeredCapitalMax,
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
     * @returns ListResultDtoOfEnterpriseDto Success
     * @throws ApiError
     */
    public static enterpriseEntGetList1(): CancelablePromise<ListResultDtoOfEnterpriseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/ent/enterprises/certificated',
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
     * @returns ListResultDtoOfEnterpriseDto Success
     * @throws ApiError
     */
    public static enterpriseEntQueryEnterprise(
filter?: string,
): CancelablePromise<ListResultDtoOfEnterpriseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/ent/enterprises/queryEnterprise',
            query: {
                'Filter': filter,
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

}
