/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnterpriseDto } from './EnterpriseDto';

export type PagedResultDtoOfEnterpriseDto = {
    items?: Array<EnterpriseDto> | null;
    totalCount?: number;
};
