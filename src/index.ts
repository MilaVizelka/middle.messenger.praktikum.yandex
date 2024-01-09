import './styles/style.sass'
import {NotFoundPage} from "./pages/error/not-found";
import {ServerErrorPage} from "./pages/error/server-error";
import {SignInPage} from "./pages/sign-in";
import {SignUpPage} from "./pages/sign-up";
import {ChatPage} from "./pages/chat";
import {SettingsPage} from "./pages/settings";

// если поставить typeof Block вторым аргументом, то получаю ошибку в 25 строке
// пока не разобралась, чем заменить any
const ROUTES: Record<string, any> = {
    '/not-found': NotFoundPage,
    '/server-error': ServerErrorPage,
    '/sign-in':  SignInPage ,
    '/sign-up': SignUpPage,
    '/chats': ChatPage,
    '/settings': SettingsPage,
    '/': SignInPage,
}

window.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('app');
    
    if (root) {
        const Component = ROUTES[window.location.pathname] || NotFoundPage;
        const component = new Component();
        
        root.textContent = ''; // Clear the root element before appending new content
        root.appendChild(component.element!);
    }
})
