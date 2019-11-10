import AxiosObj from "axios";
import moment from "moment";

export class ServiceCall {
    constructor(props) {
        // 헤더정보
        this.initProperty();
        if (props !== null) {
            this.createAxios(props);
        }
    }

    createAxios(props) {
        Object.keys(props).forEach(key => {
            this[key] = props[key];
        });
        const service = AxiosObj.create({
            baseURL: this.URL,
            HEADERS: this.HEADERS,
            // headers: {csrf: "token"},
        });

        // service.interceptors.response.use(this.handleSuccess, this.handleError);
        this.service = service;
    }

    initProperty() {
        this.URL = "";
        this.HEADERS = "";
    }

    // 공통 토큰 추가
    static commonHeaderToken(Token) {
        AxiosObj.defaults.headers.common.Authorization = Token;
    }

    // 토큰 셋팅 여부 확인
    static isToken() {
        if (AxiosObj.defaults.headers.common.Authorization != null) {
            return false;
        } else {
            return true;
        }
    }

    static clearToken() {
        AxiosObj.defaults.headers.common.Authorization = null;
    }

    // response 전에 처리할 로직 집어 넣기
    handleSuccess = response => response
    // 에러코드 처리 vue에서는 라우터에서 할듯 싶음
    handleError = error => {
        // switch (error.response.status) {
        //     case 401:
        //         this.redirectTo(document, "/");
        //         break;
        //     case 404:
        //         this.redirectTo(document, "/404");
        //         break;
        //     default:
        //         this.redirectTo(document, "/500");
        //         break;
        // }
        console.error(error);
        return Promise.reject(error);
    }
    // 페이지 이동 처리 현재 사용하지 않음
    redirectTo = (document, path) => {
        // document.location = path;
    }

    setApiPath(path) {
        this.path = path;
    }

    // getParamString(param) {
    //     let paramStr = "";
    //
    //     switch (typeof param) {
    //         case "string":
    //             paramStr = param;
    //             break;
    //         case "object":
    //             if (Object.keys(param).length === 0) {
    //                 break;
    //             } else {
    //                 const paramArr = [];
    //
    //                 for (const value in param) {
    //                     paramArr.push(`${value}=${param[value]}`);
    //                 }
    //                 paramStr = paramArr.join("&");
    //             }
    //             break;
    //         default:
    //             break;
    //     }
    //     return paramStr;
    // }

    get(payload, callback, contentType = "application/json", responseType = "json") {
        return this.service.request({
            method: "get",
            url: this.path,
            responseType,
            params: payload,
            headers: {"Content-Type": contentType},
        }).then(response => callback(response.status, response.data))
            .catch(error => {
                ServiceCall.servletError(error);
                // return error.response.data;
                return new Promise((resolve, reject) => {
                    reject(error);
                });
            });
    }

    patch(payload, callback, contentType = "application/json") {
        return this.service.request({
            method: "PATCH",
            url: this.path,
            responseType: "json",
            data: payload,
            headers: {"Content-Type": contentType},
        }).then(response => callback(response.status, response.data))
            .catch(error => {
                ServiceCall.servletError(error);
                // return error.response.data;
                return new Promise((resolve, reject) => {
                    reject(error);
                });
            });
    }

    post(payload, callback, contentType = "application/json") {
        return this.service.request({
            method: "POST",
            url: this.path,
            responseType: "json",
            data: payload,
            headers: {"Content-Type": contentType},
        }).then(response => callback(response.status, response.data))
            .catch(error => {
                ServiceCall.servletError(error);
                // return error.response.data;
                return new Promise((resolve, reject) => {
                    reject(error);
                });
            });
    }

    put(payload, callback, contentType = "application/json") {
        return this.service.request({
            method: "PUT",
            url: this.path,
            responseType: "json",
            data: payload,
            headers: {"Content-Type": contentType},
        }).then(response => callback(response.status, response.data))
            .catch(error => {
                ServiceCall.servletError(error);
                // return error.response.data;
                return new Promise((resolve, reject) => {
                    reject(error);
                });
            });
    }

    delete(payload, callback, contentType = "application/json") {
        return this.service.request({
            method: "DELETE",
            url: this.path,
            responseType: "json",
            data: payload,
            headers: {"Content-Type": contentType},
        }).then(response => callback(response.status, response.data))
            .catch(error => {
                ServiceCall.servletError(error);
                // return error.response.data;
                return new Promise((resolve, reject) => {
                    reject(error);
                });
            });
    }

    static servletError(error) {
        if (error.response) {
            const errorType = error.response.data;

            console.group(`%c ${"a"} API error Log Info`, `font-weight: bold; font-size: 15px;color: #FF0000;`);
            console.log(`%c ${"a"} - occurrence time: ${moment(errorType.timestamp).format("YYYY-MM-DD HH:mm:ss")}`
                , "font-size: 13px;color: red;");
            console.log(`%c ${"a"} - HTTP status: ${errorType.status} - error: ${errorType.error}`, "font-size: 13px;color: red;");
            console.log(`%c ${"a"} - API Error MSG: ${errorType.message}`, "font-size: 13px;color: red;");
            console.log(`%c ${"a"} - Server Error MSG: ${errorType.exception}`, "font-size: 13px;color: red;");
            console.log(`%c ${"a"} - API Call Path: ${errorType.path}`, "font-size: 13px;color: red;");
            console.log(`%c ${"a"} - CODE: ${errorType.code}`, "font-size: 13px;color: red;");
            console.groupEnd();
        } else if (error.request) {
            console.error(error.request);
        } else {
            console.error("Error", error.message);
        }
        // console.error(error.config);
    }
}


