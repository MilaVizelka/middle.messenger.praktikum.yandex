export type InputProps = {
    placeholder?: string;
    type?: string;
    name?: string;
}

export type MenuProps = {
    item?: string;
    label?: string;
}

export type ButtonProps = {
    text: string;
}

export type CounterProps = {
    text: string;
}

export type ApiOptionsType = {
    method: string,
    data: any,
    headers: any,
    timeout: number
}

export type LinkProps = {
    to: string;
    content?: string;
}

export type TitleProps =  {
    title: string | number,
}

export enum  ProjectLinksEnum  {
    home = '/',
    'sign-in' = '/sign-in',
    'sign-up' = '/sign-up',
    'settings' = '/settings',
    'not-found' = '/not-found',
    'server-error' = '/server-error',
    'chats' = '/chats'
    
    
}
