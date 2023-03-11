/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CombineType } from '../models/CombineType';
import type { CreateFinancingRequirementDto } from '../models/CreateFinancingRequirementDto';
import type { FinancingRequirementDto } from '../models/FinancingRequirementDto';
import type { PagedResultDtoOfFinancingRequirementDto } from '../models/PagedResultDtoOfFinancingRequirementDto';
import type { UpdateFinancingRequirementDto } from '../models/UpdateFinancingRequirementDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class FinancingRequirementEntService {

    /**
     * @param requestBody 
     * @returns FinancingRequirementDto Success
     * @throws ApiError
     */
    public static financingRequirementEntCreate(
requestBody?: CreateFinancingRequirementDto,
): CancelablePromise<FinancingRequirementDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/ent/financingRequirements',
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
     * @param id 
     * @returns any Success
     * @throws ApiError
     */
    public static financingRequirementEntDelete(
id?: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/ent/financingRequirements',
            query: {
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
     * @param filter 
     * @param releaseTimeMin 
     * @param releaseTimeMax 
     * @param skipCount 
     * @param maxResultCount 
     * @param sorting 
     * @param combineWith 
     * @returns PagedResultDtoOfFinancingRequirementDto Success
     * @throws ApiError
     */
    public static financingRequirementEntGetList(
filter?: string,
releaseTimeMin?: string,
releaseTimeMax?: string,
skipCount?: number,
maxResultCount?: number,
sorting?: string,
combineWith?: CombineType,
): CancelablePromise<PagedResultDtoOfFinancingRequirementDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/ent/financingRequirements',
            query: {
                'Filter': filter,
                'ReleaseTime.Min': releaseTimeMin,
                'ReleaseTime.Max': releaseTimeMax,
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
     * @param id 
     * @param requestBody 
     * @returns FinancingRequirementDto Success
     * @throws ApiError
     */
    public static financingRequirementEntUpdate(
id?: string,
requestBody?: UpdateFinancingRequirementDto,
): CancelablePromise<FinancingRequirementDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/ent/financingRequirements',
            query: {
                'id': id,
            },
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
     * @param id 
     * @returns FinancingRequirementDto Success
     * @throws ApiError
     */
    public static financingRequirementEntGet(
id: string,
): CancelablePromise<FinancingRequirementDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/ent/financingRequirements/{id}',
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

}
