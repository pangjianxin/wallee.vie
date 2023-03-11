/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FinancingRequirementState } from './FinancingRequirementState';
import type { FinancingRequirementType } from './FinancingRequirementType';
import type { GuaranteeMode } from './GuaranteeMode';
import type { RepaymentWays } from './RepaymentWays';

export type FinancingRequirementDto = {
    id?: string;
    creationTime?: string;
    creatorId?: string | null;
    lastModificationTime?: string | null;
    lastModifierId?: string | null;
    enterpriseId?: string | null;
    uniscId?: string | null;
    enterpriseName?: string | null;
    amount?: number;
    maturity?: number;
    releaseTime?: string;
    orientation?: string | null;
    state?: FinancingRequirementState;
    guaranteeMode?: GuaranteeMode;
    loanRate?: number;
    repaymentWays?: RepaymentWays;
    requirementType?: FinancingRequirementType;
    tenantId?: string | null;
};
