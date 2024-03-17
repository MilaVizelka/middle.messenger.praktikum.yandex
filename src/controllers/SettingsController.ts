
import store from '../utils/Store';
import API, {SettingsAPI, SettingsData} from "../api/SettingsAPI.ts";

export class SettingsController {
    private readonly api: SettingsAPI;
    
    constructor() {
        this.api = API;
    }
    
    async profile(data: SettingsData, id: string) {
        try {
            await this.api.profile(data);
            
            await this.fetchUser(id);
            
            
        } catch (e: any) {
            console.error(e);
        }
    }
    
    async avatar(data: any, id: string) {
        try {
            await this.api.avatar(data);
            
            await this.fetchUser(id);
            
        } catch (e: any) {
            console.error(e.message);
        }
    }
    
    async fetchUser(id: string) {
        const user = await this.api.read(`/${id}`);
        
        store.set('user', user);
        localStorage.setItem('user', JSON.stringify(user))
        
    }
    

}

export default new SettingsController();
