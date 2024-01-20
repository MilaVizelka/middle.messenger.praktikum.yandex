
import store from '../utils/Store';
import API, { SettingsAPI } from "../api/SettingsAPI.ts";

export class SettingsController {
    private readonly api: SettingsAPI;
    
    constructor() {
        this.api = API;
    }
    
    async profile(data: any) {
        try {
            await this.api.profile(data);
            
            await this.fetchUser();
            
            
        } catch (e: any) {
            console.error(e);
        }
    }
    
    async avatar(data: any) {
        try {
            await this.api.avatar(data);
            
            await this.fetchUser();
            
        } catch (e: any) {
            console.error(e.message);
        }
    }
    
    async fetchUser() {
        const user = await this.api.read();
        
        store.set('user', user);
    }
    

}

export default new SettingsController();
