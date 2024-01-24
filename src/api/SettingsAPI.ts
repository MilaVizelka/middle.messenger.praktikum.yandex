import BaseAPI from './BaseAPI';
import {User} from "./AuthAPI.ts";

export interface SettingsData {
    first_name: "string",
    second_name: "string",
    display_name: "string",
    login: "string",
    email: "string",
    phone: "string"
}

export class SettingsAPI extends BaseAPI {
    constructor() {
        super('/user');
    }
    
    profile(data: SettingsData) {
        return this.http.put('/profile', data);
    }
    
    
    avatar(data: any) {
        return this.http.post('/avatar', data);
    }
    
    read(): Promise<User> {
        return this.http.get('/1349954');
    }
    
    create = undefined;
    update = undefined;
    delete = undefined;
}

export default new SettingsAPI();
