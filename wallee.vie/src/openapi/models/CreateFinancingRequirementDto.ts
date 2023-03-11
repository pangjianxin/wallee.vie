/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GuaranteeMode } from './GuaranteeMode';
import type { RepaymentWays } from './RepaymentWays';

export type CreateFinancingRequirementDto = {
    amount: number;
    maturity: number;
    orientation: string;
    guaranteeMode: GuaranteeMode;
    loanRate: number;
    repaymentWays: RepaymentWays;
    enterpriseId: string;
};
