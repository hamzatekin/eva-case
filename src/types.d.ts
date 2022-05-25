interface ImportMetaEnv {
    readonly VITE_EVA_API_URL: string;
    readonly VITE_AXIOS_TIMEOUT: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

interface BaseApiResponse<T> {
    ApiStatus: boolean;
    ApiStatusCode: string;
    ApiStatusMessage: string;
    Data: T = any;
}

interface User {
    firstName: string;
    lastName: string;
    email: string;
    countryCode: string;
    callingCode: string;
    telephoneNumber: string;
    isAdmin: string;
    store: string[];
    packageInformation: PackageInformationType;
    isLinkAccount: true;
    linkAccountParameters: LinkAccountParametersType;
}

interface TurnoverPackageInformationType {
    pricingStatus: number;
    packageName: string;
    monthlyFee: number;
    lowerLimit: number;
    upperLimit: number;
    reimbursementCredit: number;
}

interface SkuPackageInformationType {
    packageName: string;
    skuChargeFee: number;
}

interface LinkAccountParametersType {
    developerName: string;
    accountNumber: string;
}

interface PackageInformationType {
    turnoverPackageInformation: TurnoverPackageInformationType[];
    skuPackageInformation: SkuPackageInformationType[];
}

interface LoginDto {
    email: string;
    password: string;
}

interface LoginResponseData {
    user: User;
    token: string;
    isLinkAccount: boolean;
    linkAccountParameters: Record<string, any>;
}

interface SalesFinanceResponseData {
    Currency: string;
    item: SalesFinanceItem[];
    lastSettlementDate: 'string';
    enable12Month: true;
}

interface SalesFinanceItem {
    totalSales: number;
    totalExpenses: number;
    refund: number;
    reimbursement: number;
    itemQuantity: number;
    avgSalesPrice: number;
    date: string;
    cogs: number;
}

interface GetSalesFinanceDto {
    marketplace: string;
    sellerId: string;
}

type GetSalesAndExpenseByDateDto = GetSalesFinanceDto & {
    date: {
        month: number;
        year: number;
    };
};

interface SalesAndExpenseByDateResponseData {
    currency: string;
    item: [
        {
            type: string;
            amount: number;
        }
    ];
    totalExpenses: number;
    lastSettlementDate: string;
}
