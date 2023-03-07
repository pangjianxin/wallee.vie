/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BusinessLineCategory } from './BusinessLineCategory';

export type CreateUpdateBusinessLineDto = {
    name?: string | null;
    description?: string | null;
    category?: BusinessLineCategory;
    symbol?: string | null;
    coverFileId?: string;
};
