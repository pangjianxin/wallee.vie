/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export enum FinancialInteractionStatus {
    已创建待处理 = 1,
    银行端发起授权请求 = 2,
    企业端同意授权 = 3,
    企业端拒绝授权 = 4,
    企业端取消授权 = 5,
}
