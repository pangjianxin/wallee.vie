/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Industry } from './Industry';
import type { OperatingTimeLimitType } from './OperatingTimeLimitType';

export type EnterpriseDto = {
    id?: string;
    creationTime?: string;
    creatorId?: string | null;
    lastModificationTime?: string | null;
    lastModifierId?: string | null;
    uniscId?: string | null;
    enterpriseName?: string | null;
    representativeName?: string | null;
    representativeIdNumber?: string | null;
    realNameCertification?: boolean;
    loaned?: boolean;
    address?: string | null;
    industry?: Industry;
    province?: string | null;
    city?: string | null;
    area?: string | null;
    areaCode?: string | null;
    registeredCapital?: number;
    businessScope?: string | null;
    operatingTimeLimitType?: OperatingTimeLimitType;
    operatingTimeLimitDateBegin?: string;
    operatingTimeLimitDateEnd?: string | null;
    approvalDate?: string;
    settlingTime?: string;
    tenantId?: string | null;
    representativePhoneNumber?: string | null;
    enterpriseType?: string | null;
    registrationOrg?: string | null;
    registrationOrgBranch?: string | null;
    phone?: string | null;
    industryCode?: string | null;
};
