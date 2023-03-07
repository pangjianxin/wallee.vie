/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FileType } from './FileType';

export type FileDto = {
    id?: string;
    creationTime?: string;
    creatorId?: string | null;
    lastModificationTime?: string | null;
    lastModifierId?: string | null;
    parentId?: string | null;
    businessLine?: string | null;
    fileName?: string | null;
    version?: string | null;
    fileContainerName?: string | null;
    mimeType?: string | null;
    fileType?: FileType;
    byteSize?: number;
    blobName?: string | null;
    isPublic?: boolean;
    downloadCounter?: number;
};
