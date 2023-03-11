/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CombineType } from '../models/CombineType';
import type { FinancialProductDto } from '../models/FinancialProductDto';
import type { PagedResultDtoOfFinancialProductDto } from '../models/PagedResultDtoOfFinancialProductDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class FinancialProductEntService {

    /**
     * @param id 
     * @returns FinancialProductDto Success
     * @throws ApiError
     */
    public static financialProductEntGet(
id: string,
): CancelablePromise<FinancialProductDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/ent/financialProducts/{id}',
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
     * @param releasedTimeMin 
     * @param releasedTimeMax 
     * @param skipCount 
     * @param maxResultCount 
     * @param sorting 
     * @param combineWith 
     * @returns PagedResultDtoOfFinancialProductDto Success
     * @throws ApiError
     */
    public static financialProductEntGetList(
filter?: string,
releasedTimeMin?: string,
releasedTimeMax?: string,
skipCount?: number,
maxResultCount?: number,
sorting?: string,
combineWith?: CombineType,
): CancelablePromise<PagedResultDtoOfFinancialProductDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/ent/financialProducts',
            query: {
                'Filter': filter,
                'ReleasedTime.Min': releasedTimeMin,
                'ReleasedTime.Max': releasedTimeMax,
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
     * @param products 
     * @returns FinancialProductDto Success
     * @throws ApiError
     */
    public static financialProductEntGetList1(
products?: Array<string>,
): CancelablePromise<Array<FinancialProductDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/ent/financialProducts/getListByIds',
            query: {
                'products': products,
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
