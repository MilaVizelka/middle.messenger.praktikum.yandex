import HTTPTransport from "../utils/HttpTransport.ts";


export const requestHandler = (obj: Record<string, unknown> | null) => {
    const transport = new HTTPTransport('auth/signin');
    const apiUrl = 'auth/signin';
    const options = {
        method: 'POST',
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
