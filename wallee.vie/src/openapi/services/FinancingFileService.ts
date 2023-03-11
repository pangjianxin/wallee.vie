/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BusinessLicenseOcrRecoCacheItem } from '../models/BusinessLicenseOcrRecoCacheItem';
import type { CombineType } from '../models/CombineType';
import type { FinancingFileDto } from '../models/FinancingFileDto';
import type { FinancingFileType } from '../models/FinancingFileType';
import type { IdCardOcrRecoCacheItem } from '../models/IdCardOcrRecoCacheItem';
import type { PagedResultDtoOfFinancingFileDto } from '../models/PagedResultDtoOfFinancingFileDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class FinancingFileService {

    /**
     * @param fileType 
     * @param fileName 
     * @param formData 
     * @returns FinancingFileDto Success
     * @throws ApiError
     */
    public static financingFileUpload(
fileType: FinancingFileType,
fileName?: string,
formData?: {
File: Blob;
},
): CancelablePromise<FinancingFileDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/common/files/upload',
            query: {
                'FileName': fileName,
                'FileType': fileType,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
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
     * @param fileName 
     * @returns binary Success
     * @throws ApiError
     */
    public static financingFileDownload(
fileName?: string,
): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/common/files/download',
            query: {
                'fileName': fileName,
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
     * @returns any Success
     * @throws ApiError
     */
    public static financingFileDelete(
id?: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/common/files',
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
     * @param creationTimeMin 
     * @param creationTimeMax 
     * @param fileType 
     * @param skipCount 
     * @param maxResultCount 
     * @param sorting 
     * @param combineWith 
     * @returns PagedResultDtoOfFinancingFileDto Success
     * @throws ApiError
     */
    public static financingFileGetList(
filter?: string,
creationTimeMin?: string,
creationTimeMax?: string,
fileType?: FinancingFileType,
skipCount?: number,
maxResultCount?: number,
sorting?: string,
combineWith?: CombineType,
): CancelablePromise<PagedResultDtoOfFinancingFileDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/common/files',
            query: {
                'Filter': filter,
                'CreationTime.Min': creationTimeMin,
                'CreationTime.Max': creationTimeMax,
                'FileType': fileType,
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
     * @param fileName 
     * @returns any Success
     * @throws ApiError
     */
    public static financingFileDeleteByFileName(
fileName: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/common/files/fileName/{fileName}',
            path: {
                'fileName': fileName,
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
     * @param fileName 
     * @returns BusinessLicenseOcrRecoCacheItem Success
     * @throws ApiError
     */
    public static financingFileGetBusinessLisenseOcrResult(
fileName: string,
): CancelablePromise<BusinessLicenseOcrRecoCacheItem> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/common/files/businessLicenseOcr/{fileName}',
            path: {
                'fileName': fileName,
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
     * @param fileName 
     * @returns IdCardOcrRecoCacheItem Success
     * @throws ApiError
     */
    public static financingFileGetIdCardOcrResult(
fileName: string,
): CancelablePromise<IdCardOcrRecoCacheItem> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/common/files/idCardOcr/{fileName}',
            path: {
                'fileName': fileName,
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
