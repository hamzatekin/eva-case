import { EvaApiEndpoint } from '@/misc/enum';
import evaClient from './eva-client';

export const login = async (payload: LoginDto): Promise<LoginResponseData> => {
    return evaClient.post(EvaApiEndpoint.LOGIN, payload);
};

export const getSalesFinance = async (
    salesFinanceDto: GetSalesFinanceDto
): Promise<SalesFinanceResponseData> => {
    return evaClient.post(EvaApiEndpoint.SALES_FINANCE, salesFinanceDto);
};

export const getSalesAndExpenseByDate = async (
    salesAndExpenseDto: GetSalesAndExpenseByDateDto
): Promise<SalesAndExpenseByDateResponseData> => {
    return evaClient.post(
        EvaApiEndpoint.SALES_AND_EXPENSE_BY_REQUEST_DATE,
        salesAndExpenseDto
    );
};
