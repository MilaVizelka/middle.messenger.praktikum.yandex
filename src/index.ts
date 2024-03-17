import './styles/style.sass'
import { NotFoundPage } from "./pages/error/not-found";
import { ServerErrorPage } from "./pages/error/server-error";
import { SignInPage } from "./pages/sign-in";
import { SignUpPage } from "./pages/sign-up";
import { ChatPage } from "./pages/chat";
import { SettingsPage } from "./pages/settings";
import Router from "./utils/Router.ts";

export enum Routes {
    SignIn = '/',
    SignUp = '/sign-up',
    Settings = '/settings',
    Chats = '/messenger',
    NotFound = '/not-found',
    ServerError = '/server-error',
}

window.addEventListener('DOMContentLoaded', async () => {
    const user = localStorage.getItem('user');
    
    if (!user) {
        await  Router.use(Routes.SignIn, SignInPage).start();
    }
        else await Router
            .use(Routes.SignIn, SignInPage)
            .use(Routes.SignUp, SignUpPage)
            .use(Routes.Settings, SettingsPage)
            .use(Routes.NotFound, NotFoundPage)
            .use(Routes.ServerError, ServerErrorPage)
            .use(Routes.Chats, ChatPage)
            .start();
    
});
