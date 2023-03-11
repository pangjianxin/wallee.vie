/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Industry } from './Industry';
import type { OperatingTimeLimitType } from './OperatingTimeLimitType';

export type EnterpriseCertificationUploadResultDto = {
    id?: string;
    creationTime?: string;
    creatorId?: string | null;
    lastModificationTime?: string | null;
    lastModifierId?: string | null;
    certificationId?: string;
    businessScope?: string | null;
    representativeName?: string | null;
    registeredCapital?: number;
    enterpriseName?: string | null;
    enterpriseUniscId?: string | null;
    operatingTimeLimitDateEnd?: string;
    approvalDate?: string;
    operatingTimeLimitDateBegin?: string;
    address?: string | null;
    enterpriseType?: string | null;
    representativeIdNumber?: string | null;
    representativePhoneNumber?: string | null;
    industry?: Industry;
    regionId?: string;
    operatingTimeLimitType?: OperatingTimeLimitType;
    registrationOrg?: string | null;
    phone?: string | null;
};
