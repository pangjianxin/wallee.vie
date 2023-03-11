/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OperatingTimeLimitType } from './OperatingTimeLimitType';

export type BusinessLicenseOcrRecoCacheItem = {
    businessScope?: string | null;
    representativeName?: string | null;
    registeredCapital?: number;
    enterpriseName?: string | null;
    operatingTimeLimitDateEnd?: string | null;
    uniscId?: string | null;
    approvalDate?: string | null;
    operatingTimeLimitDateBegin?: string | null;
    address?: string | null;
    enterpriseType?: string | null;
    operatingTimeLimitType?: OperatingTimeLimitType;
};
