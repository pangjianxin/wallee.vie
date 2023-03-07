/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BusinessLineCategory } from './BusinessLineCategory';

export type BusinessLineDto = {
    id?: string;
    creationTime?: string;
    creatorId?: string | null;
    lastModificationTime?: string | null;
    lastModifierId?: string | null;
    name?: string | null;
    description?: string | null;
    category?: BusinessLineCategory;
    symbol?: string | null;
    coverFileId?: string;
};
