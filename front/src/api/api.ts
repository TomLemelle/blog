import axios, { AxiosResponse } from 'axios';

interface apiResponse {
    (): Promise<{ responseCode: number, responseData: [], responseMessage: string }>
}

const instance = axios.create({
    baseURL: 'http://127.0.0.1:4001/',
    timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data.responseData;

const requests = {
    get: (url: string) => instance.get(url).then(responseBody),
    post: (url: string, data: object) => instance.post(url, data).then(responseBody),
    put: (url: string, data: object) => instance.put(url, data).then(responseBody),
    delete: (url: string) => instance.delete(url).then(responseBody),
};

export const Users = {
    userAuth: (data): Promise<any> => requests.post('auth', data),
}