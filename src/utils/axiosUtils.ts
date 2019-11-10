import Axios, {AxiosRequestConfig, Method} from 'axios';

Axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTU2MjY0ODQ4OCwiZXhwIjoxNDk3NDQzNDA4OH0.GY0HpRi3xLmfb5pzQvnZdHCmQ2Xn7iXcwFBnLyWMa0OZuzRDTw7P1X417zTRAZHIafAOMgrUqjUhjzFqho-4uQ`;
const headerEnv = {
    Accept: "application/json",
    "Content-Type": "application/json",
};
const requestInstance = Axios.create({
    // timeout: 15000,
    headers: headerEnv,
});

const request = <T>(
    url: string,
    method: Method,
    params?: any,
    config?: AxiosRequestConfig
) => {
    return requestInstance
        .request<T>({
            ...config,
            method,
            url,
            data: params && method !== 'get' ? params : undefined,
            params: params && method === 'get' ? params : undefined,
        }).then(res => {
            console.log(res);
        })
        .catch(error => {
            if (error.response) {
            } else if (error.request) {
                console.error(error.request);
            } else {
                console.error("Error", error.message);
            }

            return Promise.reject(error);
        });
};
// ? 왜 오류 ?
// export const delete = <T>(url: string, data?: any, config?: AxiosRequestConfig) =>
//     request<T>(url, 'delete', data, config);

export const get = <T>(url: string, data?: any, config?: AxiosRequestConfig) =>
    request<T>(url, 'get', data, config);

export const post = <T>(url: string, data?: any, config?: AxiosRequestConfig) =>
    request<T>(url, 'post', data, config);

export const put = <T>(url: string, data?: any, config?: AxiosRequestConfig) =>
    request<T>(url, 'put', data, config);

export const patch = <T>(url: string, data?: any, config?: AxiosRequestConfig) =>
    request<T>(url, 'patch', data, config);

