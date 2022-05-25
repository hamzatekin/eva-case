import { DEFAULT_API_ERROR_MESSAGE, DEFAULT_HEADERS } from '@/misc/const';
import axios, {
    AxiosError,
    type AxiosRequestConfig,
    type AxiosResponse,
} from 'axios';
import { getToken } from './auth';

export const insertTokenInterceptor = (req: AxiosRequestConfig) => {
    const token = getToken();
    if (token) {
        req.headers = {
            ...req.headers,
            ...{ Authorization: `Bearer ${token}` },
        };
    }

    return req;
};

export const evaApiResponseSuccessHandler = ({ data }: AxiosResponse) => {
    const evaSuccessResponse: BaseApiResponse<any> = data;
    return evaSuccessResponse.Data;
};

export const evaApiResponseErrorHandler = async (
    err: AxiosError<BaseApiResponse<null>>
) => {
    const errorMessage = DEFAULT_API_ERROR_MESSAGE;

    const { response } = err;

    console.log('response handler', response);

    const evaApiResponse = response?.data;

    throw new Error(evaApiResponse?.ApiStatusMessage || errorMessage);
};

const evaClient = axios.create({
    baseURL: import.meta.env.VITE_EVA_API_URL,
    headers: DEFAULT_HEADERS,
    timeout: Number(import.meta.env.VITE_EVA_API_URL) || 5000,
    responseType: 'json',
});

evaClient.interceptors.request.use(insertTokenInterceptor);

evaClient.interceptors.response.use(
    (response) => evaApiResponseSuccessHandler(response),
    (error) => evaApiResponseErrorHandler(error)
);

export default evaClient;
