/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CombineType } from '../models/CombineType';
import type { CreateQueryAuthorizationDefinitionDto } from '../models/CreateQueryAuthorizationDefinitionDto';
import type { PagedResultDtoOfQueryAuthorizationDefinitionDto } from '../models/PagedResultDtoOfQueryAuthorizationDefinitionDto';
import type { QueryAuthorizationDefinitionDto } from '../models/QueryAuthorizationDefinitionDto';
import type { UpdateQueryAuthorizationDefinitionDto } from '../models/UpdateQueryAuthorizationDefinitionDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class QueryAuthorizationDefinitionService {

    /**
     * @param requestBody 
     * @returns QueryAuthorizationDefinitionDto Success
     * @throws ApiError
     */
    public static queryAuthorizationDefinitionCreate(
requestBody?: CreateQueryAuthorizationDefinitionDto,
): CancelablePromise<QueryAuthorizationDefinitionDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/app/queryAuthorizationDefinitions',
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
    public static queryAuthorizationDefinitionDelete(
id?: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/app/queryAuthorizationDefinitions',
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
     * @param skipCount 
     * @param maxResultCount 
     * @param sorting 
     * @param combineWith 
     * @returns PagedResultDtoOfQueryAuthorizationDefinitionDto Success
     * @throws ApiError
     */
    public static queryAuthorizationDefinitionGetList(
filter?: string,
skipCount?: number,
maxResultCount?: number,
sorting?: string,
combineWith?: CombineType,
): CancelablePromise<PagedResultDtoOfQueryAuthorizationDefinitionDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/app/queryAuthorizationDefinitions',
            query: {
                'Filter': filter,
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
     * @returns QueryAuthorizationDefinitionDto Success
     * @throws ApiError
     */
    public static queryAuthorizationDefinitionUpdate(
id?: string,
requestBody?: UpdateQueryAuthorizationDefinitionDto,
): CancelablePromise<QueryAuthorizationDefinitionDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/app/queryAuthorizationDefinitions',
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
     * @returns QueryAuthorizationDefinitionDto Success
     * @throws ApiError
     */
    public static queryAuthorizationDefinitionGet(
id: string,
): CancelablePromise<QueryAuthorizationDefinitionDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/app/queryAuthorizationDefinitions/{id}',
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
     * @returns QueryAuthorizationDefinitionDto Success
     * @throws ApiError
     */
    public static queryAuthorizationDefinitionGetChildren(
parentId?: string,
): CancelablePromise<Array<QueryAuthorizationDefinitionDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/app/queryAuthorizationDefinitions/getChildren',
            query: {
                'parentId': parentId,
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
