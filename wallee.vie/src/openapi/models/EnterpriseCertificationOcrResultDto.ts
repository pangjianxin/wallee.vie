/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OperatingTimeLimitType } from './OperatingTimeLimitType';

export type EnterpriseCertificationOcrResultDto = {
    id?: string;
    creationTime?: string;
    creatorId?: string | null;
    lastModificationTime?: string | null;
    lastModifierId?: string | null;
    certificationId?: string;
    businessScope?: string | null;
    representativeName?: string | null;
    registedCapital?: number;
    enterpriseName?: string | null;
    operatingTimeLimitDateEnd?: string;
    enterpriseUniscId?: string | null;
    approvalDate?: string;
    operatingTimeLimitDateBegin?: string;
    address?: string | null;
    enterpriseType?: string | null;
    operatingTimeLimitType?: OperatingTimeLimitType;
    idCardNumber?: string | null;
    idCardName?: string | null;
};
