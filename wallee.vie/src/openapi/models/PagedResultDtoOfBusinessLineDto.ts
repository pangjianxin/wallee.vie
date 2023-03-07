/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BusinessLineDto } from './BusinessLineDto';

export type PagedResultDtoOfBusinessLineDto = {
    items?: Array<BusinessLineDto> | null;
    totalCount?: number;
};
