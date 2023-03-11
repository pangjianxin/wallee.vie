/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LicenseFileType } from './LicenseFileType';
import type { LoanStage } from './LoanStage';

export type QueryAuthorizationDto = {
    id?: string;
    creationTime?: string;
    creatorId?: string | null;
    lastModificationTime?: string | null;
    lastModifierId?: string | null;
    financialInteractionId?: string;
    authorizedStartTime?: string;
    authorizedEndTime?: string;
    count?: number;
    loanStage?: LoanStage;
    licenseFileType?: LicenseFileType;
    authorizedInfos?: string | null;
    authorizedDetails?: string | null;
    licenseId?: string | null;
};
