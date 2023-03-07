/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FileDto } from './FileDto';

export type PagedResultDtoOfFileDto = {
    items?: Array<FileDto> | null;
    totalCount?: number;
};
