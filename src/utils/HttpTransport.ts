import {ApiOptionsType} from '../models/project.model.ts';

export const METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE:'DELETE'
};

function queryStringify(data: string) {
    return `?${Object.entries(data).map(([key, val]) => `${key}=${val}`).join('&')}`;
}

export class HTTPTransport {
    get(url: string, options: ApiOptionsType) {
        return this.request(url, {...options, method: METHODS.GET})
    }
    post(url: string, options: ApiOptionsType) {
        return this.request(url, {...options, method: METHODS.POST})
    }
    delete(url: string, options: ApiOptionsType) {
        return this.request(url, {...options, method: METHODS.DELETE})
    }
    put(url: string, options: ApiOptionsType) {
        return this.request(url, {...options, method: METHODS.PUT})
    }
    
    request = (url: string, options: ApiOptionsType) => {
        const {method, data, headers={}, timeout} = options;
        
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            
            if (method === METHODS.GET) {
                xhr.open(method, `${url}/${queryStringify(data)}`);
            } else xhr.open(method, url);
            
            Object.keys(headers).forEach(key => {
                return xhr.setRequestHeader(key, headers[key]);
            });
            
            xhr.timeout = timeout | 5000;
            
            console.log(data)
            
            if (method === METHODS.GET || !data) {
                xhr.send();
            } else {
                xhr.send(JSON.stringify(data));
            }
            
            xhr.onload = function() {
                resolve(xhr);
            };
            
            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.ontimeout = reject;
            
        }).catch(error => console.log(error))
    };
}
