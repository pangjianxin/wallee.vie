/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FinancingFileType } from './FinancingFileType';

export type FinancingFileDto = {
    id?: string;
    creationTime?: string;
    creatorId?: string | null;
    lastModificationTime?: string | null;
    lastModifierId?: string | null;
    fileName?: string | null;
    contentType?: string | null;
    contentLength?: number | null;
    fileType?: FinancingFileType;
    tenantId?: string | null;
};
