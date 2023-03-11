/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CombineType } from '../models/CombineType';
import type { CreateRegionDto } from '../models/CreateRegionDto';
import type { PagedResultDtoOfRegionDto } from '../models/PagedResultDtoOfRegionDto';
import type { RegionDto } from '../models/RegionDto';
import type { UpdateRegionDto } from '../models/UpdateRegionDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class RegionService {

    /**
     * @param requestBody 
     * @returns RegionDto Success
     * @throws ApiError
     */
    public static regionCreate(
requestBody?: CreateRegionDto,
): CancelablePromise<RegionDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/app/regions',
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
    public static regionDelete(
id?: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/app/regions',
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
     * @param parentId 
     * @param skipCount 
     * @param maxResultCount 
     * @param sorting 
     * @param combineWith 
     * @returns PagedResultDtoOfRegionDto Success
     * @throws ApiError
     */
    public static regionGetList(
filter?: string,
parentId?: string,
skipCount?: number,
maxResultCount?: number,
sorting?: string,
combineWith?: CombineType,
): CancelablePromise<PagedResultDtoOfRegionDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/app/regions',
            query: {
                'Filter': filter,
                'ParentId': parentId,
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
     * @returns RegionDto Success
     * @throws ApiError
     */
    public static regionUpdate(
id?: string,
requestBody?: UpdateRegionDto,
): CancelablePromise<RegionDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/app/regions',
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
     * @returns RegionDto Success
     * @throws ApiError
     */
    public static regionGet(
id: string,
): CancelablePromise<RegionDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/app/regions/{id}',
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
     * @param parentId 
     * @returns RegionDto Success
     * @throws ApiError
     */
    public static regionGetChildren(
parentId?: string,
): CancelablePromise<Array<RegionDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/app/regions/GetChildren',
            query: {
                'ParentId': parentId,
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
