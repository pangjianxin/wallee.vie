/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateUpdateFileDto } from '../models/CreateUpdateFileDto';
import type { FileDto } from '../models/FileDto';
import type { FileType } from '../models/FileType';
import type { PagedResultDtoOfFileDto } from '../models/PagedResultDtoOfFileDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class FileService {

    /**
     * @param requestBody 
     * @returns FileDto Success
     * @throws ApiError
     */
    public static fileCreate(
requestBody?: CreateUpdateFileDto,
): CancelablePromise<FileDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/app/file',
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
     * @param parentId 
     * @param businessLine 
     * @param fileName 
     * @param version 
     * @param fileContainerName 
     * @param mimeType 
     * @param fileType 
     * @param byteSize 
     * @param blobName 
     * @param isPublic 
     * @param downloadCounter 
     * @param sorting 
     * @param skipCount 
     * @param maxResultCount 
     * @returns PagedResultDtoOfFileDto Success
     * @throws ApiError
     */
    public static fileGetList(
parentId?: string,
businessLine?: string,
fileName?: string,
version?: string,
fileContainerName?: string,
mimeType?: string,
fileType?: FileType,
byteSize?: number,
blobName?: string,
isPublic?: boolean,
downloadCounter?: number,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
): CancelablePromise<PagedResultDtoOfFileDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/app/file',
            query: {
                'ParentId': parentId,
                'BusinessLine': businessLine,
                'FileName': fileName,
                'Version': version,
                'FileContainerName': fileContainerName,
                'MimeType': mimeType,
                'FileType': fileType,
                'ByteSize': byteSize,
                'BlobName': blobName,
                'IsPublic': isPublic,
                'DownloadCounter': downloadCounter,
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
     * @returns FileDto Success
     * @throws ApiError
     */
    public static fileUpdate(
id: string,
requestBody?: CreateUpdateFileDto,
): CancelablePromise<FileDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/app/file/{id}',
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
    public static fileDelete(
id: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/app/file/{id}',
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
     * @returns FileDto Success
     * @throws ApiError
     */
    public static fileGet(
id: string,
): CancelablePromise<FileDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/app/file/{id}',
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
