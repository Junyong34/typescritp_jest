
 interface I_Headers {
    Accept: string;
    "Accept-Encoding": string;
    "Accept-Language": string;
    "Cache-Control": string;
    Host: string;
    "Sec-Fetch-Mode": string;
    "Sec-Fetch-Site": string;
    "Sec-Fetch-User": string;
    "Upgrade-Insecure-Requests": string;
    "User-Agent": string;
}

export interface restIFT {
    args: Record<string, any>;
    headers: I_Headers;
    origin: string;
    url: string;
}



// {
//     "args": {},
//     "headers": {
//     "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
//         "Accept-Encoding": "gzip, deflate, br",
//         "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
//         "Host": "httpbin.org",
//         "Sec-Fetch-Mode": "navigate",
//         "Sec-Fetch-Site": "none",
//         "Sec-Fetch-User": "?1",
//         "Upgrade-Insecure-Requests": "1",
//         "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36"
// },
//     "origin": "211.54.64.175, 211.54.64.175",
//     "url": "https://httpbin.org/get"
// }