/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnterpriseCertificationOcrResultDto } from './EnterpriseCertificationOcrResultDto';
import type { EnterpriseCertificationStatus } from './EnterpriseCertificationStatus';
import type { EnterpriseCertificationUploadResultDto } from './EnterpriseCertificationUploadResultDto';

export type EnterpriseCertificationDto = {
    id?: string;
    creationTime?: string;
    creatorId?: string | null;
    lastModificationTime?: string | null;
    lastModifierId?: string | null;
    enterpriseName?: string | null;
    enterpriseUniscId?: string | null;
    enterpriseId?: string | null;
    certificationStatus?: EnterpriseCertificationStatus;
    businessLicenseFileName?: string | null;
    representativeIdCardFileName?: string | null;
    representativeIdCardBackFileName?: string | null;
    comment?: string | null;
    ocrResult?: EnterpriseCertificationOcrResultDto;
    uploadResult?: EnterpriseCertificationUploadResultDto;
};
