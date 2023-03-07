/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BusinessLineCategory } from '../models/BusinessLineCategory';
import type { BusinessLineDto } from '../models/BusinessLineDto';
import type { CreateUpdateBusinessLineDto } from '../models/CreateUpdateBusinessLineDto';
import type { PagedResultDtoOfBusinessLineDto } from '../models/PagedResultDtoOfBusinessLineDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class BusinessLineService {

    /**
     * @param requestBody 
     * @returns BusinessLineDto Success
     * @throws ApiError
     */
    public static businessLineCreate(
requestBody?: CreateUpdateBusinessLineDto,
): CancelablePromise<BusinessLineDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/app/business-line',
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
     * @param name 
     * @param description 
     * @param category 
     * @param symbol 
     * @param coverFileId 
     * @param sorting 
     * @param skipCount 
     * @param maxResultCount 
     * @returns PagedResultDtoOfBusinessLineDto Success
     * @throws ApiError
     */
    public static businessLineGetList(
name?: string,
description?: string,
category?: BusinessLineCategory,
symbol?: string,
coverFileId?: string,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
): CancelablePromise<PagedResultDtoOfBusinessLineDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/app/business-line',
            query: {
                'Name': name,
                'Description': description,
                'Category': category,
                'Symbol': symbol,
                'CoverFileId': coverFileId,
                'Sorting': sorting,
                'SkipCount': skipCount,
                'MaxResultCount': maxResultCount,
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
     * @returns BusinessLineDto Success
     * @throws ApiError
     */
    public static businessLineUpdate(
id: string,
requestBody?: CreateUpdateBusinessLineDto,
): CancelablePromise<BusinessLineDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/app/business-line/{id}',
            path: {
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
     * @returns any Success
     * @throws ApiError
     */
    public static businessLineDelete(
id: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/app/business-line/{id}',
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
     * @param id 
     * @returns BusinessLineDto Success
     * @throws ApiError
     */
    public static businessLineGet(
id: string,
): CancelablePromise<BusinessLineDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/app/business-line/{id}',
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
