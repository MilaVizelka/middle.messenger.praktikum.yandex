import {HTTPTransport, METHODS} from "../utils/HttpTransport.ts";

export const requestHandler = (obj: Record<string, unknown> | null) => {
    const transport = new HTTPTransport();
    const apiUrl = 'auth/signin';
    const options = {
        method: METHODS.POST,
        data: obj,
        headers: { 'Content-Type': 'application/json' },
        timeout: 5000,
    };
    
    transport.post(apiUrl, options)
        .then(response => {
            console.log('Response:', response);
        })
        .catch(error => {
            console.log('Error:', error);
        });
}
