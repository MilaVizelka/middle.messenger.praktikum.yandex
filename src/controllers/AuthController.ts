import API, { AuthAPI } from '../api/AuthAPI';
import store from '../utils/Store';
import router from '../utils/Router';
import MessagesController from './MessagesController';
import {handleError} from "../helpers/handleError.helper.ts";
import Router from "../utils/Router";
import {Routes} from "../index.ts";

export class AuthController {
    private readonly api: AuthAPI;
    
    constructor() {
        this.api = API;
    }
    
    async signin(data: any) {
        try {
            await this.api.signin(data);
            await this.fetchUser();
            Router
                .go(Routes.Chats)
            window.location.reload()
        } catch (e: any) {
            console.error(store.getState().responseAuthError)
            store.set('responseAuthError', e.reason)
            handleError(true);
        }
    }
    
    async signup(data: any) {
        try {
            await this.api.signup(data);
            
            await this.fetchUser();
            
            router.go('/messenger');
        } catch (e: any) {
            console.error(e.message);
        }
    }
    
    async user() {
        try {
            await this.api.user();
            await this.fetchUser();
            
        } catch (e: any) {
            console.error(e.message);
        }
    }
    
    async fetchUser() {
        const user = await this.api.read();
        localStorage.setItem('user', JSON.stringify(user));
        store.set('user', user);
    }
    
    async logout() {
        try {
            MessagesController.closeAll();
            await this.api.logout();
            localStorage.removeItem('user');
            router.go('/');
            window.location.reload()
        } catch (e: any) {
            console.error(e.message);
        }
    }
}

export default new AuthController();
