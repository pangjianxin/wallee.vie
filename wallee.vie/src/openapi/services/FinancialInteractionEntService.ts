/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CombineType } from '../models/CombineType';
import type { FinancialInteractionDto } from '../models/FinancialInteractionDto';
import type { ForbidQueryAuthorizationDto } from '../models/ForbidQueryAuthorizationDto';
import type { PagedResultDtoOfFinancialInteractionDto } from '../models/PagedResultDtoOfFinancialInteractionDto';
import type { PermitQueryAuthorizationDto } from '../models/PermitQueryAuthorizationDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class FinancialInteractionEntService {

    /**
     * @param id 
     * @returns FinancialInteractionDto Success
     * @throws ApiError
     */
    public static financialInteractionEntGet(
id: string,
): CancelablePromise<FinancialInteractionDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/ent/financialInteractions/{id}',
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
     * @param filter 
     * @param creationTimeMin 
     * @param creationTimeMax 
     * @param skipCount 
     * @param maxResultCount 
     * @param sorting 
     * @param combineWith 
     * @returns PagedResultDtoOfFinancialInteractionDto Success
     * @throws ApiError
     */
    public static financialInteractionEntGetList(
filter?: string,
creationTimeMin?: string,
creationTimeMax?: string,
skipCount?: number,
maxResultCount?: number,
sorting?: string,
combineWith?: CombineType,
): CancelablePromise<PagedResultDtoOfFinancialInteractionDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/ent/financialInteractions',
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
     * @param requestBody 
     * @returns FinancialInteractionDto Success
     * @throws ApiError
     */
    public static financialInteractionEntForbidQueryAuthorization(
requestBody?: ForbidQueryAuthorizationDto,
): CancelablePromise<FinancialInteractionDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/ent/financialInteractions/queryAuthorization/forbid',
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
     * @param requestBody 
     * @returns FinancialInteractionDto Success
     * @throws ApiError
     */
    public static financialInteractionEntPermitQueryAuthorization(
id?: string,
requestBody?: PermitQueryAuthorizationDto,
): CancelablePromise<FinancialInteractionDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/ent/financialInteractions/queryAuthorization/permit',
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

}
