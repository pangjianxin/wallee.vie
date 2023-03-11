/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Industry } from './Industry';
import type { OperatingTimeLimitType } from './OperatingTimeLimitType';

export type CreateEnterpriseCertificationDto = {
    enterpriseId?: string | null;
    verifiedCode: string;
    representativePhoneNumber: string;
    businessLicenseFileName: string;
    representativeIdCardFileName: string;
    representativeIdCardBackFileName: string;
    operatorIdCardFileName?: string | null;
    operatorIdCardBackFileName?: string | null;
    representativeAuthorizationFileName?: string | null;
    businessScope: string;
    representativeName: string;
    registeredCapital: number;
    enterpriseName: string;
    enterpriseUniscId: string;
    operatingTimeLimitDateEnd: string;
    approvalDate: string;
    operatingTimeLimitDateBegin: string;
    address: string;
    enterpriseType: string;
    registrationOrg: string;
    operatingTimeLimitType: OperatingTimeLimitType;
    industry: Industry;
    regionId: string;
    phone: string;
    operatorIdentity?: string | null;
    operatorIdCardName?: string | null;
    operatorIdCardNumber?: string | null;
    representativeIdNumber: string;
    representativeIdName: string;
    enterpriseAuthorizationFile: string;
    enterpriseAuthorizationFileExpiration: string;
};
