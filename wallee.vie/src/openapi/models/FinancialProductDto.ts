/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ApprovalMode } from './ApprovalMode';
import type { ProductType } from './ProductType';

export type FinancialProductDto = {
    id?: string;
    creationTime?: string;
    creatorId?: string | null;
    lastModificationTime?: string | null;
    lastModifierId?: string | null;
    financialInstitutionId?: string;
    name?: string | null;
    approvalMode?: ApprovalMode;
    guaranteeMode?: string | null;
    loanLimitBegin?: number;
    loanLimitEnd?: number;
    loanPeriodBegin?: number;
    loanPeriodEnd?: number;
    rateRangeBegin?: number;
    rateRangeEnd?: number;
    belongInstitution?: string | null;
    policyProd?: boolean;
    descs?: string | null;
    type?: ProductType;
    repayments?: string | null;
    serviceCities?: string | null;
    shortName?: string | null;
    entryCriteria?: string | null;
    characteristics?: string | null;
    cases?: string | null;
    releasedTime?: string;
    tenantId?: string | null;
};
