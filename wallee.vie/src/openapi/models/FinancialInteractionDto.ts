/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FinancialInteractionItemDto } from './FinancialInteractionItemDto';
import type { FinancialInteractionStatus } from './FinancialInteractionStatus';
import type { QueryAuthorizationDto } from './QueryAuthorizationDto';

export type FinancialInteractionDto = {
    id?: string;
    creationTime?: string;
    creatorId?: string | null;
    lastModificationTime?: string | null;
    lastModifierId?: string | null;
    institutionId?: string;
    institutionName?: string | null;
    institutionUniscId?: string | null;
    institutionCode?: string | null;
    enterpriseId?: string;
    enterpriseName?: string | null;
    enterpriseUniscId?: string | null;
    licenseId?: string | null;
    status?: FinancialInteractionStatus;
    tenantId?: string | null;
    queryAuthorization?: QueryAuthorizationDto;
    items?: Array<FinancialInteractionItemDto> | null;
    comment?: string | null;
};
